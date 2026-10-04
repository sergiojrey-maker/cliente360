# Cliente 360™ — Plan de lanzamiento v1

*4 oct 2026 — **actualizado a 40 h/semana** (Sergio dedica la mayor parte de su tiempo a Mall Digital 360 / Cliente 360). Meta del plan: **snapshot y demo listos en ~2 semanas, página `/club` publicada en la semana 1 y 3 pilotos fundadores instalados en ~4 semanas**.*

**Calendario a 40 h/semana**

| Semana | Foco |
|---|---|
| 1 (5–11 oct) | Fase 0 + Fase 1A (estructura por API) + 1B (formularios) + plantillas de WhatsApp a Meta + página `/club` + parche al sitio actual |
| 2 (12–18 oct) | Fase 1C (workflows) + 1E (pruebas) + demo de 2 minutos + kit de venta + Stripe |
| 3 (19–25 oct) | Charla/diagnósticos + red propia (gimnasio, tenis) → cerrar fundadores + primeras instalaciones |
| 4–6 (26 oct–15 nov) | Pilotos corriendo, medir, ajustar. Prospección diaria para los primeros clientes a precio completo |
| 7–10 (16 nov–13 dic) | Fase 4: testimonios + **revamp de malldigital360.com** (tarea Blue T-701: todas las soluciones de MD360, con Cliente 360 como insignia, sobre el sitio "MD360 Corporativo") |

Especificación técnica del snapshot: `snapshot-c360-spec.md`. Texto de la página del club: `pagina-club.md`.

Leyenda: **[API]** se puede hacer por API o conector de GHL (Claude lo puede ejecutar) · **[UI]** se arma a mano en GHL · **[S]** lo hace Sergio · **[C]** lo prepara Claude.

---

## Fase 0 — Cerrar pendientes (semana 1)
- [x] [S] Confirmar las 2 decisiones abiertas de la oferta: Arranque a 50 % para fundadores y garantía para fundadores. *(Confirmado el 4 oct.)*
- [ ] [S] Contador: ¿se factura desde Rey Enterprises USA LLC (Stripe) o desde el RUT colombiano? ¿Qué pasa con la factura electrónica DIAN y las retenciones?
- [ ] [S] Fecha de la próxima charla de Delfos (es el deadline de la demo).
- [ ] [C] Verificar la tarifa de Meta para plantillas en Colombia y ajustar el precio de la recarga de mensajes.

## Fase 1 — Snapshot base (semanas 1–3)
Se construye en una **sub-cuenta plantilla nueva ("Cliente 360 — Snapshot Maestro")**, no en la sub-cuenta Mall Digital 360, para que el snapshot salga limpio.

**1A. Estructura [API] — ✅ completa el 4 oct 2026** (nombres finales en `snapshot-c360-spec.md` y `estado-snapshot.md`)
- [x] Custom fields de contacto:
  - `fuente_registro`, `fecha_ultima_visita`, `calificacion_encuesta`, `fecha_solicitud_resena`, `autorizacion_datos`
  - `club_sellos`, `club_sellos_meta`, `club_premios_canjeados`, `club_codigo_premio`, `club_fecha_ingreso`
  - Para el dueño: `total_resenas`, `resenas_mes`, `reactivados_mes`, `ventas_medidas_mes`, `visitas_club_semana`
- [x] Custom values del negocio:
  - Nombre comercial, enlace de reseña de Google, WhatsApp del dueño
  - Ticket promedio, visitas al año, clientes nuevos al mes
  - Nombre del club, regla del club, premio, enlace de términos
  - Oferta vigente (título, detalle, código, vigencia), modo de operación, días de inactividad
- [x] Tags:
  - `dueno`, `empleado`, `baja`
  - `rr-*` (Reputación Rescatada), `i5-*` (Impulso)
  - `club-miembro`, `club-premio-pendiente`, `club-premio-canjeado`
  - `ca-*` (CelebrAcción)
- [x] Pipeline "Órdenes" (solo para Modo Orden): Recibido → En proceso → Entregado.
- [ ] Pipeline de ventas propio de MD360 "Prospectos Cliente 360" (en la sub-cuenta Mall Digital 360, separado de `Afiliado360`): Contacto → Diagnóstico agendado → Diagnóstico hecho → Propuesta → Cliente / No por ahora.

