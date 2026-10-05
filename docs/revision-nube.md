# Revisiones de [Claude nube] al trabajo de [Claude local]

Archivo exclusivo de Claude nube (el Claude local no lo edita, para evitar conflictos de merge).
**Claude local:** al hacer `git pull`, lee la sección más reciente y aplica lo que diga "Para Claude local".

---

## 5 oct 2026, ~10:50 p. m. (hora Colombia) — inicio de la noche
Sergio se fue a dormir. Claude nube revisa cada hora (hasta 6 veces) y deja notas aquí.

**Para Claude local, orden de trabajo de esta noche** (todo en borrador, sin publicar nada en vivo):
1. Pipeline "Prospectos Cliente 360" en Mall Digital 360 + oportunidad con tag `lead-charla` al final de la demo (sin tocar Afiliado360).
2. Página de términos del club y autorización de datos (sin publicar) + actualizar `club_link_terminos` en la maestra.
3. QR de la demo (`wa.me/573204055485?text=DEMO`) como letrero de mesa + `docs/guion-demo.md`.
4. Maestra: cumpleaños en CLUB-01, textos en inglés → español, horario del calendario.
5. `docs/instalacion-cliente.md` (activar un cliente en ≤ 2 h) + script por API si es viable.
6. Textos de plantillas pendientes en `docs/plantillas-whatsapp-demo.md`.

**Si Meta aprueba las 6 plantillas pendientes:** cambia los "SMS provisional" por WhatsApp en los workflows DEMO, pero **no publiques** hasta que Sergio despierte y haga la prueba con su celular.

**No hacer sin Sergio:** publicar páginas o workflows, borrar nada en vivo, tocar dominios, Stripe ni Meta (fuera de consultar el estado de las plantillas).

---

## Revisión 1 — 5 oct, ~11:55 p. m. (hora Colombia)
**Nada urgente en la cuenta en vivo.**

**Verificado por API:**
- **Los 6 puntos de la noche están hechos:**
  1. Pipeline "Prospectos Cliente 360" creado en MD360. Afiliado360 sigue intacto.
  2. Términos del club (`/club-terminos`).
  3. QR y guion de la demo.
  4. Pendientes de la maestra.
  5. Guía de instalación + script.
  6. Textos de las 12 plantillas.
- **Meta aprobó las 10 plantillas de la demo.** Los 7 workflows "DEMO —" ya usan WhatsApp y **siguen en borrador**. Bien.
- **Mall Digital 360:** fuera de los "DEMO —", ningún workflow cambió. El 05.02.01 está en borrador a pedido de Sergio.

**⚠️ Atención (para Sergio, no grave):** el funnel "Club de Clientes — Cliente 360" quedó **conectado al dominio** a las 10:57 p. m. (domainId `jgLEH5…`, el mismo de /hub). En GHL, una página de funnel con dominio conectado normalmente **ya se ve en internet** aunque no se haya tocado "Publish". Es probable que `malldigital360.com/club` y `/club-terminos` estén visibles. El contenido es el aprobado, así que no es un daño, pero Sergio debe revisarlo al despertar. **Claude local: no lo desconectes.** Lo decide Sergio.

**Para Claude local, siguientes pasos** (en este orden, todo en borrador):
1. **Plantillas #13 y #14** (`c360_regalo`, `c360_recordar_premio`): **sí puedes enviarlas a Meta** desde MD360, igual que las 10 anteriores. Esto ajusta la regla de "no tocar Meta": enviar plantillas a revisión es seguro. Cuando las aprueben, cámbialas a WhatsApp en DEMO — CLUB-01 y CLUB-02.
2. **Regla "Enable branches" apagada:** aplícala en todas las acciones WhatsApp de la maestra (o déjala documentada si en la maestra todavía son SMS provisionales).
3. **Checklist de la prueba de mañana con el celular de Sergio** (`docs/prueba-demo.md`): pasos exactos, qué debe llegar en cada paso, qué revisar en GHL y qué publicar primero. Que la prueba tome 10 minutos.
4. **Kit de venta** (`docs/kit-venta.md`):
   - guion del diagnóstico de 20 minutos, con la calculadora `herramientas/diagnostico-reputacion.html`;
   - las 8 objeciones más probables con respuesta;
   - one-pager de la oferta (texto listo para Canva).
5. **Blue:** marca como hechos en la tarea "Lanzamiento Cliente 360 v1" los puntos terminados (pipeline, términos, QR/guion, plantillas), con un comentario **[Claude local]**.

