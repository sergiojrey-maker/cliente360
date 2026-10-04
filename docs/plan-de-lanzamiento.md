# Cliente 360™ — Plan de lanzamiento v1

*4 oct 2026. Ritmo: 10 h/semana de Sergio. Meta del plan: **demo lista para la próxima charla de Delfos y 2–3 pilotos fundadores instalados en ~6 semanas**.*

Leyenda: **[API]** se puede hacer por API o conector de GHL (Claude lo puede ejecutar) · **[UI]** se arma a mano en GHL · **[S]** lo hace Sergio · **[C]** lo prepara Claude.

---

## Fase 0 — Cerrar pendientes (semana 1)
- [x] [S] Confirmar las 2 decisiones abiertas de la oferta: Arranque a 50 % para fundadores y garantía para fundadores. *(Confirmado el 4 oct.)*
- [ ] [S] Contador: ¿se factura desde Rey Enterprises USA LLC (Stripe) o desde el RUT colombiano? ¿Qué pasa con la factura electrónica DIAN y las retenciones?
- [ ] [S] Fecha de la próxima charla de Delfos (es el deadline de la demo).
- [ ] [C] Verificar la tarifa de Meta para plantillas en Colombia y ajustar el precio de la recarga de mensajes.

## Fase 1 — Snapshot base (semanas 1–3)
Se construye en una **sub-cuenta plantilla nueva ("C360 Plantilla")**, no en la sub-cuenta Mall Digital 360, para que el snapshot salga limpio.

**1A. Estructura [API] — Claude lo puede crear en cuanto exista la sub-cuenta**
- [ ] Custom fields de contacto:
  - `fuente_registro`, `fecha_ultima_visita`, `calificacion_encuesta`, `fecha_solicitud_resena`, `autorizacion_datos`
  - `club_sellos`, `club_sellos_meta`, `club_premios_canjeados`, `club_codigo_premio`, `club_fecha_ingreso`
  - Para el dueño: `total_resenas`, `resenas_mes`, `reactivados_mes`, `ventas_medidas_mes`, `visitas_club_semana`
- [ ] Custom values del negocio:
  - Nombre comercial, enlace de reseña de Google, WhatsApp del dueño
  - Ticket promedio, visitas al año, clientes nuevos al mes
  - Nombre del club, regla del club, premio, enlace de términos
  - Oferta vigente (título, detalle, código, vigencia), modo de operación, días de inactividad
- [ ] Tags:
  - `dueno`, `empleado`, `baja`
  - `rr-*` (Reputación Rescatada), `i5-*` (Impulso)
  - `club-miembro`, `club-premio-pendiente`, `club-premio-canjeado`
  - `ca-*` (CelebrAcción)
- [ ] Pipeline "Órdenes" (solo para Modo Orden): Recibido → En proceso → Entregado.
- [ ] Pipeline de ventas propio de MD360 "Prospectos Cliente 360" (en la sub-cuenta Mall Digital 360, separado de `Afiliado360`): Contacto → Diagnóstico agendado → Diagnóstico hecho → Propuesta → Cliente / No por ahora.

**1B. Formularios, encuesta y calendario [UI]**
- [ ] Formulario "✅ Atendido" (celular + PIN).
- [ ] Formulario "🎁 Canjear" (celular + PIN).
- [ ] Encuesta de instalación (3 preguntas + regla/premio del club).
- [ ] Página de términos del club + autorización de datos.
- [ ] Calendario de ejemplo para Modo Cita.

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
- [ ] [C] Acuerdo de servicio de 1 página + términos del club + texto de autorización de datos *(para revisión del contador/abogado)*.
- [ ] [C] Tarjeta "Cómo manejar su sistema" y diseño del QR/NFC del club, con la marca MD360 (Canva).
- [ ] [S] Productos y precios en Stripe (COP, suscripciones) + link de pago manual (Bold o Mercado Pago).

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
- [ ] **Siguiente fase:** revamp de malldigital360.com + página `/colombia` de Cliente 360 con los casos reales.

## Lo que necesito de Sergio para arrancar la Fase 1
1. Crear la sub-cuenta "C360 Plantilla" en GHL (o autorizarme a crearla, si el conector lo permite) y darme su Location ID.
2. Confirmar si el conector de Go High Level de esta sesión tiene acceso a esa sub-cuenta, para crear por API los campos, valores y tags de 1A.
