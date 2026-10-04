# CLAUDE.md — Cliente 360™ (vertical Sardes), Mall Digital 360

Contexto de trabajo para Claude Code. Fuente original: `docs/traspaso-cowork-2026-10-03.md` (traspaso desde Cowork, 3 oct 2026). Este archivo es la versión viva: si algo cambia, se actualiza aquí.
Estrategia de producto en discusión: `docs/estrategia-3-soluciones.md`.

## 1. Identidad — reglas que aplican a TODO lo que se genere
- **Sergio Rey**, fundador único de **Mall Digital 360** (Villavicencio, Meta, Colombia). Bilingüe español-inglés: destacarlo en textos de posicionamiento.
- Mall Digital 360 **no es una agencia de marketing**. Es una *empresa de tecnología y automatización con IA para negocios*: instala sistemas que se quedan trabajando dentro del negocio.
  - Frase de conversación: "Somos una empresa de soluciones tecnológicas."
- **Vocabulario prohibido** (copy, nombres de campos, tags, workflows, páginas, mensajes): *agencia, marketing, campaña, pauta, publicidad, community manager, contenido (como servicio)*.
  - Usar: *soluciones, sistemas, plataforma, automatización, implementación, integración, optimización, IA aplicada, secuencia, activación.*
  - Decir "instalamos un sistema que…", nunca "te hacemos una estrategia de…".
  - Ojo: Sergio mismo dice "campaña" o "drip" al conversar. En lo que se construye se traduce a **secuencia / activación / envío escalonado**.
- Español latinoamericano, directo, sin jerga. Los dueños de negocio que ven el resultado no son técnicos.

## 2. Estructura de la empresa
Cinco verticales ("coworks"): **Mecenas** (dirección), **Sardes — Cliente 360™** (este repo), **Cartago** (high-ticket DFY), **Tiro** (afiliados GHL LatAm; no tocar su funnel), **Delfos** (charlas/networking en Villavicencio; su charla "Ningún cliente sin respuesta" trae leads a Sardes con QR → formulario).
Marcas: **Mall Digital 360** (comercial, bajo la que opera Cliente 360) y **Sergio Rey** (personal).

## 3. Qué es Cliente 360™
**Frase central de venta (aprobada 4 oct 2026): "Le instalo el club de clientes de su negocio."** Toda conversación, página y material abre con el club. Reseñas, reactivación y fechas son "lo que el club hace por usted". Oferta cerrada: `docs/oferta-cliente360-v1.md`. Plan de trabajo: `docs/plan-de-lanzamiento.md`.

Sistema instalado (nunca "servicio de reseñas") para negocios locales: más reseñas en Google, más clientes que vuelven y más ventas sobre la base de datos propia del negocio — sin pauta, sin redes sociales, sin carga técnica para el dueño.

**Tres soluciones (nombres vigentes):**
1. **Reputación Rescatada** — mira al **pasado**. Toma la base existente del negocio (WhatsApp y/o correo), la limpia y le envía una secuencia escalonada: encuesta de satisfacción + solicitud de reseña. Recupera/levanta la calificación.
2. **Impulso 5 Estrellas** — mira al **presente y futuro**. Cada cliente nuevo queda registrado en el sistema (QR → WhatsApp, recepción, agenda, app del negocio…) y, cuando ya recibió el servicio/producto, el sistema le pide la reseña de forma automática.
3. **CelebrAcción** — una sola palabra (celebración + acción). Aprovecha fechas nacionales, internacionales, locales y personales (cumpleaños) para activar ventas con promociones (2x1, descuentos, lleva dos, regalo) sobre la base de datos del negocio.

4. **Club [Negocio]** (lealtad v1, **aprobado para el lanzamiento**): sellos por visita, premio, "te faltan 2", reactivación con sellos guardados, cumpleaños. Usa la misma señal de visita que Impulso. Puntos por monto, niveles y POS quedan para v2.