---

## Revisión 2 — 5 oct, ~12:55 a. m. (hora Colombia)
**Nada urgente en la cuenta en vivo.**

**El Claude local está detenido.** No hay commits desde las 11:45 p. m. ni cambios en GHL desde las 11:44 p. m.: lo último fue DEMO — RES-01 en MD360 y CLUB-01b en la maestra a las 11:12 p. m. Lo más probable es que haya terminado la lista de 6 puntos y cerrado su turno con un reporte, esperando instrucciones. No leyó los "siguientes pasos" de la Revisión 1, porque solo los ve si vuelve a hacer `git pull`.

**Estado verificado por API:**
- **Maestra:** 21 workflows, todos en borrador. CLUB-01b "Pedir cumpleaños" es nuevo.
- **Mall Digital 360:**
  - los 7 "DEMO —" siguen en borrador;
  - ningún otro workflow cambió;
  - Afiliado360 sigue intacto;
  - "Prospectos Cliente 360" existe.

**Para Sergio al despertar:** pegue en PowerShell:
`Haz git pull, lee la Revisión 1 y 2 en docs/revision-nube.md y ejecuta los "siguientes pasos" de la Revisión 1, sin detenerte.`

---

## Revisión 3 — 5 oct, ~2:25 a. m. (hora Colombia)
**Sin actividad. Revisiones suspendidas hasta que Sergio despierte.**
- Ni commits ni cambios en GHL desde las 11:45 p. m. Maestra: 21 workflows en borrador, sin cambios.
- Al despertar, lo que hay que hacer está en la Revisión 2.

---

## Decisiones de Sergio — 5 oct (día)
**Footer del sitio (decidido):** las dos sedes, como sucursales. Texto para el footer global de malldigital360.com y de `/club`:

> **Mall Digital 360** · Empresa de tecnología y automatización con IA para negocios
> 📍 Villavicencio, Meta, Colombia · 📍 Florida, Estados Unidos
> WhatsApp +57 320 405 5485 · info@malldigital360.com · Atención en español e inglés
> Política de privacidad · Términos

- Usar custom values para el WhatsApp y el correo (ya existen en MD360).
- **Para Claude local:** aplícalo como sección global (footer). Guárdalo, pero **no publiques** cambios de páginas en vivo sin el OK de Sergio.

**Hecho por Sergio (5 oct, día):**
- Quitó el dominio del funnel MedSpa USA.
- Borró las 5 páginas viejas del website principal.
- Revisó `/club` y `/club-terminos` en vivo: se ven bien.
- Revisó el nombre del blog: quedó bien.

**Autorizado por Sergio: cambiar la página de inicio de malldigital360.com** (website "Cliente360™ | Sistema de Crecimiento Local Automatizado", página "Inicio"). **Para Claude local:**
1. Título principal → **"Le instalamos el club de clientes de su negocio."**
2. Subtítulo → *"Sus clientes se unen con un QR, ganan premios por volver y le dejan reseñas en Google. Cada lunes usted ve en su WhatsApp cuánto dinero generó. Sin computador."*
3. Botón principal → texto **"Conocer el club"**, enlace a `/club`.
4. Quitar de esa página cualquier precio en USD, mención a EE. UU. como mercado y las palabras agencia, marketing o campaña que encuentres.
5. Footer nuevo de dos sedes (arriba).
6. **Puedes guardar y publicar este cambio** (Sergio lo autorizó). Antes, toma captura del "antes" y guárdala o descríbela en `docs/revision-nube.md`, por si hay que revertir.

**Decisiones pendientes 1–7 (`decisiones-pendientes.md`): OK de Sergio a todas las propuestas.**
1. Términos del club con vencimiento de premio a 90 días, aviso de 30 días y datos alojados fuera de Colombia: aprobados. Falta la revisión del abogado antes del primer cliente.
2. En la demo, `resena_link_google` sigue apuntando a `/club`: aprobado.
3. `/club` y `/club-terminos` en vivo: aprobado, se quedan así.
4. Arreglo del sitio (P2): hecho por Sergio.
5. Footer de dos sedes: decidido (arriba).
6. **Para Claude local:** envía a Meta `c360_regalo` y `c360_recordar_premio` y, cuando estén aprobadas, cámbialas a WhatsApp en DEMO — CLUB-01 y CLUB-02.
7. Costos: se asume tarifa Marketing. La optimización con la ventana de 24 h queda para v1.1.

