# Separación CL (Claudio) / GR (Greco) en la sub-cuenta Mall Digital 360

*Decidido por Sergio el 5 oct 2026. Solo aplica a **Mall Digital 360** (`WZYaJ8M4dqpvhdM2gpip`). La maestra "Cliente 360 — Snapshot Maestro" no se toca.*

- **CL = Claudio (Claude):** todo lo que pertenece al sistema Cliente 360.
- **GR = Greco (Grogbot):** lo que Sergio construya con Greco para otros fines.

## Regla de oro
Se marca como CL **solo lo que no rompe referencias**:
- **nombres visibles y carpetas:** sí se cambian;
- **tags y claves de custom values y custom fields:** no se cambian. Los workflows, las plantillas y la página `/club` los buscan por nombre exacto o por clave.

## Para Claude local (en Chrome), en este orden

**1. Workflows** de Cliente 360:
- todos los "DEMO — …", incluidos RES-01b y CLUB-03;
- y cualquier otro de Cliente 360 que haya en MD360.

Para cada uno: crear la carpeta **"CL — Cliente 360"**, moverlo allí y renombrarlo con el prefijo **"CL — "**. Ejemplo: "CL — DEMO — CLUB-01 Ingreso al club". Comprobar que siguen **Published** después del cambio.
- **No tocar** 05.02.01, 05.02.02, Afiliado360 ni ningún workflow que no sea de Cliente 360.

**2. Formularios:** Atendido, Satisfacción, Canjear e Ingreso al club, si existe en MD360. Renombrar con **"CL — "**.
- Comprobar que los workflows siguen disparando con el formulario renombrado. El disparador usa el ID, pero hay que confirmarlo.

**3. Pipeline:** "Prospectos Cliente 360" → **"CL — Prospectos Cliente 360"**.
- Revisar que los workflows que crean oportunidades (CLUB-01 / DEMO) sigan apuntando al pipeline.
- **No tocar Afiliado360.**

**4. Calendario:** "Cita — Demo" → "CL — Cita — Demo".

**5. Custom fields** (Settings → Custom Fields):
- La carpeta que agrupa los campos de Cliente 360 (ID `eqNRaYAjTG7AMhLYWFZU`) se renombra **"CL — Cliente 360"**.
- **Ojo:** en esa carpeta también está "¿Cuál describe mejor tu perfil?" (creado el 22 may 2026, no es de Cliente 360). Sácalo a su carpeta original o a "General".
- Los campos de Cliente 360 son los creados el 4 y 5 oct 2026, más `club_premios_pendientes`:
  - `club_*`, `rep_*`, `inst_*`, `sis_*`, `visitas_total`, `calificacion_*`, `fecha_*`, `fuente_registro`, `autorizacion_datos`, `pin_equipo`, `resena_estado`, `codigo_oferta`;
  - y el campo del formulario de satisfacción "¿Algo que podamos mejorar?".
- **No cambiar el nombre ni la clave de ningún campo.**
- **Hecho el 6 oct de otra forma:** `eqNRaYAjTG7AMhLYWFZU` es "Additional Info", una carpeta de sistema de GHL que no se puede renombrar. Se creó la carpeta "CL — Cliente 360" (`xRZNOXY1lGxpOQvsQdS6`) y los campos se movieron allí. "¿Cuál describe mejor tu perfil?" se quedó en "Additional Info". Detalle en `estado-snapshot.md`.

**6. Custom values** (Settings → Custom Values):
- Crear la carpeta **"CL — Cliente 360"** y mover allí los que empiezan con `negocio_`, `club_`, `resena_`, `rea_`, `ca_`, `rep_`, `sis_`.
- **No renombrarlos.**
- Los de antes (WhatsApp, Wa.Me, URL…, Afiliados360, la carpeta de GHL) se quedan donde están.

**7. Tags:** no se renombran. Sus nombres ya son exclusivos (lista abajo).

**8. Prueba de humo al terminar:**
- "Add to workflow" del contacto "Prueba Claude C360" a CL — DEMO — VIS-01 → sello +1;
- revisar por API que `club_sellos` suba.

**9.** Anotar el resultado en `estado-snapshot.md`. Commit y push.

## Inventario CL que Greco no debe tocar
- **Carpetas:** "CL — Cliente 360" (workflows, custom fields, custom values).
- **Todo lo que empiece con "CL — ".**
- **Tags de Cliente 360:**
  - Club: `club-miembro`, `club-premio-pendiente`, `club-premio-recordado`, `club-premio-canjeado`.
  - Reseñas: `resena-solicitada`, `resena-respondida`, `resena-inconforme`, `resena-inconforme-atendido`.
  - Reactivación: `rea-enviada`, `rea-volvio`.
  - CelebrAcción: `ca-consultar`, `ca-enviar`, `ca-esperando`, `ca-redimio`.
  - Demo y otros: `demo-c360`, `demo`, `lead-charla`, `baja`, `prueba-claude`.
- **Plantillas de WhatsApp** que empiezan con `c360_`.
- **Contactos de prueba:** "Prueba Claude C360" y el contacto de Sergio en la demo.
- **Páginas:** `/club` y `/club-terminos`, y el inicio de malldigital360.com.

## Archivo de workflows viejos (aprobado por Sergio, 6 oct, ~1 p. m.)
GHL no tiene "archivar" para workflows. **Archivar** aquí quiere decir:
- crear la carpeta **"ARCHIVO — 2025 (no usar)"**;
- mover allí los workflows;
- poner el prefijo **"ARCHIVO — "** en el nombre;
- dejarlos en **borrador**. **No borrar nada.**

**Para Claude local:**
1. Archivar estos dos (borradores de mayo 2025, versión vieja de Reputación Rescatada):
   - "1.1 Reputación Rescatada™ (Recuperación de reseñas) | Pedir reseña por WhatsApp" (`19027c54-3550-46d7-8650-6266dfbe8835`);
   - "1.2 Reputación Rescatada™ (Recuperación de reseñas) | Remover de workflow si cliquea en trigger link de encuesta 1 al 5" (`bc4a88a2-913f-4847-863b-5eda805d80e7`).
2. **También archivar** (Sergio lo pidió el 6 oct, "para que sepamos que están ahí"), con el prefijo **"ARCHIVO — Afiliado360 — "**:
   - "Recipe - Email Drip Sequence | Secuencia de correos – Programa de Afiliados Cliente360™ para MedSpas" (`a47a2c61-127f-4e6c-893e-167dd05294d8`);
   - "Nuevo Afiliado360™ Formulario de registro submitted" (`872dee90-a92a-493b-aad8-73a9496f61c8`).

   Los dos son borradores y siguen en borrador. **El pipeline Afiliado360 no se toca**, ni los workflows publicados de afiliados ("Workflow A/B — Afiliados…", "Soporte al Afiliado360™…").
3. Confirmar que siguen en borrador. Anotar en `estado-snapshot.md`, commit y push.

**Greco:** tampoco toca la carpeta "ARCHIVO — 2025 (no usar)".