**Mercado objetivo:** negocios físicos locales que dependen de reputación/recompra, micro/pequeña empresa.
- **Decidido (3 oct 2026):** sitio principal malldigital360.com en **español**, abierto a Latinoamérica + hispanos en EE. UU. **Colombia (COP) es el mercado activo**; páginas por país en subcarpetas (`/colombia`, luego `/mexico`, `/ecuador` según los viajes de Sergio). Inglés: no por ahora.
- Nichos piloto: barberías/salones/spas + gimnasios; después restaurantes; después talleres.
- Precio: Arranque COP 600–900 mil (pago único); Plan Impulso COP 250–350 mil/mes; Plan 360 COP 450–600 mil/mes (USD para el resto de LatAm/EE. UU. en el doc de estrategia). Calidad sobre volumen; quien no pueda pagar va a la ruta de capacitación.
- WhatsApp: **línea del club** dedicada por negocio con coexistence (nunca el número principal para envíos salientes); número de MD360 solo para demos.
- **Tiempo de Sergio: 40 h/semana** (desde el 4 oct; antes 10). Metas: 18 clientes activos a 6 meses, 40 a 12 meses (asistente desde ~25–30 clientes). El cuello de botella son las ventas: ~4 diagnósticos por semana.
- Precio fundador: 50 % por 3 meses + Arranque a 50 % para 3 pilotos, a cambio de testimonio en video + datos antes/después. La Garantía 10 Reseñas también aplica a fundadores (confirmado 4 oct).
- **Garantía 10 Reseñas** en 30 días (o el mes siguiente no se cobra). Condiciones en el doc de estrategia, sección 15.
- Cobro: Stripe en COP automático (cuenta Rey Enterprises USA LLC) + carril manual con recordatorio. Probar Mercado Pago.
- Prospección: red propia + Delfos; Smartlead (correo en frío) y Closely (LinkedIn) para cuentas con estructura y otros países.
- Club de Lealtad v1 con sellos: **aprobado para el lanzamiento** (4 oct). Detalle en el doc de estrategia, sección 20. En Blue: org Rey Enterprises USA LLC → workspace Mall Digital 360.
- Precios publicados v1: Arranque COP 790.000 · Plan Impulso COP 290.000/mes · Plan 360 COP 490.000/mes (detalle y reglas en `docs/oferta-cliente360-v1.md`).

## 4. Reglas no negociables de plataforma (aplican a las 3 soluciones)
- **Google — sin filtrado de reseñas ("review gating")**: no se puede pedir reseña solo a quien calificó bien en la encuesta ni desviar a los inconformes para que no publiquen. La encuesta puede servir para **atender** al inconforme primero (alerta al dueño), pero el enlace de reseña no se le niega a nadie.
- **Google — sin incentivos por reseña**: ningún descuento, sorteo ni regalo a cambio de reseñar. Los incentivos se dan por *registrarse* (club, cumpleaños, lealtad), nunca por la reseña. CelebrAcción y la solicitud de reseña van siempre en mensajes separados.
- **WhatsApp (API de Meta vía GHL)**: fuera de la ventana de 24 h solo se pueden enviar **plantillas aprobadas**; cada plantilla tiene costo por mensaje según categoría (marketing / utilidad). Hay límites diarios por número que suben con buena calidad; bloqueos y reportes bajan la calidad y pueden restringir el número. Siempre ofrecer salida ("responde BAJA").
- **Habeas data (Ley 1581 de 2012)**: el negocio debe tener autorización de tratamiento de datos de sus clientes. Para bases antiguas sin autorización clara, el primer mensaje debe ser de bajo riesgo y con salida fácil. Todo registro nuevo (QR/formulario) incluye la casilla de autorización.
- **Envío escalonado**: nunca disparar toda la base de una vez (riesgo para el número de WhatsApp y picos raros de reseñas en Google). Usar Drip Mode de GHL (lotes + intervalo).

## 5. Entorno técnico de GoHighLevel
- Cuenta agencia plan 297 USD/mes, sub-cuentas ilimitadas. Modelo: **una sub-cuenta por negocio cliente**, activada desde un snapshot base.
- Sub-cuenta propia de Cliente 360: **Mall Digital 360**, Location ID `WZYaJ8M4dqpvhdM2gpip`. La sub-cuenta "Sergio Rey" (`vC1oy6Ev3Wy52vl1l91g`) es de Delfos/marca personal, no de Cliente 360.
- Pipeline a **conservar intacto**: `Afiliado360` (referidores de Cliente 360; no es el programa de afiliados de GHL, que es de Tiro).
- **API v2**: base `services.leadconnectorhq.com`, header `Version: 2021-07-28`, ~500 req/10 s. Token de Private Integration en `.env` — nunca en código ni commits.
  - Sí por API: custom fields, custom values, tags, pipelines/etapas, contactos, oportunidades, meter contactos a un workflow existente.
  - No por API: pasos internos de workflows (UI/snapshot) ni páginas de funnel (builder tradicional — preferido por Sergio sobre AI Studio).
