# Orquesta de construcción — Claude + Ask AI + API de GHL

*4 oct 2026. Cómo se construye Cliente 360 con el mínimo de intervención de Sergio. Claude dirige. Ask AI construye dentro de GHL lo que la API no permite. Sergio solo entra donde hace falta su cuenta, su identidad o su celular.*

---

## 1. Quién puede hacer qué (realidad técnica, verificada hoy)

| Tarea | API de GHL (Claude) | Ask AI (dentro de GHL) | Sergio |
|---|---|---|---|
| Crear la sub-cuenta | ❌ El conector no tiene esa operación | ⚠️ No confirmado (Ask AI trabaja dentro de una sub-cuenta) | ✅ 2 min: *Agency → Sub-Accounts → Add* |
| Custom values, campos, tags | ✅ | ✅ | — |
| Pipelines y etapas | ✅ | ✅ | — |
| Calendario de ejemplo | ✅ | ✅ | — |
| Contactos de prueba | ✅ | ✅ | — |
| Workflows (pasos internos) | ❌ | ✅ Los genera y edita con lenguaje natural | Revisa y publica |
| Formularios y encuestas | ❌ | ⚠️ Probable (Funnel & Website AI) | Plan B: 10 min a mano |
| Páginas (`/club`) | ❌ | ✅ Funnel & Website AI, en el builder estándar | Conecta dominio y ruta si Ask AI no puede |
| Despublicar páginas viejas | ❌ | ⚠️ Por probar | Plan B: 10 min a mano |
| Crear el snapshot desde la sub-cuenta | ❌ | ❌ | ✅ 1 min (nivel agencia) |
| Conectar WhatsApp (Meta), Google Business, Stripe, dominio | ❌ | ❌ | ✅ Requiere su login y verificación |
| Probar desde un celular real | ❌ | ❌ | ✅ Escanear QR, responder mensajes |

**Limitaciones de esta sesión de Claude:**
- **Sin navegador hacia GHL:** la red de esta sesión bloquea app.gohighlevel.com y malldigital360.com, así que Claude no puede manejar la pantalla de GHL ni hablar directamente con Ask AI.
- **Mensajero:** Sergio pega cada prompt en Ask AI y responde "listo" (o pega lo que Ask AI contestó). Claude verifica por API lo que se pueda (que exista el workflow, que los campos estén bien, que los tags se apliquen en las pruebas).
- **Para cortar ese ida y vuelta:** Claude Code en el computador de Sergio con la integración de Chrome, con GHL abierto y su sesión iniciada. Así Claude puede escribirle a Ask AI y revisar la pantalla él mismo. *(Requiere instalar Claude Code en el equipo de Sergio. Vale la pena si la construcción se alarga.)*

## 2. Secuencia

| # | Quién | Qué | Tiempo de Sergio |
|---|---|---|---|
| 1 | Sergio | Crear la sub-cuenta **"Cliente 360 — Snapshot Maestro"** (zona horaria Bogotá, idioma español) | 2 min |
| 2 | Claude (API) | Custom values, campos, tags, pipeline "Órdenes", calendario de ejemplo, contactos de prueba (dueño, empleado, cliente) | 0 |
| 3 | Sergio → Ask AI | Prompts **F1–F5** (formularios y encuestas) | 5 min pegando |
| 4 | Sergio → Ask AI | Prompts **W1–W8** (workflows del recorrido de la demo), uno por uno | 15 min pegando |
| 5 | Claude (API) | Verificar workflows y campos; ajustar; enviar prompts de corrección | 0 |
| 6 | Sergio | Prueba con su celular: escanear QR, responder la encuesta | 10 min |
| 7 | Sergio → Ask AI (sub-cuenta Mall Digital 360) | Prompt **P1**: página `/club` | 2 min + conectar ruta |
| 8 | Sergio → Ask AI o a mano | Prompt **P2**: parche al sitio actual | 10 min |
| 9 | Sergio | Crear el snapshot "Cliente 360 v1" | 1 min |