**1B. Formularios, encuesta y calendario [UI]**
- [x] Formulario "✅ Atendido" (celular + PIN). *(4 oct)*
- [x] Formulario "🎁 Canjear" (celular + PIN). *(4 oct)*
- [x] Formulario "Ingreso al club" con autorización de datos + encuesta "Satisfacción". *(4 oct)*
- [x] Encuesta de instalación (3 preguntas + regla/premio del club). *(4 oct)*
- [ ] Página de términos del club (el formulario ya enlaza a `club_link_terminos`, provisional).
- [x] Calendario de ejemplo para Modo Cita ("Cita — Demo", 4 oct).

**1C. Workflows [UI]** (orden de construcción = orden de la demo)
1. [ ] I5-01 Ingreso por QR → WhatsApp (palabra clave) + CLUB-01 bienvenida y sello 1.
2. [ ] I5-02 Solicitud de reseña tras visita (3 variantes de señal: QR, cita "asistió", etapa "Entregado") + RR-02 alerta de inconforme con botones.
3. [ ] CLUB-02 Sello (+1, máximo 1 por día, aviso "te faltan 2", premio) · CLUB-03 Canje · CLUB-04 `MIS SELLOS`.
4. [ ] REA-01 Reactivación por inactividad (con sellos guardados).
5. [ ] RR-01 Secuencia escalonada de Reputación Rescatada (Drip Mode).
6. [ ] REP-01 Contadores del dueño (operaciones matemáticas) + REP-02 reporte del lunes con 3 botones.
7. [ ] CTRL-01 Palabras del dueño: `REPORTE`, `PAUSA`, `ACTIVAR`, `AYUDA`.
8. [ ] CA-01 Consulta de oferta al dueño (1/2/3/4) · CA-02 envío escalonado de fecha · CA-03 cumpleaños · CA-04 redención.
9. [ ] GEN-01 Baja / no contactar · GEN-02 monitor interno (aviso a Sergio si no salen mensajes en X días).

**1D. Plantillas de WhatsApp [UI + Meta]** — enviar a aprobación temprano, porque Meta demora:
- [ ] Bienvenida al club.
- [ ] Encuesta de satisfacción.
- [ ] Recordatorio.
- [ ] Solicitud de reseña.
- [ ] "Te faltan 2".
- [ ] Premio.
- [ ] Reactivación.
- [ ] Cumpleaños.
- [ ] Oferta de fecha.
- [ ] Reporte del lunes.

**1E. Pruebas a verificar en la cuenta** (salieron como dudas en la estrategia)
- [ ] ¿Los trigger links rastrean al contacto también en WhatsApp?
- [ ] ¿La comparación de fecha "es hoy" funciona para limitar a 1 sello por día?
- [ ] ¿Existe y funciona el disparador "reseña recibida"?
- [ ] ¿Se puede leer `{{message.body}}` en respuestas?
- [ ] ¿Qué se puede hacer desde la app LeadConnector? (Conversaciones, citas, oportunidades, reseñas.)

## Fase 2 — Demo y kit de venta (semanas 2–3)
- [ ] [UI] **Demo de 2 minutos** con el número de MD360 (solo demo): el asistente escanea el QR → recibe bienvenida al club y sello → 1 min después, la solicitud de reseña → el presentador muestra en su celular el reporte del dueño en pesos.
- [ ] [C] **Diagnóstico de reputación gratis**: plantilla de 1 página (calificación y reseñas del negocio vs. 3 competidores + costo estimado en pesos).
- [ ] [C] Guion de la cita de diagnóstico (20 min) y manejo de objeciones.
- [ ] [C] One-pager de la oferta (de `oferta-cliente360-v1.md`).
- [x] [C] Borrador del contrato estandarizado → `contrato-cliente360.md` (permanencia mínima de 3 meses).
- [ ] [S] Revisión de abogado del contrato + plantilla en GHL Documents & Contracts.
- [ ] [C] Términos del club + texto de autorización de datos.
- [ ] [C] Tarjeta "Cómo manejar su sistema" y diseño del QR/NFC del club, con la marca MD360 (Canva).
- [ ] [S] Productos y precios en Stripe (COP, suscripciones) + link de pago manual (Bold o Mercado Pago).
- [ ] [C+UI] **Página mínima del club** (1 sola página en GHL, builder tradicional, p. ej. `malldigital360.com/club`):
  - "Le instalo el club de clientes de su negocio" + cómo funciona en 3 pasos.
  - Video o capturas de la demo.
  - Garantía 10 Reseñas.
  - Botón a WhatsApp para agendar el diagnóstico.
  - Sin precios por ahora (se dan en el diagnóstico).
  Es a donde se manda a la gente después de la charla y del diagnóstico. **No es el revamp.**
