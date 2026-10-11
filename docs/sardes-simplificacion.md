# Sardes: simplificación de Mall Digital 360 (propuesta, sin ejecutar)

*11 oct 2026. Pedido de Sergio: una sola vertical a nivel de sistema.*
- **Empresa:** Mall Digital 360.
- **Proyecto:** Sardes.
- **Empleado:** Creso.
- Un solo pipeline, que va de la prospección a la entrega.
- Un solo juego de tags, campos, valores y calendarios, agrupado por solución.

Permiso para borrar lo que sobre. Lo que no se pueda borrar se marca **OOS**.
**Nada se ejecuta hasta que Sergio apruebe esta propuesta.**

## Las soluciones (el catálogo)
| Grupo | Solución | Para quién |
|---|---|---|
| `wa` | **WhatsApp widget** | Sitios web que no lo tienen |
| `web` | **Sitio web**: mejora de sitio desactualizado, o diseño y desarrollo si no tiene | Negocios con sitio viejo o sin sitio |
| `c360` | **Cliente 360™**: el club (Reputación Rescatada, Impulso 5 Estrellas, CelebrAcción, lealtad) | Negocios **sin** sala de espera |
| `turno` | **Turnotec**: turno digital (escanea, espera, lo llaman, lo atienden), luego reseña, referidos y lealtad | Negocios **con** sala de espera |

**Cliente 360 y Turnotec son el mismo sistema con dos modos de operación.** Encaja con el diseño del snapshot: hoy tiene los modos Visita / Cita / Orden, y Turnotec sería el modo **Turno**. Cliente actual: Goal Bridge Group.

## Inventario actual de Mall Digital 360 (API, 11 oct)
- **6 pipelines:**
  - Mall Digital 360 (22 etapas, mezcla prospección, afiliados, partners y entrega);
  - Afiliado360;
  - Eventos;
  - GHL Affiliate Program – Clase Semanal (Tiro);
  - CL — Prospectos Cliente 360;
  - GR — High Ticket DFY · DWY (Greco).
- **~115 tags** de muchas épocas:
  - `gr-*` de Greco;
  - `cl-club-*` y `cl-afiliado-*`, que **no** son del Claude de este repo;
  - las del club demo;
  - las de afiliados GHL;
  - y viejas (brickell, premarketing*, spam…).
- **13 calendarios:**
  - 4 personales de usuarios: Ana, Martin, John y el de Sergio;
  - 2 de consultoría (ES/EN);
  - Demo, Onboarding, Soporte Afiliado, RETO 5 DÍAS;
  - 3 GR.
- **~75 workflows:** 9 CL — DEMO, los de Greco, 05.0x de Meta/Google y muchos borradores de 2023–2025.

## Pipeline único propuesto: "Mall Digital 360 — Sardes"
Se **reutiliza** el pipeline "Mall Digital 360" (renombrado), para conservar las oportunidades que ya tiene.

**Prospección**
1. Nuevo prospecto
2. Contactado
3. Respondió / interesado
4. Diagnóstico o demo agendado
5. No asistió (no-show)
6. Diagnóstico hecho
7. Propuesta enviada
8. Pago recibido

**Entrega**

9. Setup agendado
10. Instalación en curso
11. Entrenamiento
12. Activo: pedir reseña
13. Pedir referidos
14. Completado

"No por ahora" o perdido **no es una etapa**: es el estado *Lost* de GHL, con su motivo.

**Qué solución compró:**
- campo de oportunidad **"Solución"** (selección múltiple: WhatsApp widget · Sitio web (mejora) · Sitio web (nuevo) · Cliente 360 · Turnotec);
- campo **"Plan"**.

Así un solo pipeline sirve para las cuatro soluciones.

## Tags, campos y valores
- **Tags agrupados por prefijo y por categoría de GHL:**
  - `pros-` para prospección: origen, nicho, lote, toques;
  - `wa-`, `web-`, `c360-` y `turno-` para cada solución.
