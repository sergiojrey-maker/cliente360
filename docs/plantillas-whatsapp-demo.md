# Plantillas de WhatsApp — demo en Mall Digital 360 (número 320 405 5485)

Se envían a aprobación de Meta desde la sub-cuenta **Mall Digital 360** (Settings → WhatsApp → Templates). Las plantillas se aprueban **por número**, así que cada cliente aprueba las suyas en su instalación, con los mismos textos.

**Reglas de Meta que siguen estos textos:**
- Ninguna plantilla empieza ni termina con una variable.
- Pocas variables por mensaje.
- Las variables llevan ejemplos realistas.
- Ningún mensaje mezcla la solicitud de reseña con una oferta o un incentivo (regla de Google).

**Idioma:** español (`es`).

**Categoría:** la propone MD360; Meta puede reclasificarla. El club y las ofertas cuentan como *marketing*. Encuesta, sellos y reseña posterior a una visita cuentan como *utilidad*.

| # | Nombre | Categoría | Workflow | Texto (variables → custom value / campo) |
|---|---|---|---|---|
| 1 | `c360_bienvenida_club` | Marketing | CLUB-01 | Hola {{1}} 👋, bienvenido al {{2}}. Cada visita suma un sello; al completar {{3}} te espera {{4}}. Guarda este número: aquí te llegan tus beneficios. Si no quieres recibir mensajes, responde BAJA.<br>1=nombre · 2=`club_nombre_completo` · 3=`club_meta_visitas` · 4=`club_premio` |
| 2 | `c360_sello` | Utilidad | CLUB-02 | ¡Gracias por venir, {{1}}! Ya llevas {{2}} de {{3}} sellos en el {{4}} ✅<br>1=nombre · 2=`club_sellos` · 3=`club_meta_visitas` · 4=`club_nombre_completo` |
| 3 | `c360_te_faltan` | Utilidad | CLUB-02 | ¡Ya casi, {{1}}! Te faltan 2 sellos para {{2}} 🎁<br>1=nombre · 2=`club_premio_corto` |
| 4 | `c360_premio` | Utilidad | CLUB-02 | 🎉 ¡{{1}}, completaste tu tarjeta del {{2}}! Ganaste {{3}}. Muestra este mensaje en tu próxima visita.<br>1=nombre · 2=`club_nombre_completo` · 3=`club_premio` |
| 5 | `c360_mis_sellos` | Utilidad | CLUB-04 | Hola {{1}}, llevas {{2}} sellos. Te faltan {{3}} para {{4}}. ¡Te esperamos!<br>1=nombre · 2=`club_sellos` · 3=`club_sellos_faltan` · 4=`club_premio_corto` |
| 6 | `c360_encuesta` | Utilidad | RES-01 | Hola {{1}}, ¿cómo te fue hoy en {{2}}? Responde con un número del 1 al 5 ⭐<br>1=nombre · 2=`negocio_nombre` |
| 7 | `c360_resena` | Utilidad | RES-01 (4–5) | ¡Qué bueno, {{1}}! 🙌 ¿Nos ayudas contándolo en Google? Toma 30 segundos: {{2}} ¡Gracias!<br>1=nombre · 2=`resena_link_google` |
| 8 | `c360_disculpa` | Utilidad | RES-01 (1–3) | Gracias por decírnoslo, {{1}}. {{2}} te va a contactar para arreglarlo. Si igual quieres dejar tu opinión en Google, este es el enlace: {{3}} Gracias por tu tiempo.<br>1=nombre · 2=`negocio_dueno_nombre` · 3=`resena_link_google` |
| 9 | `c360_resena_recordatorio` | Utilidad | RES-01 (sin respuesta) | Hola {{1}}, si tienes 30 segundos nos ayudarías mucho contando tu experiencia en {{2}} en Google: {{3}} 🙌<br>1=nombre · 2=`negocio_nombre` · 3=`resena_link_google` |
| 10 | `c360_baja` | Utilidad | DEMO — Baja / GEN-01 | Listo, ya no te enviaremos más mensajes. Si algún día quieres volver, solo escríbenos. |

## Estado en Meta (4 oct 2026, 10:15 p. m.)

Las 10 se enviaron desde MD360 → Settings → WhatsApp → Templates. Las variables quedaron mapeadas a los campos y custom values de la tabla, con ejemplos de una barbería ficticia.

**Aprobadas al instante (Active):**
- `c360_bienvenida_club` (Marketing).
- `c360_encuesta`, `c360_premio` y `c360_mis_sellos`. Las tres se enviaron como Utilidad y **Meta las pasó a Marketing**: cuestan más por mensaje.

**En revisión (Pending), como Utilidad:**
- `c360_sello`, `c360_te_faltan`, `c360_resena`, `c360_disculpa`, `c360_resena_recordatorio` y `c360_baja`.

**Ajustes durante el envío:**
- `c360_mis_sellos`: GHL la rechazó por "demasiadas variables para su largo". Se le agregó al final: "Cada visita suma un sello y al completar la tarjeta recibes tu premio. Para consultar de nuevo, escribe MIS SELLOS."
- `c360_resena` y `c360_resena_recordatorio`: se les agregó una frase de cierre para que no terminen en variable.

**Siguiente paso:** con todas aprobadas, en los 6 workflows DEMO se cambian las acciones "SMS provisional" por acciones WhatsApp con la plantilla correspondiente. Después viene la prueba con el celular de Sergio.

**Fijo en las plantillas, distinto de la maestra:** la palabra "sellos". En la maestra, `club_sello_plural` permite otra palabra ("puntos", "cortes"). Si un cliente usa otra, en su instalación se aprueba la variante con su palabra.

**Fuera de esta tanda** (no se usan en la demo):
- REA-01: `c360_reactivacion` y `c360_reactivacion_club`, en versión con oferta y sin oferta.
- RR-01: `c360_rr_encuesta`.
- CA-03: `c360_cumpleanos`.
- CA-02b: `c360_ca_oferta`.

Van en la tanda de la maestra / primer cliente.