- [ ] [S] **Parche al sitio actual** (revisión del 4 oct, ver más abajo). Es 1 hora, no un rediseño.

**Revisión del sitio actual (4 oct 2026, vía API de GHL + buscadores; el proxy de esta sesión no deja abrir la página directamente)**

- **Raíz de malldigital360.com:** la sirve el website **"Cliente360™ | Sistema de Crecimiento Local Automatizado"** (20 páginas, actualizado por última vez el 5 jun 2026).
  - Google lo describe como un sistema *"para negocios latinos con ubicación física en Estados Unidos"*, con dirección en Lakeland, FL y teléfono (321).
  - Tiene páginas de **Precios** y **Checkout Plan Starter / Plan Pro** con pagos **en vivo** (planes en USD que ya no existen en la oferta v1).
- **Otros elementos del dominio:**
  - El **blog** se llama *"Crecimiento Local y **Marketing** Automatizado para Negocios Latinos"* (vocabulario prohibido).
  - Existe el funnel **"Cliente360™ | MedSpa USA"** (`/home-medspa`), también para EE. UU., con pago en vivo.
  - Hay páginas marcadas "OUT OF SERVICE" (`/video`, `/auditwidget`).
- **Lo que sí sirve y se conserva:**
  - Afiliados360 (`/afiliados360`, registro y términos).
  - Hub (`/hub`).
  - Política de privacidad y términos.
  - Los funnels de Tiro (GoHighLevel en español, webinar, expertos).
  - El taller de Cumaral (Delfos).
- **Ya empezado:** el website **"MD360 Corporativo"** (creado el 1 oct, sin dominio aún). Es la base natural del revamp.

**Veredicto: no se deja intacto, pero tampoco se rediseña todavía.** Parche de 1 hora:
1. Quitar del menú y despublicar **Precios**, **Checkout Starter / Pro** y el funnel **MedSpa USA**. En particular: que ningún checkout en vivo cobre los planes viejos.
2. Cambiar el nombre y la descripción del blog: quitar "Marketing" y "negocios latinos". Propuesta: *"Blog de Mall Digital 360: sistemas y automatización para negocios locales"*.
3. En inicio, cambiar la frase principal y el botón a la idea del club, y enlazar a `/club` (sin rehacer la página).
4. Revisar dirección y teléfono de EE. UU. en el footer: ¿se mantienen (la LLC existe) o se pone Villavicencio + WhatsApp +57? Decisión de Sergio.
5. Retirar las páginas "OUT OF SERVICE".

## Fase 3 — Pilotos fundadores (semanas 3–6)
- [ ] [S] Charla de Delfos con demo en vivo → diagnósticos agendados.
- [ ] [S] Networking propio: gimnasio donde entrena, academia de tenis.
- [ ] [S] Cerrar 2–3 fundadores: 1 gimnasio + 1–2 barberías/salones/spas.
- [ ] [S+C] Instalar con el proceso de 7 días (`oferta-cliente360-v1.md`, sección 6) y anotar cuánto toma cada paso de verdad.
- [ ] [C] Medir la línea base de cada piloto **antes** de activar: calificación, número de reseñas, clientes por semana.

## Fase 4 — Ajuste y prueba social (semanas 6–10)
- [ ] Revisar con los datos de los pilotos qué se usa y qué no, y simplificar.
- [ ] Testimonios en video + casos de antes/después.
- [ ] Ajustar precios dentro del rango si hace falta.
- [ ] **Revamp de malldigital360.com:** arranca en esta fase (no después), con la oferta ya probada y los casos reales de los pilotos. Incluye la página `/colombia`.

## Lo que necesito de Sergio para arrancar la Fase 1
1. Crear la sub-cuenta "C360 Plantilla" en GHL (o autorizarme a crearla, si el conector lo permite) y darme su Location ID.
2. Confirmar si el conector de Go High Level de esta sesión tiene acceso a esa sub-cuenta, para crear por API los campos, valores y tags de 1A.