- **Excepción:** las tags y claves de las que depende la demo del club (`club-*`, `resena-*`, `rea-*`, `ca-*`, `demo-c360`, `baja`, y los custom values `negocio_`, `club_`…) **no se renombran**. Si se renombran, la demo se rompe. Solo se mueven al grupo `c360`.
- **Custom fields y custom values:** una carpeta por grupo (Prospección, WA, Web, Cliente 360, Turnotec, General).

## Calendarios propuestos (3)
1. **Diagnóstico virtual 30 min**
2. **Visita al negocio 45 min**
3. **Setup / instalación**

Los personales de ex usuarios y los viejos pasan a OOS o se borran.


## Decisiones de Sergio (11 oct)
1. **La demo del club no se toca.** Workflows, formularios, tags `club-*`, `resena-*`, `rea-*`, `ca-*`, `demo-c360`, `baja`, `prueba-claude`, custom values y fields del club: se quedan como están. Son el sistema Cliente 360.
2. **Afiliado360 se conserva** (pipeline, calendario de soporte y workflows). Es otro escenario: vendedores o clientes que nos refieren y cobran comisión.
3. **Se elimina la separación CL / GR.**
   - Ningún nombre lleva "CL" ni "GR".
   - Internamente es "Creso / Sardes", pero eso **no** va en pipelines, tags ni nombres.
   - Queda un solo sistema.

## Plan de ejecución v1 (falta el OK final de Sergio a la lista)
**A. Pipeline único "Mall Digital 360"** (se reutiliza el existente `qp3DYlyeDDaUsDt5a5YV`).
- Etapas nuevas: las 14 de arriba.
- Las etapas viejas de partners y comisiones (Pendiente por Partner, Partner Asignado, Trabajo en Revisión/Aprobado, Comisión Pendiente, Ofrecer Upgrade, Trial, Nuevo Cliente | Afiliado) se eliminan o se mapean.
- Las oportunidades que haya en ellas pasan a la etapa equivalente antes de borrar nada.
- **Se fusionan ahí:**
  - "CL — Prospectos Cliente 360": Contacto → Nuevo prospecto, Diagnóstico agendado/hecho → igual, Propuesta → Propuesta enviada, Cliente → Pago recibido, No por ahora → Lost;
  - "GR — High Ticket DFY · DWY", con su mapa de etapas.
  - Después, esos dos pipelines se borran.
- Campos de oportunidad nuevos:
  - **Solución** (multi): WhatsApp widget · Sitio web (mejora) · Sitio web (nuevo) · Cliente 360 · Turnotec;
  - **Plan**.
- La acción de oportunidad del workflow DEMO — CLUB-01 se reapunta a "Mall Digital 360 → Nuevo prospecto". **Único cambio que toca la demo**, y es obligatorio, porque su pipeline actual desaparece.

**B. Quitar prefijos.**
- Workflows "CL — DEMO — …" → "DEMO — …".
- Formularios "CL — Atendido / Canjear / Satisfacción" → sin "CL — ".
- Carpetas "CL — Cliente 360" → "Cliente 360".
- Calendarios, workflows y tags de Greco: sin "GR". Por ejemplo:
  - `gr-lead` → `pros-lead`, `gr-wa-widget` → `wa-interes`, `gr-sitio-web` → `web-interes`;
  - mapa completo al ejecutar.
- Los workflows GR están en **borrador**, así que renombrar tags no rompe nada en vivo.

**C. Calendarios.** Quedan 3:
1. **Diagnóstico virtual 30 min** (hoy "GR · Cita virtual").
2. **Visita al negocio 45 min** (hoy "GR · Visita al negocio").
3. **Setup / instalación** (hoy "Onboarding – Mall Digital 360").

Afiliado360 conserva el suyo.
- **Se borran** los personales de Ana, Martin y John, y RETO 5 DÍAS.
- **OOS:** Consultoría Gratis ES/EN, Calendario Personal Sergio, "GR — Diagnóstico High Ticket" y Demo – Mall Digital 360, salvo que Sergio diga otra cosa.

**D. Workflows viejos:**
- borradores de 2023–2025 (Online Reputation, RETO 5 DÍAS, ASIGNACION *, New Workflow…) → **borrar**;
- publicados viejos (PRE MARKETING ANA/DAVID/MARTIN, Lead No-Show Meeting, Reagenda…) → revisar si algo los usa; si no, despublicar y **OOS**.

