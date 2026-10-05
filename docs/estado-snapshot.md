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

## Lote 2 (4 oct 2026, Claude local, en borrador)
**Cambio de diseño — contadores del reporte como custom values:** un workflow que corre sobre un cliente no puede escribir en los campos del contacto del dueño. Hay que descartar `rep_*` en el contacto `dueno`. La acción **"Update custom value"** sí existe y acepta merge fields, así que los contadores viven en custom values.
- **Creados por API:**
  - Custom values: `rep_visitas_semana`, `rep_miembros_club`, `rep_miembros_semana`, `rep_resenas_semana`, `rep_resenas_total`, `rep_inconformes_semana`, `rep_reactivados_mes`, `rep_redenciones_mes`, `rep_mensajes_semana`, todos en 0.
  - Campo numérico de contacto `sis_calculo` (auxiliar).
  - Tag `club-premio-recordado`.
- **Patrón para sumar 1:**
  1. Math sobre `sis_calculo`: ×0, + `{{custom_values.rep_x}}`, +1.
  2. Update custom value `rep_x` = `{{contact.sis_calculo}}`.
- **Pendiente:** probar en la demo que la suma funcione. Si dos clientes suman al mismo tiempo, el contador puede perder una unidad; es aceptable para un reporte.
- Los campos de contacto `rep_*` que ya existían quedan sin uso. Ojo: el selector de custom values muestra los dos con el mismo nombre; hay que elegir siempre el de "Custom Values".

- ✅ **REA-01 Reactivación** (sin disparador; lo llama VIS-01):
  - Espera **dinámica** de `{{custom_values.rea_dias_inactividad}}` días.
  - Luego un If/Else:
    - **"Miembro del club"** (activo + `club-miembro` + `sis_modulo_sellos`=si): mensaje con los sellos guardados (`c360_reactivacion_club`).
    - **"Cliente"** (activo): mensaje genérico (`c360_reactivacion`).
    - **None:** no hace nada.
  - En ambas ramas: tag `rea-enviada` → espera de 30 días ("ventana de regreso") → quita `rea-enviada`.
  - La oferta de regreso va en `{{custom_values.rea_oferta_regreso}}` al final del texto: si está vacía no se ve. Para la plantilla de Meta habrá que tener dos versiones, con y sin oferta, porque Meta no acepta variables vacías.
- ✅ **VIS-01 ampliado** (después de llamar a RES-01):
  - Saca al contacto de REA-01 y lo vuelve a meter, así el reloj de inactividad arranca de nuevo en cada visita.
  - `rep_visitas_semana` +1.
  - If/Else "¿Volvió tras reactivación?": si tiene `rea-enviada`, la quita, pone `rea-volvio` y suma `rep_reactivados_mes` +1 (dinero medido).
- Ya no hace falta calcular `fecha_reactivacion`: lo reemplaza la espera dentro de REA-01.
- ✅ **REP-01 Reporte del lunes:**
  - Disparador "Scheduler": semanal, lunes 08:00. Corre sin contacto.
  - Envía un aviso interno por WhatsApp con los contadores (paso de INSTALACIÓN: elegir usuario dueño).
  - Luego reinicia a 0 los contadores semanales: visitas, miembros, reseñas, inconformes y mensajes.
  - **Falta:**
    - un reinicio mensual de `rep_reactivados_mes` y `rep_redenciones_mes` (otro Scheduler, el día 1);
    - el valor en pesos: GHL no puede multiplicar sin contacto, así que hoy el reporte muestra conteo + ticket promedio.
- ✅ **CTRL-01 Palabras del dueño:**
  - Disparador: mensaje exacto REPORTE/PAUSA/ACTIVAR/AYUDA, en mayúsculas, con inicial mayúscula o en minúsculas.
  - Guarda el mensaje en el campo nuevo `sis_ultimo_mensaje` (texto, creado por API). "Replied message" del If/Else solo funciona después de una espera de respuesta.
  - If/Else "¿Es el dueño?" (tag `dueno`) → If/Else "¿Qué pidió?":
    - **Pausa:** `sis_estado`=pausa + confirmación.
    - **Activar:** `sis_estado`=activo + confirmación.
    - **Reporte:** números al momento.
    - **Ayuda:** lista de palabras + número de soporte.
  - Si escribe un cliente que no es el dueño, no pasa nada.
  - **Ojo:** el dueño escribe a la línea del club, así que su contacto ahí debe tener el tag `dueno` (paso de instalación).