## Revisión 4 — 5 oct, 3:45 p. m.: autorizado publicar la demo

Revisé `d98320f`, `5b4e87f` y `b4b7106`: inicio publicado, footer, `prueba-demo.md` y `kit-venta.md` bien. Sin correcciones.

**Autorizado por Sergio: publicar los 7 workflows "DEMO —" en la sub-cuenta Mall Digital 360.** **Para Claude local:**
1. **Antes de publicar**, haz el paso 0 de `docs/prueba-demo.md` por Sergio: busca su contacto con el celular personal (no el 320) y déjalo limpio:
   - sin los tags `club-miembro`, `demo-c360`, `resena-solicitada`, `resena-inconforme`, `baja`;
   - `club_sellos` = 0 y `club_sellos_faltan` = 0;
   - DND apagado.

   Revisa también que su usuario tenga el celular personal en My Profile.
2. Publica en el orden de la guía:
   1. Baja;
   2. VIS-01;
   3. CLUB-02;
   4. RES-02;
   5. RES-01;
   6. CLUB-04;
   7. CLUB-01, de último.

   Solo los 7 "DEMO —". **No publiques nada de la maestra ni ningún otro workflow de MD360.**
3. Después de publicar, abre cada uno y confirma que dice *Published*, que no hay acciones con error y que "Enable branches" está apagado en las acciones WhatsApp.
4. Avísale a Sergio: "Listo, escriba DEMO al 320 405 5485 desde su celular personal". Quédate atento a los Execution logs mientras prueba.
5. Si algo falla, despublica **solo** ese workflow, corrígelo y anota el paso y el error en `estado-snapshot.md`.
6. Al final, commit y push con el resultado de la prueba.

**Pendientes para Sergio (no bloquean la prueba):**
- **Contador "10.000+ reseñas generadas" del inicio:** espera la cifra real de Sergio. No lo cambies todavía.
- **Menú "Precios" → página en USD:** propuesta de la nube: que apunte a `/club` hasta el revamp. Espera su OK.

## Revisión 5 — 5 oct, 5:30 p. m.: primera prueba DEMO, falla en los sellos

**Lo que le llegó a Sergio (17:25):**
1. Bienvenida ✅
2. Regalo ✅
3. "🎉 ¡Completaste tu tarjeta! Ganaste un corte gratis" ❌ (debía ser "Sello 1 de 10")

**Lo que muestra la API** (contacto `FHyh1Ky3UCIBmoE901ue`, MD360):
- Tags: `club-miembro`, `demo-c360`, `lead-charla`, `resena-solicitada` y **`club-premio-pendiente`**.
- `club_fecha_ingreso`, `fecha_ultima_visita`, `fecha_solicitud_resena`, `fuente_registro` y `autorizacion_datos` sí quedaron.
- **`club_sellos`, `club_sellos_faltan` y `visitas_total` están vacíos.** No quedaron en 0 ni en 10.
- `club_meta_visitas` = "10" existe en los custom values. No es la causa.

**Causa probable:** la acción **Math operation de GHL no escribe nada cuando el campo está vacío**: "vacío × 0" queda vacío. Por eso CLUB-01 nunca dejó `club_sellos_faltan` en 10, el −1 de CLUB-02 tampoco escribió, y el If/Else "faltan ≤ 0" tomó el vacío como premio. En el paso 0 se dejaron los campos vacíos pensando que CLUB-01 los ponía en 0. Pero **todo cliente nuevo real llega con los campos vacíos**, así que esto también rompe la maestra.

**Para Claude local (corregir en DEMO y en la maestra):**
1. **CLUB-01:** reemplaza las dos operaciones matemáticas por **Update Contact Field**:
   - `club_sellos` = `0`;
   - `club_sellos_faltan` = `{{custom_values.club_meta_visitas}}`.

   Si Update Contact Field no acepta un custom value en un campo numérico, usa `10` en la DEMO y anótalo para la maestra.
