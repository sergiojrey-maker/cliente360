# Estado de construcción del snapshot

**Sub-cuenta:** Cliente 360 — Snapshot Maestro · Location ID `PF7DK8r0SiEtcVhO4Trt`
**Valores de demo:** Barbería Demo, meta 10 sellos, PIN de equipo `3600`, WhatsApp de MD360 (solo demo).

## ⚠️ Arquitectura confirmada por Sergio (4 oct 2026) — leer antes de construir
| Sub-cuenta | Para qué | WhatsApp |
|---|---|---|
| **Cliente 360 — Snapshot Maestro** (`PF7DK8r0SiEtcVhO4Trt`) | **Plantilla maestra.** De aquí sale el snapshot que se duplica a cada negocio cliente. Se construye completa y limpia. | **Ninguno por ahora.** No se compra SIM nueva. Las pruebas de WhatsApp se hacen en la demo de Mall Digital 360, con el 320 |
| **Mall Digital 360** (`WZYaJ8M4dqpvhdM2gpip`) | **Aquí vive la DEMO** que prueban los dueños en charlas y diagnósticos, **y el CRM comercial** de MD360 (prospectos → diagnóstico → cliente). Solo se importan los activos de demo, aislados (prefijo "DEMO —", palabra `DEMO`, tag `demo-c360`, **sin** GEN-01). | El **320 405 5485**, que ya está conectado |
| Sub-cuenta de cada cliente | Copia del snapshot, con sus custom values reales | La línea del club del negocio |

## Hecho por API (4 oct 2026, sesión en la nube)
- ✅ **47 custom values** (todos los de la spec, sección 2). Formato de uso: `{{ custom_values.nombre }}`.
  - `resena_link_google` está en `https://g.page/r/REEMPLAZAR/review`: hay que poner el enlace real.
  - `club_link_terminos` apunta provisionalmente a malldigital360.com/terminos-y-condiciones.
- ✅ **30 campos de contacto**: `club_sellos`, `club_sellos_faltan`, `club_premios_canjeados`, `visitas_total`, `calificacion_encuesta`, `fecha_ultima_visita`, `club_fecha_ingreso`, `fecha_solicitud_resena`, `fecha_reactivacion`, `fuente_registro`, `club_codigo_premio`, `resena_estado`, `autorizacion_datos`, `pin_equipo`, `rep_*` (10) e `inst_*` (5). Formato: `{{contact.nombre}}`.
- ✅ **15 tags**: `dueno`, `empleado`, `club-miembro`, `club-premio-pendiente`, `club-premio-canjeado`, `resena-solicitada`, `resena-inconforme`, `resena-inconforme-atendido`, `rr-base-importada`, `rr-encuesta-enviada`, `rea-enviada`, `rea-volvio`, `ca-redimio`, `baja`, `sin-whatsapp`.

## Hecho (4 oct 2026, Claude local con Chrome + API)
- ✅ **Pipeline "Órdenes"**: Recibido (20 %) → En proceso (40 %) → Entregado (100 %). Creado en la UI: el conector de la API no tiene operación para crear pipelines.
- ✅ **Calendario "Cita — Demo"** (tipo evento, 45 min, ID `rB07UBPC6ys6jJ41noJw`, slug `c360-snapshot-cita-demo`). Pendiente: horario, y traducir al español el mensaje de gracias y el texto de consentimiento (quedaron en inglés por defecto).
- ✅ **3 contactos de prueba**, sin teléfono para que ningún envío le llegue a un número real (el celular se agrega en la prueba):
  - Dueño Prueba (tag `dueno`) `cJ1wnGsvFA3jLbWPBseO`
  - Empleado Prueba (tag `empleado`) `uy1G8VMTnPPfD3tayzLt`
  - Cliente Prueba `IrDvNbvyFjI2D4epfhn6`