- ✅ **REP-02 Cierre de mes:**
  - Scheduler mensual, día 1 a las 07:00.
  - Envía al dueño un resumen del mes por WhatsApp interno (INSTALACIÓN: elegir usuario).
  - Reinicia `rep_reactivados_mes` y `rep_redenciones_mes`.
- ✅ **Contadores conectados** (math + update custom value):
  - VIS-01: visitas_semana y reactivados_mes.
  - CLUB-01: miembros_club y miembros_semana.
  - CLUB-03: redenciones_mes.
  - RES-02: inconformes_semana.
  - **Falta:** `rep_mensajes_semana`, para GEN-02.
- ✅ **RES-03 Reseña recibida:**
  - Disparador "New review received" con Review Source = Google. No usa contacto.
  - Aviso al dueño por WhatsApp interno: nombre del autor, estrellas, comentario y una invitación a responder (INSTALACIÓN: elegir usuario).
  - Luego "Find contact" por teléfono = `{{custom_values.negocio_whatsapp_dueno}}`. En la rama "Contact found" suma `rep_resenas_total` y `rep_resenas_semana`. La math necesita un contacto en contexto; por eso se usa el del dueño.
  - **Requisito de instalación:**
    - conectar el Perfil de Empresa de Google en Reputation;
    - el contacto del dueño debe existir con ese número exacto.
  - **Por verificar:** si "New review received" también se dispara con reseñas que se importan al conectar el perfil. Si es así, el primer día contaría reseñas viejas. En ese caso hay que dejar `rep_resenas_total` en el número real después de conectar.
  - El valor en pesos de la reputación (dinero estimado) queda para la versión con reporte por correo/página.
- ✅ **GEN-02 Monitor semanal:**
  - Scheduler: lunes 07:30, antes de que REP-01 reinicie los contadores a las 08:00.
  - Si `rep_visitas_semana` = 0, manda un correo a `{{custom_values.sis_soporte_email}}` (custom value nuevo, info@malldigital360.com) para que MD360 revise con el dueño.
  - **Cambio frente a la spec:** se mide "semana sin visitas" en vez de "3 días sin mensajes salientes". Es la señal que de verdad avisa que el negocio dejó de usar el sistema; contar todos los envíos obligaría a meter un contador en cada mensaje.
  - `rep_mensajes_semana` queda sin uso: REP-01 lo pone en cero, pero nada lo suma.
- ✅ **RR-01 Reputación Rescatada** (clon de RES-01, 0 errores):
  - **Disparador:** tag `rr-enviar` (creado). MD360 lo aplica por lotes con la acción masiva y Drip Mode (por ejemplo 50 cada 2 horas). Así se respeta el envío escalonado.
  - **Condición:** activo + no tiene `resena-solicitada` + no tiene `rr-encuesta-enviada` + `sis_modulo_rescatada` = si. Son condiciones separadas, porque un "Does not include" con varios tags se cumple si falta *cualquiera* de ellos.
  - Pone `rr-encuesta-enviada` y `resena-solicitada`.
  - Sin espera inicial. Encuesta de primer contacto de bajo riesgo con salida BAJA (`c360_rr_encuesta`, cumple habeas data).
  - El resto lo hereda de RES-01: 4–5 → gracias + enlace; 1–3 → RES-02 + disculpa + enlace; sin respuesta → recordatorio. Nunca se niega el enlace.
  - **Pendiente:** la variante por correo para los contactos con `sin-whatsapp`.
- ✅ **CA-03 Cumpleaños:**
  - Disparador nativo "Birthday reminder" con filtro "Before no. of days" (unos días antes del cumpleaños).
  - Condición: activo + `club-miembro` + `sis_modulo_celebraccion` = si.
  - Regalo (SMS provisional → plantilla `c360_cumpleanos`) con `{{custom_values.club_regalo_cumpleanos}}` y salida BAJA. El regalo es por ser del club, nunca por reseña.
  - **Por verificar en la demo:** cómo interpreta GHL "Before no. of days is at most 7 days": si dispara una sola vez o cada día de esa ventana.
