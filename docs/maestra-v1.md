# Maestra lista para el primer cliente → snapshot "Cliente 360 v1"

*Encargado por Sergio el 13 oct 2026. Lo ejecuta **Claude local** (Chrome, interfaz de GHL); lo revisa **Claude nube** por API. Tarea en Blue asignada a Claudio.*

**Objetivo:** que la plantilla "Cliente 360 — Snapshot Maestro" (`PF7DK8r0SiEtcVhO4Trt`) tenga **todos** los arreglos que se probaron en la DEMO de Mall Digital 360 (5 y 6 oct) y salga de ahí el snapshot **"Cliente 360 v1"**. Con eso, el primer cliente que pague se instala en un día sin repetir los errores de la demo.

Historial y causas de cada arreglo: `docs/estado-snapshot.md`, revisiones 5 a 10 y la entrada del canje (5 oct, ~10:45 p. m.).

## Reglas
- La **DEMO de MD360 es la referencia que funciona**: ante la duda, abrir el workflow DEMO equivalente y copiarlo.
- En la maestra **todo queda en borrador** (es plantilla, no tiene WhatsApp ni contactos reales). No publicar.
- **Cero texto fijo:** nombre del negocio, club, premio, enlaces, etc. salen de custom values. No copiar "Barbería El Llano" ni nada de la demo.
- **No copiar a la maestra lo que es solo de la demo:** la acción de oportunidad de DEMO — CLUB-01 (crea prospectos de MD360) **no** va en la maestra.
- Vocabulario: nada de "campaña", "marketing", "publicidad" en nombres ni mensajes.
- Firmar los avances en `estado-snapshot.md` como **[Claude local]**, commit y push al terminar cada parte.

## Hecho ya por Claude nube (13 oct, API)
- Tag `resena-respondida` creado en la maestra (`WV0IbbVoMbIzOiGAqr8n`). Lo usa RES-01b.
- Comprobado que la maestra ya tiene los campos que hacen falta: `calificacion_respuesta`, `sis_calculo`, `club_premios_pendientes`, `club_premios_canjeados`, `club_sellos`, `club_sellos_faltan`, `visitas_total`.

## Parte A — Detalles de la DEMO (Mall Digital 360, `WZYaJ8M4dqpvhdM2gpip`)
1. **Plantilla de WhatsApp `c360_canje_v2`** (Settings → WhatsApp → Templates, español, categoría **Utility**; si Meta la pasa a Marketing, se acepta):
   > Listo, {{1}}: ya registramos tu premio del {{2}} 🎁 Tus sellos siguen sumando: llevas {{3}}. ¡Gracias por venir! Si no quieres recibir más mensajes, responde BAJA.
   - {{1}} = nombre del contacto · {{2}} = `custom_values.club_nombre_completo` · {{3}} = `contact.club_sellos`.
   - Cuando quede **Active**: en **DEMO — CLUB-03 Canje** cambiar el SMS provisional por WhatsApp con `c360_canje_v2`, "Enable branches" apagado. Guardar y comprobar que sigue **publicado**.
   - La vieja `c360_canje` ("arranca de nuevo en 0") no se vuelve a usar.
2. **DEMO — Baja:** comprobar que quita `club-miembro`, pone `baja` y activa DND en **las dos** ramas (Delivered y Undelivered). Si falta algo, agregarlo. Sigue publicado.
3. No tocar nada más de los DEMO. **Prueba:** al final, por API (Claude nube) se comprueba que los 9 DEMO siguen publicados.

## Parte B — Maestra (`PF7DK8r0SiEtcVhO4Trt`)
1. **"Save result to field" en todas las Math** (Revisión 6). Ya hechas: CLUB-02 y CLUB-03. Faltan, como mínimo: **CLUB-01, VIS-01, RES-02, RES-03, REP-01, REP-02, REA-01, CA-04**; revisar también los demás por si alguno tiene Math.
   - Campo del cliente (`club_*`, `visitas_total`) → el mismo campo.
   - Contadores `rep_*` → `sis_calculo` (y el paso siguiente lo pasa al custom value, como en la demo).
2. **CLUB-01 Ingreso al club:** acción **"Iniciar contadores en 0"** (Update Contact Field) justo después del tag `club-miembro`: `club_sellos`, `club_sellos_faltan`, `visitas_total` y `sis_calculo` en 0. Después, la Math "Faltan = meta" con Save result → `club_sellos_faltan`.
3. **RES-01b Respuesta a encuesta (nuevo)**, copia de **DEMO — RES-01b** (Revisión 8):
   - Disparador **Customer replied**: canal WhatsApp + tiene `resena-solicitada` + **no** tiene `resena-respondida`.
   - Saca al contacto de RES-01 → If/Else: Alta (4, 5) guarda calificación, tag `resena-respondida`, `c360_resena`; Baja (1, 2, 3) guarda calificación, tags `resena-inconforme` + `resena-respondida`, llama a RES-02 y manda `c360_disculpa`; None termina sin enviar.
   - **Re-entry encendido.**
   - En **RES-01**: borrar el If/Else de la rama "Contact reply" (termina sin hacer nada). "Time out" sigue con el recordatorio.
   - **RR-01 Reputación Rescatada:** mismo problema. Si su encuesta pone `resena-solicitada`, RES-01b ya la cubre: borrar también su If/Else de "Contact reply". Si usa otro tag (`rr-encuesta-enviada`), agregar ese tag como alternativa en el filtro de RES-01b. Anotar cuál se hizo.
   - **Regla de Google:** el enlace de reseña nunca se le niega a nadie; el inconforme recibe disculpa **con enlace**.