## Workflows (4 oct 2026, en borrador, revisados a mano)
- ✅ **GEN-01 Baja**: disparador "Customer replied" con mensaje exacto BAJA / NO / STOP en cualquier canal (sin condición de `sis_estado`: una baja se respeta siempre) → respuesta (SMS provisional) → tag `baja` → DND en todos los canales.
- ✅ **RES-02 Alerta de inconforme**: sin disparador (lo llama RES-01) → If/Else `sis_estado` = activo → notificación interna por SMS al número `{{custom_values.negocio_whatsapp_dueno}}` con trigger link → tarea "Llamar a …" a 1 día.
- ✅ **RES-01 Solicitud de reseña** (construido a mano): sin disparador (lo llama VIS-01) → If/Else `sis_estado` = activo → tag `resena-solicitada` → `fecha_solicitud_resena` = fecha actual → espera **dinámica** `{{custom_values.resena_espera_minutos}}` minutos → encuesta 1–5 → espera respuesta (máx. 2 días).
  - Responde **4 o 5:** guarda la respuesta → gracias + enlace.
  - Responde **1, 2 o 3:** guarda la respuesta → tag `resena-inconforme` → llama RES-02 → disculpa + enlace.
  - **Otra respuesta:** gracias + enlace.
  - **Sin respuesta:** un recordatorio con enlace.
  - El enlace de Google le llega a **todos** (sin filtrado de reseñas).
  - Mensajes en "SMS provisional" con el nombre de su plantilla (`c360_encuesta`, `c360_resena_enlace`, `c360_resena_inconforme`, `c360_resena_recordatorio`).
  - Campo nuevo `calificacion_respuesta` (texto, creado por API): el campo numérico `calificacion_encuesta` no acepta `{{message.body}}`. **Pendiente:** que RES-02 muestre `calificacion_respuesta` en la alerta.
- ✅ **CLUB-02 Sello** (construido a mano): sin disparador (lo llama VIS-01) → If/Else `sis_estado` = activo → math `club_sellos` +1 → math `club_sellos_faltan` −1 → If/Else sobre `club_sellos_faltan`:
  - **≤ 0:** tag `club-premio-pendiente` + mensaje de premio (`c360_premio`).
  - **= 2:** "¡Ya casi!" (`c360_faltan_2`).
  - **Otro valor:** "sello X de N" (`c360_sello`).
- ✅ **VIS-01 Visita** (construido a mano): 3 disparadores (formulario "Atendido"; cita con estado "Showed" en cualquier calendario; oportunidad de "Órdenes" movida a "Entregado") + se puede llamar con "Add to workflow".
  - If/Else **"Inválida"** si (`pin_equipo` no está vacío **y** ≠ `{{custom_values.sis_pin_equipo}}`) **o** (`fecha_ultima_visita` es hoy) → borra `pin_equipo` y termina.
  - Si la visita es válida: borra `pin_equipo` → `fecha_ultima_visita` = hoy → `visitas_total` +1 → llama CLUB-02 → llama RES-01.
  - Los filtros quedaron dentro de cada workflow llamado, porque GHL no vuelve a unir ramas: CLUB-02 exige `sis_modulo_sellos = si` y RES-01 exige "sin tag `resena-solicitada`".
  - `fecha_reactivacion` no se calcula aquí: se resuelve en REA-01 (lote 2), a partir de `fecha_ultima_visita`.
  - "Allow re-entry" viene activado por defecto.
- ✅ **CLUB-01 Ingreso al club** (construido a mano, 0 errores): disparadores = formulario "Ingreso al club" + mensaje que contiene "CLUB" (el disparador no acepta custom values). `sis_estado` = activo → si ya tiene `club-miembro`: "ya eres miembro" (`c360_ya_miembro`) y termina. Si no: tag `club-miembro` → `fuente_registro`=qr, `autorizacion_datos`=si, `club_fecha_ingreso`=fecha actual → `club_sellos`×0 → `club_sellos_faltan`×0+`club_meta_visitas` → bienvenida (`c360_bienvenida`) → si `club_regalo_bienvenida` no está vacío: regalo (`c360_regalo`) → llama VIS-01 (primer sello).
  - **Pendiente:** pedir el cumpleaños (paso 6 de W1), esperando la decisión de diseño (`club_link_registro`).