2. **VIS-01 / CLUB-02 / canje:** antes de cada Math operation sobre `club_sellos`, `club_sellos_faltan`, `visitas_total` y `rep_*` (contacto), agrega un If/Else "campo vacío → Update Contact Field = 0" (para `faltan`, a la meta). Otra opción, si es más simple: en VIS-01, si `club_sellos_faltan` está vacío, ponerlo en la meta antes de llamar a CLUB-02.
3. **CLUB-02:** la rama de premio exige `club_sellos_faltan` **no vacío** y ≤ 0. Que un vacío nunca dé premio.
4. Revisa en los Execution logs de DEMO — CLUB-01 y CLUB-02 de las 17:25 si la Math dio error o "skipped", y anota la causa real en `estado-snapshot.md`.
5. **Resetea el contacto de Sergio** para repetir la prueba:
   - quita `club-miembro`, `demo-c360`, `resena-solicitada` y `club-premio-pendiente`;
   - ponle `club_sellos` = 0, `club_sellos_faltan` = 10 y `visitas_total` = 0. Esta vez con número, no vacío;
   - borra la oportunidad "— demo club" duplicada si se crea otra.
6. Avísale a Sergio cuando pueda repetir: "escriba DEMO de nuevo".

**Prueba, continuación (17:27–17:29):**
- Encuesta a los 2 min ✅.
- Respondió "2": llegó la disculpa con el enlace (sin filtrado) ✅. Tag `resena-inconforme` ✅. `calificacion_respuesta` = "2" ✅. `calificacion_encuesta` (numérico) quedó vacío: revisar si algún paso lo usa (reporte, `rep_*`).
- **MIS SELLOS** ❌: "llevas __ sellos. Te faltan __ para corte gratis". Es la misma causa: campos vacíos. Además, la plantilla debe tolerar que estén vacíos. Con la corrección de arriba queda resuelto.
- **Alerta al dueño:** por confirmar con Sergio. Ojo: el custom value `negocio_whatsapp_dueno` de MD360 = **+573204055485 (la propia línea del club)**. Si RES-02 lo usa, la alerta se manda a sí misma y nunca llega. **Para Claude local:** en la DEMO, cámbialo a +573133165253 (celular de Sergio) y revisa a qué número envía RES-02.
- Copy menor: "Sergio te va a contactar…" usa `negocio_dueno_nombre`. En la demo coincide con el nombre del cliente que prueba (Sergio), lo que suena raro. Propuesta: en la DEMO, `negocio_dueno_nombre` = "Andrés" (dueño ficticio de Barbería El Llano).

**Pedido de Sergio: encuesta con botones, no con número escrito.** Va después de corregir los sellos. **Para Claude local:**
1. Nueva plantilla `c360_encuesta_botones` (categoría Utility; Meta puede pasarla a Marketing):
   - Texto: "Hola {{1}}, ¿cómo te fue hoy en {{2}}?"
   - **3 botones de respuesta rápida:** "😀 Excelente" · "🙂 Bien" · "😕 Mal".
   - Se usan 3 y no 5 porque WhatsApp muestra 3 botones a la vista; con 5 esconde el resto tras "Ver opciones" y se pierde la ventaja.
2. En RES-01 (DEMO y maestra), la acción WhatsApp de la encuesta lleva **"Enable branches" encendido**, con una rama por botón:
   - Excelente → `calificacion_encuesta` = 5;
   - Bien → `calificacion_encuesta` = 4;
   - Mal → `calificacion_encuesta` = 2 → RES-02 (alerta al dueño + disculpa).

   Las 3 ramas reciben el enlace de reseña: sin filtrado.
3. Mantén como respaldo la respuesta escrita (1–5) por si alguien escribe en vez de tocar.
4. Envía la plantilla a Meta desde MD360. Mientras no esté aprobada, la DEMO sigue con la encuesta actual.
5. Aplica la misma idea donde el dueño responde con número (aprobación de CelebrAcción 1/2/3, PAUSA/ACTIVAR). Anótalo como pendiente en `estado-snapshot.md`; no lo construyas todavía.

**BAJA (17:32) ✅** Llegó la confirmación. Por API: `dnd` = true en todos los canales (WhatsApp, SMS, Email, Call, GMB, FB), puesto por el workflow DEMO — Baja.
- Detalle: no se puso ningún tag `baja` y el contacto sigue con `club-miembro`. Para el reporte (miembros activos) conviene que Baja quite `club-miembro` y ponga `baja`. Anótalo para DEMO y maestra.
- **Para el reset del contacto de Sergio:** además de lo de arriba, **apaga el DND en todos los canales**. Si no, la segunda prueba no le envía nada.

**Prioridades (Sergio, 5 oct 5:40 p. m.):** la encuesta con 3 botones está aprobada, pero es **mejora, no urgente**: se hace cuando la demo pase limpia. Las ideas de mejora de Sergio van a una lista de mejoras, no a la cola inmediata.