4. **RES-02 Alerta de inconforme** (Revisión 9):
   - Re-entry **encendido**.
   - WhatsApp interno con plantilla `c360_dueno_inconforme` ({{1}} `custom_values.negocio_dueno_nombre`, {{2}} nombre, {{3}} `calificacion_respuesta`, {{4}} teléfono). Si la maestra no tiene WhatsApp conectado y no deja elegir la plantilla, dejar la acción con la nota "INSTALACIÓN: elegir c360_dueno_inconforme".
   - **Push** a la app (Internal notification → Notification): "Cliente inconforme: {{nombre}}", con calificación y teléfono.
   - **Tarea** "Llamar a {{nombre}}", vence en 1 día, asignada al usuario administrador de la maestra, con nota "INSTALACIÓN: cambiar al usuario dueño" (paso 6.1 de `instalacion-cliente.md`).
5. **CLUB-03 Canje:** cambiar el mensaje al cliente por el texto nuevo (el de `c360_canje_v2`, arriba), como SMS provisional con nota "INSTALACIÓN: cambiar a c360_canje_v2". El aviso "canje sin premio" pasa a **push** de la app (no WhatsApp interno).
6. **GEN-01 Baja:** quita `club-miembro`, pone `baja`, DND en las dos ramas.
7. **Toda acción de WhatsApp sin botones:** "Enable branches" apagado (si no, los pasos siguientes solo corren en "Delivered").
8. **Prueba de humo en la maestra** (contacto de prueba sin teléfono, como "Prueba Claude C360"):
   - VIS-01 ×2 → `club_sellos` 1 → 2 y `club_sellos_faltan` baja.
   - Ponerlo en 9 sellos → visita → premio: `club_premios_pendientes` = 1, tarjeta nueva.
   - Canje con `pin_equipo` = PIN de la maestra → pendientes 0, sellos se conservan.
   - Como la maestra está en borrador, usar "Test workflow" con el contacto; anotar qué se pudo probar y qué no.
   - **1 sello por día** (pendiente del checklist de Blue, Fase 1): en las pruebas de la demo del 5 oct, dos visitas del mismo día sumaron dos sellos. Revisar el If/Else "Inválida" (`fecha_ultima_visita` es hoy) en **VIS-01 de la maestra** y en **DEMO — VIS-01**: anotar si existe y si funciona. En la maestra debe bloquear la segunda visita del día. En la demo puede quedar apagado a propósito (para que el prospecto pruebe varias veces), pero hay que anotarlo.
   - **Trigger links en WhatsApp** (pendiente del checklist de Blue, Fase 1): probar en la DEMO si un trigger link dentro de una plantilla de WhatsApp registra el clic del contacto (Sergio abre el enlace en su celular; luego se revisa por API si el contacto recibió la acción). Anotar el resultado: decide si los botones del dueño van por enlaces o por palabras clave.
   - Borrar el contacto de prueba al final para que **no viaje en el snapshot**, y dejar los custom values `rep_*` en 0.

## Parte C — Snapshot
1. Agencia → Account Snapshots → **crear "Cliente 360 v1"** desde la maestra. **No borrar** "Cliente 360 v0.1 (demo)".
2. Actualizar `docs/instalacion-cliente.md` con lo aprendido:
   - el campo `club_premios_pendientes` llega con el ID de la maestra: revisar "Premios pendientes −1" y "¿Le quedan premios?" en CLUB-03 (o crear el campo antes de cargar el snapshot);
   - elegir plantillas (`c360_canje_v2`, `c360_dueno_inconforme`) y usuario dueño en RES-02 y CLUB-03;
   - publicar los workflows en el orden de la instalación.
3. Anotar en `estado-snapshot.md`, commit y push. Comentar en la tarea de Blue con **[Claude local]**.

## Qué revisa Claude nube al final (API)
- 9 DEMO publicados en MD360; `c360_canje_v2` en uso en DEMO — CLUB-03.
- Maestra: RES-01b existe; versiones nuevas en CLUB-01, VIS-01, RES-01, RES-02, RES-03, REP-01/02, REA-01, CA-04, GEN-01, RR-01; sin contactos de prueba; `rep_*` en 0.
