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

---

## Tanda de la maestra / primer cliente (textos listos, 5 oct 2026)

Se envían a Meta en la instalación de cada cliente, desde su línea del club (paso 4 de `docs/instalacion-cliente.md`). Siguen las mismas reglas de arriba y además:
- **Meta no acepta variables vacías.** Por eso los mensajes con dato opcional (oferta de regreso) tienen dos versiones. El workflow elige con un If/Else: `rea_oferta_regreso` vacío o no.
- Los mensajes de **CelebrAcción, cumpleaños y reactivación** van solos. Ninguno menciona reseñas, y la solicitud de reseña nunca menciona premios ni ofertas.
- Todos terminan con salida BAJA, salvo la confirmación de baja.
- Juego en **tú**. Si un negocio prefiere **usted**, se aprueba la variante cambiando solo los verbos (ver la nota al final).

| # | Nombre | Categoría | Workflow | Texto (variables → custom value / campo) |
|---|---|---|---|---|
| 11 | `c360_pedir_cumple` | Marketing | CLUB-01b | {{1}}, una cosa más 🎂 En el {{2}} te damos {{3}} en tu cumpleaños. Si quieres recibirlo, déjanos tu fecha aquí (solo día y mes): {{4}} Si no quieres recibir mensajes, responde BAJA.<br>1=nombre · 2=`club_nombre_completo` · 3=`club_regalo_cumpleanos` · 4=`club_link_registro` |
| 12 | `c360_ya_miembro` | Utilidad | CLUB-01 | Hola {{1}}, ya eres parte del {{2}} 🙌 Llevas {{3}} sellos. Para consultar cuando quieras, escribe MIS SELLOS.<br>1=nombre · 2=`club_nombre_completo` · 3=`club_sellos` |
| 13 | `c360_regalo` | Marketing | CLUB-01 | Tu regalo de bienvenida al {{1}}: {{2}} 🎁 Muéstrale este mensaje al equipo en tu próxima visita. Si no quieres recibir mensajes, responde BAJA.<br>1=`club_nombre_completo` · 2=`club_regalo_bienvenida` |
| 14 | `c360_recordar_premio` | Utilidad | CLUB-02 | Hola {{1}}, recuerda que tienes {{2}} esperándote en {{3}} 🎁 Pídelo en tu próxima visita; este mensaje es tu comprobante.<br>1=nombre · 2=`club_premio` · 3=`negocio_nombre` |
| 15 | `c360_canje` | Utilidad | CLUB-03 | ¡Listo, {{1}}! Ya registramos tu premio del {{2}}. Tu tarjeta arranca de nuevo en 0: cada visita vuelve a sumar. ¡Gracias por venir!<br>1=nombre · 2=`club_nombre_completo` |
| 16 | `c360_reactivacion_club` | Marketing | REA-01 (miembro, sin oferta) | Hola {{1}}, hace rato no te vemos por {{2}} 👋 Tus {{3}} sellos siguen guardados y te faltan {{4}} para {{5}}. Te esperamos cuando quieras. Si no quieres recibir mensajes, responde BAJA.<br>1=nombre · 2=`negocio_nombre` · 3=`club_sellos` · 4=`club_sellos_faltan` · 5=`club_premio_corto` |
| 17 | `c360_reactivacion_club_oferta` | Marketing | REA-01 (miembro, con oferta) | Hola {{1}}, hace rato no te vemos por {{2}} 👋 Tus {{3}} sellos siguen guardados. Y para que vuelvas: {{4}}. Te esperamos. Si no quieres recibir mensajes, responde BAJA.<br>1=nombre · 2=`negocio_nombre` · 3=`club_sellos` · 4=`rea_oferta_regreso` |
| 18 | `c360_reactivacion` | Marketing | REA-01 (cliente, sin oferta) | Hola {{1}}, hace rato no te vemos por {{2}} 👋 Queríamos saber cómo estás y recordarte que aquí te esperamos. Puedes escribirnos por aquí para lo que necesites. Si no quieres recibir mensajes, responde BAJA.<br>1=nombre · 2=`negocio_nombre` |
| 19 | `c360_reactivacion_oferta` | Marketing | REA-01 (cliente, con oferta) | Hola {{1}}, hace rato no te vemos por {{2}} 👋 Para que vuelvas te tenemos esto: {{3}}. Escríbenos por aquí si quieres apartar tu espacio. Si no quieres recibir mensajes, responde BAJA.<br>1=nombre · 2=`negocio_nombre` · 3=`rea_oferta_regreso` |
| 20 | `c360_rr_encuesta` | Utilidad | RR-01 | Hola {{1}}, te escribimos de {{2}}. Estamos mejorando la atención y queremos saber cómo te fue la última vez que viniste. Responde con un número del 1 al 5 ⭐ Si prefieres no recibir mensajes, responde BAJA.<br>1=nombre · 2=`negocio_nombre` |
| 21 | `c360_cumpleanos` | Marketing | CA-03 | ¡Feliz cumpleaños, {{1}}! 🎂 En el {{2}} te tenemos un regalo: {{3}}. Muestra este mensaje en tu próxima visita este mes. Si no quieres recibir mensajes, responde BAJA.<br>1=nombre · 2=`club_nombre_completo` · 3=`club_regalo_cumpleanos` |
| 22 | `c360_ca_oferta` | Marketing | CA-02b | Hola {{1}}, por {{2}} en {{3}} tenemos esto para ti: {{4}}. {{5}} Muestra el código {{6}} al pagar. Válido {{7}}. Si no quieres recibir mensajes, responde BAJA.<br>1=nombre · 2=`ca_fecha_nombre` · 3=`negocio_nombre` · 4=`ca_oferta_titulo` · 5=`ca_oferta_detalle` · 6=`ca_oferta_codigo` · 7=`ca_oferta_vigencia` |

