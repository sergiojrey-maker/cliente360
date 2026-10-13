# Lanzamiento lote 1 SmartLeads — estética Villavicencio (mié 14 oct 2026, 10:30 a. m.)

*Pedido por Sergio el 13 oct: "lancémosla mañana". El copy, los precios y el lote se aprobaron el 10 oct. Los ejecuta **Claude local** en la interfaz de GHL y los revisa **Claude nube** por API. Tarea en Blue: "Lanzar primera campaña SmartLeads — Limpieza facial Villavicencio".*

## Por qué no salió el 13 oct
- La rutina del lanzamiento (martes 10:30) no publicó nada: los dos workflows siguen en **borrador** y ningún contacto tiene `pros-toque-1`.
- Además, el 11 oct la simplificación de Sardes cambió cosas de las que dependen esos workflows:
  - el pipeline **"GR — High Ticket" se borró**. Las 20 oportunidades están ahora en **Mall Digital 360 → Nuevo prospecto**;
  - las tags se renombraron: `gr-lote-1-martes-13` → **`pros-lote-1-martes-13`**, `gr-lote-1-wa` → **`wa-lote-1`** y `gr-lote-1-web` → **`web-lote-1`**;
  - los workflows se renombraron a **"Outbound — WhatsApp integral"** y **"Outbound — Página moderna"**.
- **Hay que revisar cada paso antes de publicar.** Si una acción apunta al pipeline borrado, o un disparador o filtro usa el nombre viejo de una tag, el workflow falla en silencio.

## Estado verificado por API (13 oct, 6:00 p. m.)
- 20 contactos con `pros-lote-1-martes-13`, todos con correo y celular, sin DND:
  - 18 con `web-lote-1` (oferta Página moderna);
  - 2 con `wa-lote-1` (oferta WhatsApp integral): Dr. Jhonatan Castañeda y Délicatimagen.
- 20 oportunidades abiertas en Mall Digital 360 → Nuevo prospecto.
- Workflows en borrador.
- Plantillas de WhatsApp: en revisión de Meta. Los toques por WhatsApp quedan para cuando se aprueben.

## Para Claude local — mañana antes de las 10:30
1. **"Outbound — Página moderna" y "Outbound — WhatsApp integral"**, paso por paso:
   - **Disparadores y filtros:** que usen `web-lote-1` / `wa-lote-1` (o `pros-lote-1-martes-13`) y no los nombres `gr-…`.
   - **Acciones de oportunidad:** cambiarlas a **Mall Digital 360**:
     - "Lead nuevo" → Nuevo prospecto;
     - "Contactado" → Contactado;
     - "Respondió" → Respondió / interesado;
     - "Demo agendado" → Diagnóstico o demo agendado;
     - "Demo no-show" → No asistió (no-show);
     - "Demo hecho" → Diagnóstico hecho;
     - "Propuesta enviada" → Propuesta enviada.
   - **Tags que agrega o quita:** usar los nombres nuevos (`pros-toque-1/2/3`, `pros-respondio`, `pros-nurture`, `wa-interes`, `web-interes`). No crear tags `gr-…`.
   - **Correo:** remitente en **lc.malldigital360.com**, nunca info@ ni el dominio raíz. Stop-on-reply encendido (la respuesta saca al contacto y mueve la oportunidad a "Respondió / interesado").
   - **Pasos de WhatsApp:** si la plantilla no está aprobada, dejar ese paso desactivado o saltado. Que no bloquee el correo.
   - **Enlaces:** demo `demo-estetica.malldigital360.com` y citas `citas.malldigital360.com` (los dos abren).
   - **Vocabulario:** nada de "campaña", "marketing" ni "publicidad" en lo que ve el prospecto.
2. **Prueba:** meter a "Prueba Claude C360" (solo correo) en cada workflow con "Test workflow" o "Add to workflow". Confirmar que el correo 1 sale desde lc.malldigital360.com y que la oportunidad de prueba se mueve bien. Borrar la oportunidad de prueba si se crea.
3. **10:30 a. m. (Bogotá): publicar los dos workflows** y disparar el toque 1, según el disparador:
   - si el disparador es la tag del lote, quitarla y volverla a poner por lote (o "Add to workflow" masivo desde la lista filtrada por `web-lote-1` / `wa-lote-1`);
   - **envío escalonado:** si el workflow no tiene Drip Mode, activarlo (lotes de 5 cada 10 min). Son 20 correos y no hay que mandarlos todos en el mismo minuto.
4. **Anotar** en `docs/estado-snapshot.md` como [Claude local]: qué se cambió en cada workflow, la hora de publicación y cuántos entraron. Commit y push. Comentario en la tarea de Blue.

## Qué revisa Claude nube (10:45 a. m.)
- Los 2 workflows publicados.
- Los 20 contactos con `pros-toque-1` (o el equivalente) y los correos salientes en sus conversaciones.
- Ninguna oportunidad fuera de Mall Digital 360 y ningún error visible.
- Reporte a Sergio.

## Qué hace Sergio
- Nada para lanzar: el envío ya está aprobado. Solo contestar a quien responda, desde la app LeadConnector.
- Cuando Meta apruebe las plantillas, se activan los toques por WhatsApp (avisamos).
- Resultados: tarea de Blue del 20 oct ("[Mecenas] Flujo 1 SmatLeads Villavicencio: revisar resultados").