- ✅ **CLUB-04 Mis sellos** (0 errores): mensaje que contiene "MIS SELLOS" o "MIS PUNTOS" → si `sis_estado`=activo **y** tiene `club-miembro` → conteo de sellos (respuesta dentro de la ventana de 24 h, no necesita plantilla). A los que no son miembros no les responde.
- ✅ **CLUB-03 Canje** (0 errores): disparador = formulario "Canjear". If/Else "¿Canje válido?":
  - **PIN incorrecto** (`pin_equipo` ≠ `sis_pin_equipo`): borra el PIN y termina.
  - **Sin premio pendiente** (no tiene `club-premio-pendiente`): borra el PIN → aviso interno por SMS a `{{custom_values.negocio_whatsapp_dueno}}`.
  - **Canje válido:** borra el PIN → quita `club-premio-pendiente` → pone `club-premio-canjeado` → `club_premios_canjeados` +1 → `club_sellos`×0 → `club_sellos_faltan`×0+meta → mensaje al cliente (`c360_canje`).
  - No revisa `sis_estado`: el canje es una acción del equipo en caja y se registra aunque el sistema esté en PAUSA.
  - La suma a "redenciones del dueño" (dinero medido) queda para REP-01 (lote 2).
- ✅ **RES-02 corregido:** la alerta ahora muestra `{{contact.calificacion_respuesta}}`. Se quitó el trigger link "Inconforme atendido" del aviso, porque el clic del dueño no queda asociado al cliente inconforme. RES-02b queda sin uso hasta rediseñarlo.
- ⚠️ **Detalle a revisar en CLUB-02:** con `club_sellos_faltan ≤ 0`, cada visita nueva antes del canje vuelve a enviar el mensaje de premio. Puede servir de recordatorio, pero cuesta una plantilla por visita.
- ✅ **RES-02b Inconforme atendido**: trigger link "Inconforme atendido" → tag `resena-inconforme-atendido`. Trigger link creado, redirige provisionalmente a malldigital360.com.

## Revisión [Claude nube] del lote 1 (4 oct 2026, por API + notas)
**Por API:** 9 workflows en la plantilla maestra, **todos en borrador**: CLUB-01, CLUB-02, CLUB-03, CLUB-04, VIS-01, RES-01, RES-02, RES-02b y GEN-01. En Mall Digital 360 no se creó nada. ✅

**Ajustes recomendados al Claude local (en orden de importancia):**
1. **GEN-01: quitar "NO" de las palabras de baja; dejar BAJA y STOP.** Un cliente real que conteste "no" a cualquier mensaje, por ejemplo "¿algo que podamos mejorar?" o una oferta, quedaría en DND para siempre y el negocio lo pierde. En los textos se avisa "responde BAJA".
2. **CLUB-02 con premio pendiente:** si `club_sellos_faltan` ≤ 0 y ya tiene `club-premio-pendiente`, no seguir restando ni repetir el mensaje de premio en cada visita (cuesta una plantilla por visita y cansa). Mandar un recordatorio corto **una sola vez** ("recuerda pedir tu premio en caja") o nada.
3. **RES-02 y CLUB-03 avisan al dueño por SMS interno.** Cambiarlos a "Send internal notification" → WhatsApp/push al **usuario** dueño, como decidió Sergio. Así no hace falta un número SMS (LC Phone) en Colombia.
4. **RES-02b quedó huérfano** (se quitó el trigger link). O se rediseña (el dueño responde `ATENDIDO` + celular por la app) o se borra antes de crear el snapshot, para no llevar basura a los clientes.
5. **CLUB-01 se dispara con mensajes que "contienen CLUB".** Está bien porque el "ya eres miembro" lo ataja, pero conviene que la condición sea "es exactamente" o "empieza por" CLUB, para no reaccionar a frases como "me salgo del club".