**E. Tags viejas sin uso** (brickell, coral gables, premarketing*, nuevos 1, out, spam likely, user:13218886518, couldn't find caller name…) → **borrar**. Las del club, Afiliado360 y afiliados GHL se quedan.

**F. Turnotec:** grupo `turno` reservado. Se construye cuando toque, como modo "Turno" del snapshot.

**Pendiente de respuesta:**
- pipeline "Eventos";
- pipeline "GHL Affiliate Program – Clase Semanal" y sus workflows A, B, D (Tiro);
- workflows en borrador "CL Acceso/Baja/Entrega Club" y tags `cl-club-*` / `cl-afiliado-*` (creados el 10 oct por otro hilo);
- cuál de las dos sub-cuentas "Goal Bridge Group" está en uso.

## Decisiones (11 oct, segunda parte)
- **Pipeline "Eventos": se elimina.** Antes se despublica y pasa a OOS el workflow "02.01 Nuevo Registro a evento presencial Cumaral 2026", que lo alimenta, y se borran las oportunidades que tenga.
- **Afiliado360: se conserva.** No se activa todavía, pero se va a usar.
- **Clase de GHL:** Sergio cree que la maneja en la sub-cuenta "Sergio Rey". **Verificado por API:** en "Sergio Rey" están los pipelines "Entrenamiento Corporativo", "Delfos · Escenarios" y "Jim Rohn · Bitácora", y **no** está el de la clase GHL.
  - El pipeline "GHL Affiliate Program – Clase Semanal" y los workflows **publicados** A (registro), B (recordatorios semanales) y D (reseña post-clase) están en **Mall Digital 360**, junto con las tags `ghl-afiliados-*` y su categoría.
  - **Pendiente:** Sergio decide si se mueven a "Sergio Rey" o se conservan aquí.

## Decisiones (11 oct, tercera parte): dos verticales en Mall Digital 360
1. **Vertical Mall Digital 360** (escalera de valor): WhatsApp widget → sitio web → Cliente 360 / Turnotec. **Un solo pipeline** ("Mall Digital 360").
   - **Afiliado360** pertenece a **esta** vertical: personas, negocios o vendedores que venden Cliente 360 o Turnotec y ganan comisión.
   - Se conserva con su pipeline y su calendario de soporte; se activa más adelante.
   - **No tiene nada que ver con la afiliación de GoHighLevel.**
2. **Vertical GoHighLevel:**
   - afiliados con el enlace de Sergio;
   - **club de pago** para quienes usan GHL con otro proveedor;
   - venta de snapshots.

   Se conservan el pipeline "GHL Affiliate Program – Clase Semanal", los workflows A, B, D y los "Club" (sin prefijo CL), y las tags `ghl-*`.
3. **Se acaba "CL" y "GR" en todo.**

**Hecho por API (11 oct, nube):** tags renombradas a la vertical GHL. Son del club GHL y de la verificación de afiliado **GHL**, no de Afiliado360:

| Antes | Ahora |
|---|---|
| `cl-club-activo` | `ghl-club-activo` |
| `cl-club-cancelado` | `ghl-club-cancelado` |
| `cl-club-pago-fallido` | `ghl-club-pago-fallido` |
| `cl-afiliado-pendiente` | `ghl-afiliado-pendiente` |
| `cl-afiliado-rechazado` | `ghl-afiliado-rechazado` |
| `cl-afiliado-verificado` | `ghl-afiliado-verificado` |
| `cl-sin-ghl-afiliado` | `ghl-sin-ghl-afiliado` |

**Para Claude local:** en los borradores "CL Acceso Club", "CL Baja Club" y "CL Entrega Club":
- quita "CL" del nombre (quedan "Club GHL — Acceso / Baja / Entrega");
- **vuelve a elegir las tags nuevas `ghl-*`** en cada acción y condición, porque el cambio de nombre por API puede no actualizar las referencias dentro del workflow;
- déjalos en borrador.

## Tareas para Claude local (fase 1: simplificación). Orden
1. **Club GHL:** lo de arriba.
2. **Quitar prefijos CL:**
   - workflows "CL — DEMO — …" → "DEMO — …";
   - formularios "CL — Atendido / Canjear / Satisfacción" → sin "CL — ";
   - carpetas "CL — Cliente 360" (workflows, custom fields, custom values) → "Cliente 360";
   - comprobar que los 9 DEMO siguen publicados.
3. **Quitar prefijos GR** de pipeline, calendarios, workflows y tags de Greco. Los workflows GR están en borrador.
   - Tags `gr-*` → grupos de la vertical: `pros-` (lead, respondió, calificado, demo-agendado, demo-noshow, propuesta, cliente, origen-*, nicho-*, lote-*, toque-*, seg-*, nurture*, no-fit, no-contactar), `wa-` (wa-widget, oferta-whatsapp, lote-1-wa), `web-` (sitio-web, oferta-pagina, revamp, lote-1-web).
   - Las de high ticket (`gr dfy`, `gr dwy`, `gr high ticket`, `gr classo`, `gr captacion`, `gr redes`, `gr-smat-vva`, `gr-prueba-sistema`): **preguntarle a Sergio** antes; pueden ser de otra línea.
4. **Pipeline único "Mall Digital 360"** (`qp3DYlyeDDaUsDt5a5YV`):
   - dejar las 14 etapas del plan v1;
   - mover las oportunidades de "CL — Prospectos Cliente 360" y "GR — High Ticket" con el mapa de etapas, y después borrar esos dos pipelines;
   - reapuntar la acción de oportunidad de DEMO — CLUB-01 a "Mall Digital 360 → Nuevo prospecto" y probar con "Prueba Claude C360";
   - crear los campos de oportunidad "Solución" (multi) y "Plan".
5. **Eventos:** despublicar "02.01 Nuevo Registro a evento presencial Cumaral 2026" y ponerle prefijo "OOS — "; borrar el pipeline "Eventos".
6. **Calendarios:** según el plan v1, punto C.
7. **Limpieza:** puntos D y E del plan v1.
   - Antes de borrar un workflow publicado, revisar que nada lo use.
   - **No tocar:** Afiliado360, la vertical GHL (A, B, D, Club, `ghl-*`), 05.0x (Meta y Google), "Form en home del website", "sergio-rey.com…".
8. Anotar todo en `estado-snapshot.md`. Commit y push.

## Vertical GoHighLevel: también un solo pipeline (decidido por Sergio, 11 oct)
Un pipeline recoge todo:
- quien se afilia a GHL con el enlace de Sergio;
- quien entra al **club de pago**;
- quien **compra snapshots**.

Se **reutiliza** "GHL Affiliate Program – Clase Semanal" (`Bm0i41qMCgojM6n23Kay`), renombrado **"GoHighLevel"**.
- Las etapas que ya existen **se renombran sin borrarlas**, así conservan su ID y los workflows A, B y D siguen funcionando.

**Etapas propuestas:**
1. **Registrado** (clase o lead): existe
2. **Asistió**: existe
3. **Interesado / respondió**: nueva
4. **Inició trial**: existe
5. **Pagó / verificado** (afiliado verificado con el enlace, club pagado o snapshot pagado): existe, hoy se llama "Afiliado verificado"
6. **Onboarding / entrega** (acceso al club, instalación del snapshot): nueva
7. **Activo: pedir reseña**: nueva
8. **Pedir referidos**: nueva
9. **Completado**: nueva

**Campo de oportunidad "Producto GHL"** (multi): Afiliado con enlace · Club de pago · Snapshot.
- Baja, pago fallido o "no por ahora" → estado *Lost*, más las tags `ghl-club-*`.

**Para Claude local (fase 1, punto 9):**
- renombrar el pipeline y las etapas existentes;
- agregar las nuevas en ese orden;
- crear el campo "Producto GHL";
- revisar que los workflows A, B, D y los "Club GHL" sigan apuntando a las etapas correctas.

**Resultado en Mall Digital 360: 3 pipelines.**
1. "Mall Digital 360" (vertical de soluciones)
2. "GoHighLevel" (vertical GHL)
3. "Afiliado360" (vendedores de Cliente 360 / Turnotec), que se conserva para más adelante
