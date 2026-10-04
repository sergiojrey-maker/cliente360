# Estado de construcción del snapshot

**Sub-cuenta:** Cliente 360 — Snapshot Maestro · Location ID `PF7DK8r0SiEtcVhO4Trt`
**Valores de demo:** Barbería Demo, meta 10 sellos, PIN de equipo `3600`, WhatsApp de MD360 (solo demo).

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

## Pendiente (Claude local con Chrome)
- [ ] Ask AI: instrucción general + F1–F5 + W1–W8 (`orquesta-ask-ai.md`)
- [ ] Pruebas de la sección 8 de la spec
- [ ] P1 (`/club`) y P2 (parche) en la sub-cuenta Mall Digital 360