**Idea de mejora (nube):** el enlace de reseña de la demo lleva a `/club`, y eso desconcierta en una demostración. Propuesta: una página `/demo-resena` que imite la pantalla de Google con 5 estrellas y un texto que diga: "Aquí su cliente llega directo a dejar la reseña en el perfil de Google de su negocio". Así se ve el recorrido completo sin pedir reseñas reales de MD360. Si Sergio la aprueba, se apunta `resena_link_google` (DEMO) a esa página.

**Aprobado por Sergio (5 oct): página `/demo-resena`**, para después de que la demo pase limpia. Va en la lista de mejoras, junto con la encuesta de 3 botones.
- **Para Claude local:**
  1. Crea la página en el funnel del club y **no la publiques sin avisar**.
  2. Luego apunta `resena_link_google` de MD360 a esa página.
  3. Usa la marca MD360 y no imites el logo de Google: "Así se ve la reseña en Google", con 5 estrellas, como ilustración.

## Revisión 6 — 5 oct, 6:20 p. m.: segunda prueba DEMO, otra vez sale premio

**Lo que llegó (18:12–18:13):** bienvenida ✅, regalo ✅ y otra vez "🎉 ¡Completaste tu tarjeta!" ❌.

**Contacto por API después de la prueba:**

| Campo | Valor | Debía quedar en |
|---|---|---|
| `club_sellos` | 0 | 1 |
| `club_sellos_faltan` | 0 | 9 |
| `visitas_total` | 0 | 1 |
| `sis_calculo` | 0 | — |

Tags: `club-miembro`, `demo-c360`, `resena-solicitada`, `club-premio-pendiente`.

**Lectura:** el nuevo "Iniciar contadores en 0" sí funciona. Pero **ninguna Math operation escribe**:
- "×0 + `club_meta_visitas`" dejó 0;
- el +1 de `club_sellos` (CLUB-02) dejó 0;
- el +1 de `visitas_total` (VIS-01) dejó 0.

Por eso faltan = 0 → premio. No es solo el problema del campo vacío.

**Hipótesis principal:** los workflows DEMO se copiaron o importaron desde la maestra (PF7DK8r0SiEtcVhO4Trt). Las acciones Math pueden seguir apuntando a los IDs de los campos y del custom value **de la maestra**, que en MD360 no existen. Se ven bien en pantalla, pero escriben en la nada. Las acciones creadas hoy directamente en MD360 ("Iniciar contadores en 0", If/Else) sí funcionan.

**Para Claude local, en este orden:**
1. **Evidencia primero:** abre el historial del contacto de Sergio. Puede ser en Contacto → pestaña de actividad o "Workflows/Automation" del contacto, o Execution logs de DEMO — CLUB-01, VIS-01 y CLUB-02 de las 18:12–18:13. Anota qué dice cada Math operation: ejecutada, saltada o error, y qué valor escribió. Si la pestaña de Execution logs se congela, prueba con el historial del contacto o recargando solo el workflow.
2. **En cada Math operation de los 7 DEMO:** abre la acción, **vuelve a elegir el campo de destino y los operandos** desde la lista de MD360, y guarda.
3. **Si una Math sigue sin escribir, reemplázala:**
   - Faltan = meta → **Update Contact Field** `club_sellos_faltan` = `{{custom_values.club_meta_visitas}}`; si no lo acepta, `10` fijo en la DEMO.
   - Los +1 y −1 → prueba primero con la Math recién reconfigurada. Si tampoco funciona, avísame **antes** de rediseñar.
4. **Prueba tú mismo antes de llamar a Sergio:** usa un contacto de prueba (no el de Sergio) y dispara VIS-01 a mano, con "Add to workflow" o con el formulario ✅ Atendido. Verifica que `club_sellos` suba a 1 y `club_sellos_faltan` baje a 9. **No le pidas a Sergio otra prueba hasta que esto pase.**
5. **Resetea a Sergio** igual que antes:
   - tags: solo `evento_presencial_gratis_cumaral_2026` y `lead-charla`;
   - `club_sellos` = 0, `club_sellos_faltan` = 10, `visitas_total` = 0;
   - DND apagado.
6. Anota la causa real en `estado-snapshot.md`. Si fue lo de los IDs copiados, revisa lo mismo en **todo** workflow que se haya importado, porque así se va a instalar a cada cliente desde el snapshot.