**Aplicado por [Claude local] (4 oct 2026, 0 errores en todos):**
1. ✅ **GEN-01:** las palabras de baja ahora son solo BAJA y STOP (también Baja/baja/Stop/stop, porque "Exactly matches" podría distinguir mayúsculas). Se quitó "NO".
2. ✅ **CLUB-02:** la rama "Activo" exige además que el contacto **no** tenga `club-premio-pendiente`. Hay una rama nueva **"Premio pendiente"** (activo + tiene `club-premio-pendiente` + no tiene `club-premio-recordado`): envía **un solo** recordatorio ("recuerda que tienes {{club_premio}} esperándote…", plantilla `c360_recordar_premio`) y pone el tag `club-premio-recordado` (creado por API). Si ya se le recordó, cae en None y no hace nada. Mientras haya premio pendiente no suma sellos.
   - **CLUB-03** ahora quita `club-premio-pendiente` **y** `club-premio-recordado` al canjear.
3. ✅ **RES-02 y CLUB-03:** el aviso al dueño pasó a "Send internal notification" → **WhatsApp**.
   - GHL exige elegir un usuario y la plantilla maestra no tiene ninguno. Quedó en **"Assigned owners" (Contact owner)** como valor provisional, que sí guarda.
   - **Paso de instalación (obligatorio):** abrir cada acción con "INSTALACIÓN: elegir usuario dueño" en el nombre y cambiarla a "Particular User" = el dueño. Hoy son 2: RES-02 y CLUB-03.
   - **Por probar en la demo:** si el WhatsApp interno a usuarios exige plantilla aprobada fuera de la ventana de 24 h.
4. ✅ **RES-02b borrado** (pestaña "Deleted"; GHL lo elimina del todo a los 30 días). El trigger link "Inconforme atendido" sigue existiendo sin uso: borrarlo o reutilizarlo al rediseñar el "ya lo atendí".
5. ✅ **CLUB-01:** el disparador es "Exactly matches" CLUB / Club / club. GHL no ofrece "empieza por". **Consecuencia para la instalación:** el texto prellenado del QR (wa.me) debe ser exactamente la palabra, sin saludo.

## Formularios y encuestas (4 oct 2026, construidos a mano)
- ✅ **F1 Atendido**: título "✅ Atendido — {{custom_values.negocio_nombre}}", Nombre (opcional), Celular (obligatorio), PIN del equipo (campo `pin_equipo`, obligatorio), botón "Registrar visita", mensaje "Listo ✅". Sticky contact apagado (vital: el empleado lo usa desde un solo celular); "guardar progreso" apagado.
- ✅ **F2 Canjear**: título "🎁 Canjear premio — {{custom_values.club_nombre_completo}}", Celular + PIN, botón "Canjear", mensaje "Premio registrado 🎁".
- ✅ **F3 Ingreso al club**: título "Únete al {{custom_values.club_nombre_completo}} {{custom_values.negocio_emoji}}", Nombre (obligatorio), Celular/WhatsApp (obligatorio), autorización de datos (elemento T&C, obligatorio, texto con custom values y enlace de términos), cumpleaños (fecha de nacimiento, opcional), botón "Unirme al club". La autorización quedó antes del cumpleaños: el builder no deja reordenar. `autorizacion_datos = si` lo pone el workflow CLUB-01.
- ✅ **F4 Satisfacción** (encuesta): diapositiva 1 = calificación 1–5 en `calificacion_encuesta` (numérico) + celular; diapositiva 2 = "¿Algo que podamos mejorar?" (opcional). Mensaje "Gracias por contarnos 🙏".
- ✅ **F5 Instalación Cliente 360** (encuesta): celular del dueño + `inst_ticket`, `inst_visitas_anio`, `inst_nuevos_mes`, `inst_meta`, `inst_premio`.
- Por revisar en la prueba:
  - que los `{{custom_values.…}}` se vean bien en el formulario publicado;
  - los textos en inglés que pone GHL por defecto ("Privacy Policy | Terms of Service", "Submit/Next/Go Back" en encuestas, mensaje del calendario);
  - si cambiar la calificación a estrellas (hoy es un número del 1 al 5).