---

## 3. Prompts para Ask AI

**Cómo usarlos:**
- Pegar **un prompt a la vez** en Ask AI, dentro de la sub-cuenta "Cliente 360 — Snapshot Maestro" (salvo P1 y P2, que van en la sub-cuenta Mall Digital 360).
- **No publicar** nada que Ask AI deje en borrador hasta que Claude lo verifique.
- Los custom values y campos ya los habrá creado Claude por API. Los prompts los nombran exactamente.

### Instrucción general (pegar primero, una sola vez por conversación)
> Vas a construir el sistema "Cliente 360" en esta sub-cuenta. Reglas para todo lo que hagas:
> 1. Nunca escribas texto fijo de un negocio: usa siempre los custom values existentes con el formato `{{custom_values.nombre}}` y los campos del contacto con `{{contact.campo}}`.
> 2. No uses estas palabras en ningún nombre ni mensaje: agencia, marketing, campaña, pauta, publicidad.
> 3. Todo workflow que envíe mensajes debe empezar con una condición: si el custom value `sis_estado` no es "activo", terminar.
> 4. Ningún mensaje se envía a contactos con el tag `baja`.
> 5. Deja los workflows en borrador; no los publiques.
>
> Confirma que entendiste y lista los custom values que ves en la sub-cuenta.

### F1 — Formulario "✅ Atendido"
> Crea un formulario llamado "Atendido" con estos campos: Celular (teléfono, obligatorio), Nombre (opcional) y PIN (texto, obligatorio, 4 dígitos). Título visible: "✅ Atendido — {{custom_values.negocio_nombre}}". Botón: "Registrar visita". Mensaje al enviar: "Listo ✅". Diseño simple, apto para celular, sin imágenes.

### F2 — Formulario "🎁 Canjear"
> Crea un formulario llamado "Canjear" con: Celular (obligatorio) y PIN (obligatorio). Título: "🎁 Canjear premio — {{custom_values.club_nombre_completo}}". Botón: "Canjear". Mensaje al enviar: "Premio registrado 🎁".

### F3 — Formulario "Ingreso al club"
> Crea un formulario llamado "Ingreso al club" con: Nombre (obligatorio), Celular (obligatorio), Fecha de cumpleaños (campo estándar fecha de nacimiento, opcional) y una casilla obligatoria de autorización con el texto: "Autorizo a {{custom_values.negocio_nombre}} a tratar mis datos para enviarme beneficios del {{custom_values.club_nombre}}, según los términos: {{custom_values.club_link_terminos}}". Esa casilla debe guardar "si" en el campo de contacto `autorizacion_datos`. Título: "Únete al {{custom_values.club_nombre_completo}} {{custom_values.negocio_emoji}}".

### F4 — Encuesta "Satisfacción"
> Crea una encuesta llamada "Satisfacción" de una pregunta por pantalla:
> 1) "¿Cómo te fue hoy en {{custom_values.negocio_nombre}}?" con opciones 1 a 5 estrellas, guardada en el campo `calificacion_encuesta`.
> 2) "¿Algo que podamos mejorar?" (texto opcional).
>
> Mensaje final: "Gracias por contarnos 🙏".

### F5 — Encuesta "Instalación" (la llena el dueño una vez)
> Crea una encuesta llamada "Instalación Cliente 360" con estas preguntas:
> 1. ¿Cuánto gasta en promedio un cliente por visita? (número)
> 2. ¿Cuántas veces al año viene un cliente típico? (número)
> 3. ¿Cuántos clientes nuevos recibe al mes? (número)
> 4. ¿Cuántas visitas para el premio del club? (opciones 6, 8, 10, 12)
> 5. ¿Cuál es el premio? (texto)
>
> Guarda las respuestas en campos del contacto con los nombres `inst_ticket`, `inst_visitas_anio`, `inst_nuevos_mes`, `inst_meta`, `inst_premio`.