**Notas:**
- **`c360_rr_encuesta`** es el primer mensaje a una base antigua que quizá no dio autorización clara (Ley 1581). Por eso:
  - se presenta;
  - dice por qué escribe;
  - no vende nada ni pide reseña;
  - ofrece la salida en el mismo mensaje.
  - El enlace de reseña llega después, con la misma lógica de RES-01: a todos, sin importar la nota.
  - Se propone como Utilidad; si Meta la pasa a Marketing, se acepta.
- **`c360_ca_oferta`** tiene 7 variables. Si GHL la rechaza por "demasiadas variables para su largo", se quita {{5}} (detalle) y se deja en el título. Mismo arreglo que `c360_mis_sellos`.
- **`c360_pedir_cumple`:** el enlace es el formulario "Ingreso al club" de esa sub-cuenta. CLUB-01 reconoce al miembro y solo guarda la fecha.
- **Consulta del dueño (CA-01) y alertas:** no llevan plantilla de cliente. Van por notificación interna al usuario dueño.
  - **Por verificar en la demo:** si el WhatsApp interno fuera de 24 h también exige plantilla aprobada. Si la exige, se agrega `c360_dueno_aviso` ("Hola {{1}}, tienes un aviso nuevo de tu sistema Cliente 360: {{2}} Responde a este mensaje si necesitas ayuda.").
- **Nombres en la maestra vs. la demo.** En la maestra, las acciones "SMS provisional" de RES-01 y CLUB-02 dicen `c360_resena_enlace`, `c360_resena_inconforme` y `c360_faltan_2`. En Meta se aprobaron como `c360_resena`, `c360_disculpa` y `c360_te_faltan`. Los textos son los mismos; **valen los nombres de Meta.** Al cambiar a WhatsApp se elige la plantilla por su nombre de Meta.
- **Variante "usted":** se cambian los verbos y pronombres ("te" → "le", "ven" → "venga", "responde" → "responda", "tus" → "sus"). Se aprueba con el sufijo `_u` (p. ej. `c360_cumpleanos_u`).