- ✅ **CA-01 Consulta al dueño:**
  - Disparador: tag `ca-consultar` (creado). MD360 se lo pone al contacto del dueño unos 10 días antes de cada fecha, después de cargar `ca_fecha_nombre` y `ca_opcion_1..3`.
  - Quita `ca-consultar`, pone `ca-esperando` y le pregunta al dueño: "Responda solo el número: 1) opción 1, 2) opción 2, 3) opción 3, 4) Esta vez no".
- ✅ **CA-02 Elección del dueño** (clon de CTRL-01):
  - Disparador: respuesta exacta 1, 2, 3 o 4.
  - Guarda el mensaje en `sis_ultimo_mensaje`. Sigue solo si el contacto tiene **`dueno` y `ca-esperando`**, así un cliente que responda "1" a otra cosa no activa nada.
  - Quita `ca-esperando` y manda un correo a `{{custom_values.sis_soporte_email}}` con la opción elegida y las instrucciones de lanzamiento.
  - Opciones 1–3: `ca_oferta_titulo` = `{{custom_values.ca_opcion_N}}` + confirmación al dueño. Opción 4: confirmación de que esta vez no se envía.
- ✅ **CA-02b Envío de fecha:**
  - Disparador: tag `ca-enviar` (creado). MD360 lo aplica por lotes con Drip Mode a `club-miembro`, después de revisar `ca_oferta_detalle`, `ca_oferta_codigo` y `ca_oferta_vigencia`.
  - Quita `ca-enviar`. Condición: `sis_modulo_celebraccion` = si + `sis_estado` = activo + `club-miembro` + sin `baja`.
  - Oferta (SMS provisional → plantilla `c360_ca_oferta`) con fecha, título, detalle, código y vigencia, y salida BAJA. Va en un mensaje aparte: nunca se mezcla con la solicitud de reseña.
  - **Por qué hay un paso humano:** la elección del dueño no lanza el envío sola. El detalle, el código y la vigencia los revisa MD360, y el tamaño del lote se ajusta a la calidad del número. Así se evita un envío masivo con datos vacíos.
- ✅ **CA-04 Redención de oferta** (diseño aprobado por Sergio el 4 oct):
  - Campo de contacto nuevo `codigo_oferta` (texto, creado por API) agregado al formulario ✅ Atendido como "Código de oferta (solo si el cliente trae uno)". Es opcional.
  - Disparador: formulario Atendido enviado. Espera 2 min para no pisar `sis_calculo` mientras VIS-01 suma la visita.
  - If/Else "¿Trajo el código vigente?": `codigo_oferta` es `{{custom_values.ca_oferta_codigo}}` + no está vacío + no tiene `ca-redimio` → pone `ca-redimio` y suma `rep_redenciones_mes` +1 (dinero medido).
  - CA-02b ahora quita `ca-redimio` al enviar una oferta nueva, así cada oferta se cuenta una vez por cliente.
  - GHL no tiene acción para vaciar un campo del contacto, así que el código viejo se queda guardado. No afecta: el tag evita contarlo dos veces y no coincide con el código de una oferta nueva. Por eso **no conviene repetir un código entre fechas**.
  - **Por verificar en la demo:**
    - que el If/Else resuelva el merge field del custom value en la comparación;
    - si distingue mayúsculas: si las distingue, usar códigos en mayúsculas y pedirle al empleado que los escriba igual.
  - El paso humano de CelebrAcción (MD360 revisa antes de aplicar `ca-enviar`) queda así para la v1 (Sergio, 4 oct).

## Demo en Mall Digital 360 (4 oct 2026, noche, con OK de Sergio)
- **Snapshot** "Cliente 360 v0.1 (demo)" (nivel agencia), creado desde la maestra con todos sus activos.
- **Cargado a MD360 solo con:**
  - todos los custom fields y custom values de la maestra;
  - el formulario Atendido y la encuesta Satisfacción;
  - los 20 tags y el trigger link;
  - 6 workflows: CLUB-01, CLUB-02, CLUB-04, VIS-01, RES-01, RES-02.
  - El chequeo de conflictos no encontró ninguno: no se sobrescribió nada de MD360.