### W1 — CLUB-01 Ingreso al club
> Crea el workflow "CLUB-01 Ingreso al club".
> - **Disparadores:**
>   - mensaje entrante de WhatsApp o SMS que contenga el texto de `{{custom_values.club_palabra_ingreso}}` (si no puedes usar el custom value en el filtro, usa la palabra "CLUB");
>   - envío del formulario "Ingreso al club".
> - **Pasos:**
>   1. Si el contacto ya tiene el tag `club-miembro`, enviar "{{contact.first_name}}, ya eres parte del {{custom_values.club_nombre_completo}} 🙌. Llevas {{contact.club_sellos}} {{custom_values.club_sello_plural}}." y terminar.
>   2. Agregar el tag `club-miembro`.
>   3. Actualizar campos:
>      - `fuente_registro` = "qr"
>      - `club_fecha_ingreso` = fecha de hoy
>      - `club_sellos` = 0
>      - `club_sellos_faltan` = `{{custom_values.club_meta_visitas}}`
>      - `autorizacion_datos` = "si"
>   4. Enviar por WhatsApp: "{{custom_values.negocio_saludo}} {{contact.first_name}} {{custom_values.negocio_emoji}}, bienvenido al {{custom_values.club_nombre_completo}}. Cada {{custom_values.negocio_unidad_visita}} suma un {{custom_values.club_sello_nombre}}; al completar {{custom_values.club_meta_visitas}} te espera {{custom_values.club_premio}}. Guarda este número: aquí te llegan tus beneficios. Si no quieres recibir mensajes, responde BAJA."
>   5. Si `{{custom_values.club_regalo_bienvenida}}` no está vacío, enviar: "Y de regalo por unirte: {{custom_values.club_regalo_bienvenida}} 🎁".
>   6. Enviar: "¿Cuándo es tu cumpleaños? Escríbelo así: DD/MM 🎂". Esperar respuesta hasta 1 día y guardarla en la fecha de nacimiento.
>   7. Ejecutar el workflow "VIS-01 Visita".
>
> Déjalo en borrador.

### W2 — VIS-01 Visita
> Crea el workflow "VIS-01 Visita".
> - **Disparadores:**
>   - envío del formulario "Atendido";
>   - cita con estado "showed";
>   - oportunidad del pipeline "Órdenes" movida a la etapa "Entregado";
>   - llamado desde otro workflow.
> - **Pasos:**
>   1. Si viene del formulario "Atendido" y el PIN no es igual a `{{custom_values.sis_pin_equipo}}`, terminar.
>   2. Si `fecha_ultima_visita` es hoy, terminar (máximo una visita por día).
>   3. Actualizar campos:
>      - `fecha_ultima_visita` = hoy
>      - `visitas_total` +1 (operación matemática)
>      - `fecha_reactivacion` = hoy + `{{custom_values.rea_dias_inactividad}}` días
>   4. Si el custom value `sis_modulo_sellos` = "si", ejecutar "CLUB-02 Sello".
>   5. Si el contacto no tiene el tag `resena-solicitada`, ejecutar "RES-01 Solicitud de reseña".
>
> Déjalo en borrador.

### W3 — CLUB-02 Sello
> Crea el workflow "CLUB-02 Sello" (se dispara solo desde otro workflow).
> - **Pasos:**
>   1. `club_sellos` +1 y `club_sellos_faltan` −1 (operaciones matemáticas).
>   2. Condición sobre `club_sellos_faltan`:
>      - **si es 0:** agregar el tag `club-premio-pendiente` y enviar "🎉 ¡{{contact.first_name}}, completaste tu tarjeta del {{custom_values.club_nombre_completo}}! Ganaste {{custom_values.club_premio}}. Muestra este mensaje en tu próxima visita.";
>      - **si es 2:** enviar "¡Ya casi, {{contact.first_name}}! Te faltan 2 {{custom_values.club_sello_plural}} para {{custom_values.club_premio_corto}} {{custom_values.negocio_emoji}}";
>      - **en cualquier otro caso:** enviar "{{custom_values.club_sello_nombre}} {{contact.club_sellos}} de {{custom_values.club_meta_visitas}} ✅. ¡Gracias por venir!".
>
> Déjalo en borrador.

