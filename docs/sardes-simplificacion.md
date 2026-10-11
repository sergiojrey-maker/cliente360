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