- **Ajustes en MD360** (todo sigue en borrador):
  - Los 6 workflows se renombraron con el prefijo **"DEMO —"**.
  - **DEMO — CLUB-01:**
    - se dispara con `DEMO` / `Demo` / `demo`;
    - pone el tag **`demo-c360`** (creado por API);
    - se quitó el disparador por formulario, porque el formulario de ingreso no se importó.
  - **DEMO — VIS-01:**
    - se quitaron el disparador por etapa de pipeline, que no existe en MD360;
    - se quitó el de citas con "asistió", que se habría disparado con citas reales de MD360;
    - se quitaron los dos pasos de REA-01, que no se importó.
    - Queda solo el formulario Atendido.
  - **DEMO — CLUB-04:** solo responde si el contacto tiene `club-miembro` **y** `demo-c360`.
  - **DEMO — RES-02:** la alerta interna por WhatsApp va al usuario Sergio J Rey Gutierrez.
  - **DEMO — Baja** (workflow nuevo, en vez de GEN-01): con BAJA, y solo si el contacto tiene `demo-c360`, envía la confirmación y activa el DND en todos los canales.
  - Los 7 workflows quedan con **0 errores**.
- **Desactivado a pedido de Sergio:** "05.02.01 Customer reply to Chat Widget / Send to Google" (pasó a borrador).
- **Pendiente:**
  - plantillas de Meta y cambiar los "SMS provisional" por WhatsApp;
  - QR con el texto `DEMO`;
  - publicar los 7 workflows cuando Sergio dé la señal para la prueba con su celular.

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
- [x] P1 (`/club`) pegado y guardado sin publicar (funnel iR1fdVLztLrKl5QMBw7t)
- [ ] P2 (parche) en la sub-cuenta Mall Digital 360

## P2 — Parche del sitio (4 oct 2026, noche) — a medias, bloqueado
- **Sergio autorizó despublicar sin mostrarle la lista.** GHL no permite despublicar una página suelta de un website: solo deja borrarla.
- **Respaldo:** se creó el website **"ARCHIVO — Páginas retiradas (oct 2026)"** (sin dominio, no es público) con copias de "Precios", "OUT OF SERVICE Video", "OUT OF SERVICE Prospecting Tool Marketing Audit Widget", "Checkout – Plan Starter" y "Checkout – Plan Pro".
- **Bloqueado por el filtro de seguridad de Claude Code (modo auto)**, sin que Claude insistiera por otra vía:
  - borrar las 5 páginas originales del website "Cliente360™ | Sistema de Crecimiento Local Automatizado";
  - quitar el dominio del funnel "Cliente360™ | MedSpa USA" (quedó **intacto**, con malldigital360.com y la ruta /cliente360--medspa-usa).
- **Blog:** se envió el cambio de título a "Blog de Mall Digital 360: sistemas y automatización para negocios locales" y la descripción "Ideas prácticas para que su negocio local consiga reseñas, clientes que vuelven y más ventas." **No se pudo verificar** si guardó, porque la verificación también quedó bloqueada.
- **Pendiente para Sergio (5 min a mano):**
  1. Borrar las 5 páginas del website principal (las copias ya están en ARCHIVO).
  2. Funnel MedSpa USA → Settings → Domain → Remove → Save.
  3. Revisar el nombre del blog.
  4. Decidir el footer (dirección de EE. UU. o Villavicencio).
  5. Cambiar la frase de inicio y el botón a /club, después de publicar /club (antes de eso el enlace quedaría roto).

## Noche del 4 al 5 oct — punto 1: prospectos de la demo
- **Pipeline "Prospectos Cliente 360"** creado en Mall Digital 360 con las etapas Contacto → Diagnóstico agendado → Diagnóstico hecho → Propuesta → Cliente / No por ahora. Afiliado360 no se tocó.
- **Tag `lead-charla`** creado por API.
- **DEMO — CLUB-01:**
  - El paso inicial ahora pone `demo-c360` + `lead-charla`.
  - Justo después crea o actualiza la oportunidad "{nombre} — demo club" en Prospectos → Contacto, con estado open y fuente "Demo Cliente 360 (charla / QR)".
  - No duplica oportunidades ni las devuelve de etapa.
  - 0 errores, sigue en borrador.
  - Se puso al inicio (no al final del flujo) para que todo el que escriba DEMO quede como prospecto, aunque una rama corte antes.