- Datos de contacto/marca como **custom values**: WhatsApp +57 320 405 5485 (wa.me/573204055485), info@malldigital360.com, malldigital360.com/hub.
- Header y footer de páginas nuevas como secciones globales.

## 6. Marca
- Tipografía: títulos **Archivo** (800–900 / Archivo Black en Canva); texto **Source Sans 3**.
- Colores: `#14315A` azul marino (principal), `#16B364` verde (acento), `#0B1F3A`, `#1A2432`, `#4E5D70`, `#E7F7EF`, `#EEF2F7`, `#FFFFFF`.
- Logo: "M" de dos cúpulas (azul marino) sobre tres rombos (verde). **Nunca** colores tipo pin de Google Maps.

## 7. Principios de diseño de la oferta (definidos por Sergio, 3 oct 2026)
- Simple, poderosa, duplicable, eficiente. Se vende una **solución**, no "algo más de qué preocuparse".
- **El dueño no usa el computador en el día a día.** Solo en la instalación (la hace MD360) o en una reconexión. El día a día va por **WhatsApp** (reportes, alertas, aprobaciones) y por la **app LeadConnector** (chats, marcar atendido). Un negocio con empleados puede tener un administrador con PC.
- **Control sin entrenamiento:** el dueño no pone tags ni mueve etapas. Todo lo hace con botones o respuestas en WhatsApp, trigger links en correo/WhatsApp, palabras clave (`REPORTE`, `PAUSA`, `ACTIVAR`, `AYUDA`) y, para empleados, un formulario "✅ Atendido" de un campo. Cada acción dispara un workflow. Diseñar así **todo** flujo nuevo.
- Máxima automatización. **Sticky** por resultados: reactivación de clientes inactivos (WhatsApp/correo), reseñas constantes y ventas en fechas.
- **Las reseñas se reportan en valor, no como notificación:** número acumulado, calificación, posicionamiento y su equivalente en pesos. Siempre se separa **dinero medido** (reactivados, redenciones) de **dinero estimado** (reputación).
- Estructura en análisis: producto horizontal (un snapshot, 3 modos de operación: Visita / Cita / Orden) y venta vertical por nicho, uno a la vez. El tamaño define el plan.

## 8. Cómo trabajar con Sergio
- **Blue** (org Rey Enterprises USA LLC → workspace Mall Digital 360):
  - El negocio se indica con el custom field **"Name Of Business"** (para este repo, la opción **"Cliente 360"**).
  - Los tags `*OOS* …` significan **Out Of Service**: **no** se usan para identificar el negocio.
  - Tarea viva del lanzamiento: "Lanzamiento Cliente 360 v1" (lista 📋Importante).
- Proceder con criterio propio y entregar reporte al final; él pide cambios después.
- Confrontar las ideas con argumentos (él lo pide explícitamente), no solo ejecutar.

## 9. Snapshot "evergreen"
Especificación: `docs/snapshot-c360-spec.md`. Regla: **cero texto fijo**. Todo nombre, palabra ("club", "sello", "visita", "premio"), plazo, enlace y oferta vive en custom values con prefijos (`negocio_`, `club_`, `resena_`, `rea_`, `ca_`, `rep_`, `sis_`). Los módulos se apagan con interruptores (`sis_modulo_*`), así el mismo snapshot sirve para los dos planes. Página del club: `docs/pagina-club.md`.

**Cómo se construye:** `docs/orquesta-ask-ai.md`. Claude crea por API los custom values, campos, tags, pipelines, calendarios y contactos. Ask AI (dentro de GHL, con prompts que redacta Claude y Sergio pega) crea workflows, formularios y páginas. Sergio solo hace lo que pide login o identidad: crear sub-cuenta y snapshot, conectar Meta/Google/Stripe/dominio, probar con el celular. Esta sesión de Claude no tiene acceso de red a app.gohighlevel.com ni a malldigital360.com.

## 10. Próximos pasos (orden vigente)
- **Oferta v1 cerrada** (`docs/oferta-cliente360-v1.md`). Ahora se ejecuta `docs/plan-de-lanzamiento.md`:
  - Fase 0: pendientes.
  - Fase 1: snapshot en la sub-cuenta "Cliente 360 — Snapshot Maestro".
  - Fase 2: demo + kit de venta.
  - Fase 3: pilotos fundadores.
  - Fase 4: ajuste y prueba social.
- **Web:** ahora solo la página mínima del club (`/club`) y un parche al sitio actual (quitar precios USD y textos de agencia). El revamp completo de malldigital360.com arranca en la Fase 4, con los casos reales de los pilotos.
