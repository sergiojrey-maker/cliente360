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

## Pendiente de decisión de Sergio
Ver la respuesta en el chat del 11 oct.