## Noche — punto 2: términos del club
- `web/club-terminos.html`:
  - términos del club + autorización de datos (Ley 1581 de 2012, Ley 1480 de 2011);
  - genérico: el negocio es el Responsable y MD360 (Rey Enterprises USA LLC) el Encargado;
  - reglas del club; los premios nunca dependen de la reseña.
- Pegado en el funnel "Club de Clientes — Cliente 360", paso **"Términos del club"** (`malldigital360.com/club-terminos`), con título SEO. **Guardado, no publicado.**
- `club_link_terminos` = `https://malldigital360.com/club-terminos` en la maestra y en Mall Digital 360.
- **Hallazgo — la carga del snapshot no trae los valores:** los 58 custom values de Cliente 360 llegaron a Mall Digital 360 **vacíos**. Se llenaron por API con los datos de la demo:
  - "Barbería El Llano", "Club Barbería El Llano", dueño Sergio, WhatsApp +573204055485;
  - palabra `DEMO`, `resena_espera_minutos` = 2 (para que la demo en vivo vaya rápido);
  - contadores en 0;
  - `resena_link_google` = `malldigital360.com/club`, para no pedir reseñas a no clientes (ver `decisiones-pendientes.md`).
  - **Consecuencia para las instalaciones:** después de cargar el snapshot siempre hay que llenar los custom values (lo hace el script del punto 5).

## Noche — punto 3: QR, letrero y guion
- **QR** `web/qr-demo.png` (1200 px) y `web/qr-demo.svg`, en azul marino de la marca, que abren `wa.me/573204055485?text=DEMO`. Se revisó la imagen.
- **Letrero de mesa** `web/letrero-demo.html` (A5 vertical, para imprimir) con una vista previa en `web/letrero-demo-vista.png`. El logo es una aproximación en SVG (dos cúpulas + tres rombos); si hay archivo oficial, se reemplaza.
- **Guion** `docs/guion-demo.md`: 2 minutos, el prospecto vive el club como cliente y después ve lo que le llega al dueño, más preguntas frecuentes.

## Noche — punto 4a: cumpleaños en el ingreso al club
- Custom value nuevo **`club_link_registro`** en la maestra = enlace del formulario "Ingreso al club" (`.../widget/form/27nv6RRwCed6LN25PvV9`). **En cada instalación hay que cambiarlo**, porque el ID del formulario cambia en cada sub-cuenta.
- **CLUB-01b Pedir cumpleaños** (borrador, 0 errores):
  - Disparador: se agrega el tag `club-miembro` (lo pone CLUB-01).
  - Espera 3 min, para que llegue después de la bienvenida y el sello.
  - If/Else "¿Falta el cumpleaños?": activo + fecha de nacimiento vacía + sin `baja`.
  - Mensaje (SMS provisional → plantilla `c360_pedir_cumple`) con `club_regalo_cumpleanos` y el enlace al formulario, más BAJA.
  - Si la persona ya entró por el formulario con su fecha, no se le escribe.
  - Si llena el formulario después, CLUB-01 la reconoce como "ya miembro": no hay doble registro y queda guardada la fecha de nacimiento que usa CA-03.
- Se armó como workflow aparte y no dentro de CLUB-01, para no mover las ramas ya probadas. Funcionalmente es el paso de CLUB-01.

## Noche — punto 4b: textos en inglés → español y horario (maestra)
- **Encuestas** (Styles → Footer):
  - botones "Go Back / Next / Submit" → **Atrás / Siguiente / Enviar** en *Satisfacción* e *Instalación Cliente 360*;
  - mensajes de cierre ya estaban en español.
- **Enlaces "Privacy Policy | Terms of Service"** (apuntaban a example.com):
  - en *Satisfacción*, *Atendido*, *Canjear* e *Ingreso al club* → **"Términos y tratamiento de datos"** con enlace a `{{custom_values.club_link_terminos}}` (en los formularios se abre en ventana nueva);
  - en *Instalación Cliente 360*, que llena el dueño, se reemplazó por: "Estos datos solo se usan para configurar el sistema de su negocio. Dudas: info@malldigital360.com".