## Hallazgos de la construcción (4 oct 2026)
1. **Ask AI no sirve para construir workflows confiables.** De 3 workflows, hizo: condiciones falsas (acciones "Add notes" en lugar de If/Else), un disparador webhook innecesario con error, un paso DND corrupto, filtros de canal que se excluían entre sí (SMS **y** WhatsApp), mensajes en SMS en vez de WhatsApp, una alerta "al dueño" que en realidad le llegaba **al cliente inconforme**, y nombres fuera de la spec. Tampoco puede crear formularios (no tiene esa herramienta; solo ofrece instalar su extensión de Chrome). **Decisión:** Claude construye los workflows directamente en el builder con Chrome.
2. **El If/Else sí puede leer custom values** (`sis_estado`, `sis_modulo_*`): el diseño de interruptores funciona.
   - **Pruebas de la sección 8 de la spec, resueltas en el builder:**
     - La espera acepta valor **dinámico** (custom value): `resena_espera_minutos` funciona.
     - La **operación matemática** acepta custom values como operando: `club_sellos_faltan` = 0 + `club_meta_visitas` es posible, y el conteo regresivo se mantiene.
     - "Update contact field" **no** acepta texto ni merge fields en un campo numérico; en uno de texto sí (`{{message.body}}`).
     - Los campos de fecha tienen la opción "Current date".
3. **La acción "WhatsApp" de los workflows exige una plantilla aprobada por Meta**, incluso para responder dentro de las 24 h. La sub-cuenta plantilla no tiene WhatsApp conectado. Mientras tanto los mensajes van en acciones SMS marcadas "(SMS provisional)".
4. **Mensajes al dueño:** la acción "SMS" siempre le escribe al contacto. Para el dueño se usa "Send internal notification":
   - SMS → permite número personalizado (`{{custom_values.negocio_whatsapp_dueno}}`), pero en Colombia exige número SMS (LC Phone).
   - WhatsApp → solo a **usuarios** de la sub-cuenta (no a un número libre).
   - Notificación push de la app LeadConnector → a usuarios.
   - **Por decidir:** que el dueño sea usuario de su sub-cuenta (recibe WhatsApp interno y push en la app). Pendiente de decisión de Sergio.
5. **Trigger links en mensajes al dueño:** el clic se atribuye a quien recibió el mensaje. Si la alerta va por notificación interna, el clic de "Ya lo atendí" no queda ligado al cliente inconforme. Hay que rediseñar ese botón; opción: el dueño responde por la app LeadConnector o con una palabra clave.
6. En la sub-cuenta aparece instalada la app **"WhatsApp Connector Wa2"** (no oficial). No se usa: va contra la regla de la línea con la API oficial.

## Decisiones de Sergio (4 oct 2026)
- **Alertas y reportes al dueño:** el dueño queda como **usuario de su sub-cuenta**. Recibe por "Send internal notification" → WhatsApp (usuario) y push en la app LeadConnector. Consecuencia: en cada instalación hay que crear el usuario del dueño y elegirlo en las notificaciones internas, porque los usuarios no viajan en el snapshot. Va en la lista de instalación.
- **Mensajes a clientes:** se construyen con WhatsApp de verdad y plantillas aprobadas, no con SMS. Las acciones "SMS provisional" que ya existen se cambian cuando haya plantillas.
- ~~Número para Snapshot Maestro: SIM prepago nueva~~ → **Corregido por Sergio (4 oct): NO hay línea nueva.** La demo usa el **320 405 5485** en Mall Digital 360. La maestra se construye sin WhatsApp. Las pruebas de WhatsApp (plantillas y flujos) se hacen en la demo de MD360, importando los activos desde la maestra. Las plantillas de Meta van por número, así que cada cliente aprueba las suyas en su instalación.
  - Ojo: la verificación del negocio en Meta figura **"Not Verified"**. Sin verificar, los límites de conversaciones iniciadas por el negocio son bajos. Conviene iniciarla ya.

## Pendiente (Claude local con Chrome)
- [x] F1–F5 (formularios y encuestas)
- [ ] Workflows W1–W8 y lote 2, construidos directamente en el builder (Ask AI descartado para workflows)
- [ ] Iniciar la verificación del negocio en Meta (hoy "Not Verified")
- [ ] Pruebas de la sección 8 de la spec
- [ ] P1 (`/club`) y P2 (parche) en la sub-cuenta Mall Digital 360