### W4 — CLUB-03 Canje
> Crea el workflow "CLUB-03 Canje".
> - **Disparador:** envío del formulario "Canjear".
> - **Pasos:**
>   1. Si el PIN no es `{{custom_values.sis_pin_equipo}}`, terminar.
>   2. Si el contacto no tiene el tag `club-premio-pendiente`, enviar al número del dueño (`{{custom_values.negocio_whatsapp_dueno}}`) un aviso interno: "Intento de canje sin premio pendiente: {{contact.phone}}", y terminar.
>   3. Quitar `club-premio-pendiente` y agregar `club-premio-canjeado`.
>   4. `club_premios_canjeados` +1. `club_sellos` = 0. `club_sellos_faltan` = `{{custom_values.club_meta_visitas}}`.
>   5. Enviar al cliente: "Premio canjeado 🎁. Tu tarjeta nueva del {{custom_values.club_nombre_completo}} ya empezó. ¡Gracias por ser parte!".
>
> Déjalo en borrador.

### W5 — CLUB-04 Mis sellos
> Crea el workflow "CLUB-04 Mis sellos".
> - **Disparador:** mensaje entrante que contenga "MIS SELLOS" o "MIS PUNTOS" (sin importar mayúsculas).
> - **Paso:** responder "{{contact.first_name}}, llevas {{contact.club_sellos}} {{custom_values.club_sello_plural}}. Te faltan {{contact.club_sellos_faltan}} para {{custom_values.club_premio_corto}} {{custom_values.negocio_emoji}}".
>
> Déjalo en borrador.

### W6 — RES-01 Solicitud de reseña (sin filtrado de reseñas)
> Crea el workflow "RES-01 Solicitud de reseña" (se dispara desde otro workflow).
> - **Pasos:**
>   1. Agregar el tag `resena-solicitada` y poner `fecha_solicitud_resena` = hoy.
>   2. Esperar `{{custom_values.resena_espera_minutos}}` minutos (si no se puede usar el custom value, 90 minutos).
>   3. Enviar: "{{contact.first_name}}, ¿cómo te fue hoy en {{custom_values.negocio_nombre}}? Responde con un número del 1 al 5 ⭐".
>   4. Esperar respuesta hasta 2 días. Guardar el número en `calificacion_encuesta`.
>   5. Según la respuesta:
>      - **4 o 5:** "¡Qué bueno! 🙌 ¿Nos ayudas contándolo en Google? Toma 30 segundos: {{custom_values.resena_link_google}}".
>      - **1, 2 o 3:** agregar el tag `resena-inconforme`, ejecutar "RES-02 Alerta de inconforme" y enviar: "Gracias por decírnoslo, {{contact.first_name}}. {{custom_values.negocio_dueno_nombre}} te va a contactar para arreglarlo. Si igual quieres dejar tu opinión en Google, este es el enlace: {{custom_values.resena_link_google}}". (Importante: el enlace se envía a todos, sin importar la calificación.)
>      - **Sin respuesta en 2 días:** un solo recordatorio con el enlace de reseña y fin.
>
> No ofrezcas ningún premio ni descuento por la reseña. Déjalo en borrador.