- **Calendario "Cita — Demo"** (por API):
  - mensaje de confirmación y texto de consentimiento en español, con BAJA;
  - horario base lunes a sábado de 8:00 a 19:00; duración 45 min, intervalo 30.
  - **Ojo:** el `PUT /calendars/{id}` de GHL vuelve a sus valores por defecto los campos que no se envían (borró el horario y puso 30 min). Siempre hay que enviar el objeto completo.
- **Pendiente:** la demo en Mall Digital 360 se cargó antes de este cambio, así que sus formularios todavía muestran "Privacy Policy". No afecta la prueba (el prospecto no ve formularios, solo WhatsApp), pero se corrige igual o al recargar el snapshot.

## Noche — punto 5: instalación de un cliente
- **`docs/instalacion-cliente.md`:** lista de 9 bloques con tiempos (≈ 2 h sin contar las esperas de Meta). Incluye los errores ya conocidos: custom values vacíos, `club_link_registro`, usuario del dueño en las notificaciones internas, QR con palabra exacta, reseñas viejas en RES-03.
- **`herramientas/instalar-custom-values.mjs`** (Node 18+, sin dependencias):
  - lee el token de `.env`;
  - toma `clientes/<negocio>.json` (plantilla en `herramientas/instalacion-plantilla.json`);
  - con `--dueno` lee las respuestas `inst_*` de la encuesta F5;
  - pone el enlace del formulario de la sub-cuenta, deduce valores, valida y escribe solo con `--aplicar`;
  - bloquea la maestra y MD360 salvo con `--forzar`.
  - **Probado:** sintaxis y validación sin API. **Falta probar contra GHL:** necesita el primer cliente real o una sub-cuenta de prueba con su token.
- `.gitignore` nuevo: `.env`, `clientes/`.

## Noche — plantillas aprobadas y cambio a WhatsApp en la demo
- **Meta aprobó las 10 plantillas de la demo (Active).** Las 6 pendientes salieron aprobadas, pero todas menos `c360_disculpa` quedaron como **Marketing**.
- **Cambio "SMS provisional" → WhatsApp** en los workflows DEMO de Mall Digital 360. **Siguen en borrador, nada publicado:**
  - DEMO — Baja → `c360_baja`.
  - DEMO — CLUB-01:
    - bienvenida → `c360_bienvenida_club`;
    - "ya es miembro" → `c360_mis_sellos` (`c360_ya_miembro` no existe en la demo y el texto es equivalente).
  - DEMO — CLUB-02: sello → `c360_sello`, te faltan 2 → `c360_te_faltan`, premio → `c360_premio`.
  - DEMO — CLUB-04 → `c360_mis_sellos`.
  - DEMO — RES-01:
    - encuesta → `c360_encuesta`;
    - 4–5 y "sin número" → `c360_resena`;
    - 1–3 → `c360_disculpa`;
    - sin respuesta → `c360_resena_recordatorio`.
    - Se volvió a apuntar el "Esperar respuesta" a la nueva acción de WhatsApp, porque quedaba apuntando a la acción borrada.
  - **Quedan en SMS** (sin plantilla en Meta; ver `decisiones-pendientes.md` #6):
    - el regalo de bienvenida (CLUB-01);
    - el recordatorio único de premio (CLUB-02).
- **Hallazgos del builder:**
  - **La acción WhatsApp parte el flujo en "Delivered / Undelivered"** si "Enable branches" está encendido (viene así por defecto). Los pasos que seguían quedan **solo** en "Delivered".
    - En DEMO — Baja eso dejaba el DND solo para mensajes entregados. Se copió el DND también a "Undelivered": la baja se respeta siempre.
    - En los demás workflows se apagó "Enable branches" y el flujo sigue lineal.
    - **Regla para la maestra:** apagar "Enable branches" en toda acción WhatsApp que no use botones.
  - Las variables quedan mapeadas desde la plantilla: la acción no pide nada más.
  - Existe la acción "WhatsApp: customer service window check". Sirve para responder **sin plantilla** dentro de la ventana de 24 h (MIS SELLOS, BAJA, encuesta respondida), con mensajes de servicio que no se cobran. Es una optimización de costo para v1.1.