### W7 — RES-02 Alerta de inconforme
> Crea el workflow "RES-02 Alerta de inconforme" (se dispara desde otro workflow).
> - **Paso 1:** enviar al número `{{custom_values.negocio_whatsapp_dueno}}`: "⚠️ Cliente inconforme: {{contact.name}} ({{contact.phone}}) calificó {{contact.calificacion_encuesta}}/5. Escríbele o llámalo hoy. Cuando lo atiendas toca aquí: [trigger link 'Inconforme atendido']".
> - **Paso 2:** crear una tarea para el usuario de la sub-cuenta: "Llamar a {{contact.name}}".
> - **Workflow aparte:** cuando se haga clic en el trigger link "Inconforme atendido", el contacto recibe el tag `resena-inconforme-atendido`.
>
> Déjalo en borrador.

### W8 — GEN-01 Baja
> Crea el workflow "GEN-01 Baja".
> - **Disparador:** mensaje entrante que sea exactamente "BAJA", "NO" o "STOP" (sin importar mayúsculas).
> - **Pasos:**
>   1. Agregar el tag `baja` y activar No Molestar (DND) en todos los canales.
>   2. Responder: "Listo, no te enviaremos más mensajes. Si cambias de opinión, escribe CLUB." (Este último mensaje se envía antes de activar el DND.)
>
> Déjalo en borrador.

*(Lote 2, después de probar el lote 1: REA-01 reactivación, CTRL-01 palabras del dueño, REP-01 reporte del lunes, RES-03 reseña recibida, CA-01 a CA-04, RR-01, GEN-02.)*

### P1 — Página `/club` (en la sub-cuenta **Mall Digital 360**)
> Con Funnel & Website AI, crea un funnel nuevo llamado "Club de Clientes — Cliente 360" con una sola página en la ruta `/club`, en el dominio malldigital360.com. Usa el builder estándar, no AI Studio.
>
> **Estilo:**
> - Títulos en Archivo (peso 800–900), texto en Source Sans 3.
> - Colores: azul marino #14315A (principal), verde #16B364 (botones), fondos #FFFFFF, #EEF2F7 y #E7F7EF, texto #1A2432.
> - Nada de colores tipo pin de Google Maps.
>
> **Contenido:** usa exactamente estas secciones y textos: [pegar aquí el contenido de `docs/pagina-club.md` desde "Sección 1" hasta "Sección 9"].
>
> Todos los botones van a: `https://wa.me/573204055485?text=Hola,%20quiero%20el%20diagnóstico%20gratis%20del%20club%20de%20clientes`
>
> Debe verse perfecta en celular. No uses las palabras agencia, marketing, campaña, pauta ni publicidad. Déjala sin publicar.

### P2 — Parche al sitio actual (en la sub-cuenta **Mall Digital 360**)
> En el website "Cliente360™ | Sistema de Crecimiento Local Automatizado":
> 1. Quita del menú y despublica (o elimina) las páginas "Precios", "Checkout – Plan Starter", "Checkout – Plan Pro", "OUT OF SERVICE Video" y "OUT OF SERVICE Prospecting Tool Marketing Audit Widget".
> 2. En el funnel "Cliente360™ | MedSpa USA", despublica la página.
> 3. En el blog, cambia el nombre a "Blog de Mall Digital 360: sistemas y automatización para negocios locales" y la descripción a "Ideas prácticas para que su negocio local consiga reseñas, clientes que vuelven y más ventas, de forma automática."
> 4. En la página "Inicio", cambia el título principal por "Le instalamos el club de clientes de su negocio" y haz que el botón principal lleve a /club.
>
> Antes de hacer cada cambio, dime qué vas a modificar y espera mi confirmación.

---

## 4. Después de cada prompt
Sergio responde a Claude: **"W3 listo"**, o pega la respuesta de Ask AI si hubo error. Claude:
1. Verifica por API lo verificable (workflow existe, campos y tags correctos, contactos de prueba).
2. Si algo quedó mal, entrega un **prompt de corrección** específico.
3. Al cerrar el lote, entrega el **guion de prueba con el celular** (qué escanear, qué responder y qué debe pasar).
