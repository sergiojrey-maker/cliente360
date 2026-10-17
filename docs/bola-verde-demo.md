# Bola Verde (tenis) — demo de reserva de canchas + reparación de la demo de WhatsApp

*Tarea de Blue **T-812** ("Networking propio: gimnasio y academia de tenis"). Pedido por Sergio el 17 oct 2026. Lo arma **Claudio local** (Chrome, GHL) y lo revisa **Claudio nube** por API. Todo en **Mall Digital 360** (`WZYaJ8M4dqpvhdM2gpip`), con prefijo `DEMO —`.*

**Orden:** primero la parte 1, porque sin plantillas la demo del club no envía nada. Después la parte 2.

## Parte 1 — WhatsApp: plantillas nuevas en el portafolio verificado

**Qué pasó:** Sergio verificó el *business portfolio* de Meta (con Greco) y vinculó ahí el 320 405 5485. Las plantillas aprobadas vivían en la cuenta de WhatsApp (WABA) anterior, así que **ya no aparecen**. Las acciones de WhatsApp de los workflows DEMO apuntan a plantillas que no existen y **fallan sin avisar**.

**Autorización:** Sergio pidió el 17 oct dejar la demo funcionando. Eso incluye volver a enviar a Meta estas plantillas, con el mismo texto que ya se aprobó. No se cambia nada del número ni de la verificación.

1. **Settings → WhatsApp:** anotar qué plantillas aparecen hoy y en qué estado. Si están todas, saltar al paso 3.
2. **Crear y enviar a aprobación** las que falten. Mismo nombre, idioma español y el texto exacto de `docs/plantillas-whatsapp-demo.md`:
   - **Demo:** `c360_bienvenida_club`, `c360_sello`, `c360_te_faltan`, `c360_premio`, `c360_mis_sellos`, `c360_encuesta`, `c360_resena`, `c360_disculpa`, `c360_resena_recordatorio`, `c360_baja`.
   - **Alerta al dueño:** `c360_dueno_inconforme`, con el texto de `docs/estado-snapshot.md`, Revisión 9.
   - **Canje:** `c360_canje_v2`, con el texto de `docs/maestra-v1.md`, parte A. Reemplaza a `c360_canje`.
   - **Bola Verde (parte 2):** `bv_reserva_confirmada` y `bv_recordatorio_reserva`, con los textos de la parte 2, paso 5.
   - **Categoría:** Utilidad, salvo `c360_bienvenida_club`, que va como Marketing. Si Meta las pasa a Marketing, se acepta (decisión del 11 oct).
3. **Cuando estén Active**, volver a elegir la plantilla en cada acción de WhatsApp. "Enable branches" queda apagado.

   | Workflow | Plantillas |
   |---|---|
   | DEMO — CLUB-01 | `c360_bienvenida_club` y `c360_mis_sellos` (ya miembro) |
   | DEMO — CLUB-02 | `c360_sello`, `c360_te_faltan` y `c360_premio` |
   | DEMO — CLUB-03 | `c360_canje_v2`, en lugar del SMS provisional |
   | DEMO — CLUB-04 | `c360_mis_sellos` |
   | DEMO — RES-01 | `c360_encuesta` y `c360_resena_recordatorio` |
   | DEMO — RES-01b | `c360_resena` y `c360_disculpa` |
   | DEMO — RES-02 | `c360_dueno_inconforme` (WhatsApp interno al 313) |
   | DEMO — Baja | `c360_baja` |

   Guardar cada uno y comprobar que sigue **publicado**.
4. **Prueba completa con el celular de Sergio**, siguiendo el guion de `docs/guion-demo.md`:
   - DEMO → bienvenida y sello 1;
   - ✅ Atendido → sello 2;
   - encuesta → responder 2 → disculpa con enlace y alerta al 313;
   - MIS SELLOS;
   - canje con PIN 3600;
   - BAJA.
5. **Anotar** en `docs/estado-snapshot.md` como [Claudio local]: qué plantillas se crearon, cuáles aprobó Meta y el resultado de la prueba.

## Parte 2 — Bola Verde: página de una sola página + reserva de canchas

**La oferta (antes de reputación y lealtad), para las canchas del club y de la academia:** la gente llega desde Google, Facebook o Instagram a una página bonita del club, elige cancha, día y hora, y queda reservada sola. El club ve y maneja todo desde la app LeadConnector, sin computador.

### Ya creado por Claudio nube (API, 17 oct)

| Qué | ID | Enlace del widget |
|---|---|---|
| Grupo "DEMO — Bola Verde · Reserva de canchas" | `KGCeHpQX4GNma6RUzJIK` | slug `demo-bola-verde-canchas` |
| Calendario Cancha 1 | `nDeeqCEWp9g1buqZ31pi` | https://citas.malldigital360.com/widget/booking/nDeeqCEWp9g1buqZ31pi |
| Calendario Cancha 2 | `xjdF92tqrudTIPB4yZSr` | https://citas.malldigital360.com/widget/booking/xjdF92tqrudTIPB4yZSr |
| Calendario Cancha 3 | `gUlMqPgcXzyocHSN2zoI` | https://citas.malldigital360.com/widget/booking/gUlMqPgcXzyocHSN2zoI |

**Configuración de los tres calendarios:**
- Tipo *event*, es decir, sin persona asignada: la cancha es el recurso.
- Turnos de 60 minutos, con opción de 90 o 120.
- Todos los días de 6:00 a. m. a 10:00 p. m. Es el horario real del perfil de Google (confirmado el 17 oct). El último turno de 60 minutos empieza a las 9:00 p. m.
- Reserva con mínimo 1 hora de anticipación y hasta 14 días adelante.
- Confirmación automática; el cliente puede reprogramar y cancelar.
- Casilla de autorización de datos (Ley 1581) en español.

### Para Claudio local, en la interfaz
1. **Calendarios:** revisar en Settings → Calendars que los tres aparecen dentro del grupo. Copiar el enlace del grupo (Groups → Share), que muestra las 3 canchas para elegir. Si el grupo no se ve bien en el celular, usar los tres widgets por separado en la página, cada uno en su pestaña "Cancha 1/2/3".
2. **Página de una sola sección: primero AI Studio; si no queda bien, AI Funnel Builder** (Sites → Funnels → "Build with AI"). Funnel "DEMO — Bola Verde", con un solo paso en `/bola-verde`. Prompt para pegar en cualquiera de los dos:

   > Crea una página de una sola sección larga, muy moderna, en español de Colombia, para "Bola Verde", club y academia de tenis en Villavicencio (Meta) con 3 canchas. Estilo deportivo y limpio: verde cancha (#2E7D32), blanco y un acento amarillo pelota (#D4E157); tipografía moderna y legible; fotos de canchas de tenis en arcilla, raquetas y jugadores (bancos de imágenes, con espacios para reemplazar por fotos reales). Tratar al visitante de "usted". Secciones, en este orden: (1) Portada con título "Reserve su cancha en 30 segundos", subtítulo "Elija cancha, día y hora. Le llega la confirmación a su correo y puede invitar a sus compañeros de juego." y botón "Reservar ahora" que baja al calendario. (2) Las canchas: tres tarjetas "Cancha 1", "Cancha 2", "Cancha 3" con superficie y si tiene luz nocturna (texto editable). (3) Cómo funciona en 3 pasos: elija cancha y hora; deje su nombre, correo y WhatsApp, y agregue a sus compañeros; reciba la confirmación y un recordatorio un día antes. (4) Reservar: aquí va el calendario (dejar un bloque para insertar un calendario de GoHighLevel). (5) Academia de tenis: clases para niños y adultos, con botón "Quiero información" que abre WhatsApp. (6) Horario, dirección con mapa y teléfono. (7) Pie con redes sociales. Página ligera, pensada para celular primero.

3. **Insertar el calendario** en la sección "Reservar": elemento *Calendar* → el grupo de Bola Verde, o los tres widgets en pestañas.
4. **No usar el dominio principal ni publicar como página definitiva.** Es una demo: dejarla en la URL de vista previa del funnel o en `/demo-bola-verde`. Publicar en vivo una página nueva necesita el OK de Sergio, y él ya lo dio para esta demo, pero solo como demo.
5. **Confirmación, invitados y recordatorio: WhatsApp primero, correo de respaldo.**
   *Decisión de Sergio (17 oct): el canal principal es WhatsApp, de ida y vuelta, y el correo va como respaldo. Los dos canales se quedan. El correo se puede probar hoy mismo; los pasos de WhatsApp salen apenas Meta apruebe las dos plantillas de abajo.*
   - **Formulario de reserva:** en los 3 calendarios, el campo **Teléfono (WhatsApp)** debe ser **obligatorio**, con indicativo +57 por defecto.
   - **Invitar a otros:** los tres calendarios ya permiten agregar invitados (guestType `collect_detail`). Quien reserva escribe el correo de sus compañeros en el mismo formulario, y a ellos también les llega la invitación. Revisar en el widget que aparezca "Agregar invitados". Por WhatsApp, quien reserva reenvía la confirmación o el enlace de reserva.
   - **Plantillas de WhatsApp (categoría Utilidad, español):**
     - `bv_reserva_confirmada`: "Hola {{1}}, su reserva en Bola Verde quedó confirmada ✅ 🎾 {{2}} · 📅 {{3}}. ¿Juega con alguien más? Reenvíele este mensaje o compártale el enlace para que reserve: {{4}}. Si necesita cambiar o cancelar, responda a este mensaje. Si no desea recibir mensajes, responda BAJA."
       - Variables: nombre, cancha, fecha y hora, enlace de la página.
     - `bv_recordatorio_reserva`: "Hola {{1}}, le recordamos su reserva de mañana en Bola Verde: 🎾 {{2}} · 📅 {{3}}. ¿Nos confirma su asistencia?"
       - Botones de respuesta rápida: **"✅ Confirmo"** y **"❌ No puedo ir"**.
   - **Workflow "DEMO — Bola Verde · Reserva de cancha"** (WhatsApp + correo):
     - **Disparador:** *Customer booked appointment*, filtrado a los 3 calendarios de Bola Verde.
     - **WhatsApp 1, al instante:** plantilla `bv_reserva_confirmada`. Va antes del correo y en el mismo momento.
     - **Correo 1, al instante — confirmación:**
       - Asunto: "Su cancha en Bola Verde está reservada 🎾".
       - Texto: "Hola {{contact.first_name}}, su reserva quedó confirmada: {{appointment.calendar_name}}, {{appointment.start_time}}. ¿Juega con alguien más? Reenvíe este correo o compártale el enlace de reserva para que se una: [enlace de la página]. Si necesita cambiar o cancelar, use el enlace de su invitación de calendario o responda a este correo. ¡Nos vemos en la cancha!"
       - Botones: "Agregar a mi calendario" y "Invitar por WhatsApp", con el enlace `https://wa.me/?text=` y el texto "Reservé cancha en Bola Verde el [fecha]. ¿Te unes? [enlace]".
     - **Push** a la app LeadConnector del usuario Sergio: "Nueva reserva: {{contact.name}} · {{appointment.calendar_name}} · {{appointment.start_time}}".
     - **Espera** hasta 24 horas antes de la cita. Si la reserva es para dentro de menos de 24 horas, saltar el recordatorio.
     - **Recordatorio, 24 horas antes, por los dos canales:**
       - **WhatsApp 2:** plantilla `bv_recordatorio_reserva`.
       - **Correo 2:**
         - Asunto: "Mañana juega en Bola Verde".
         - Texto: "Hola {{contact.first_name}}, le recordamos su reserva de mañana: {{appointment.calendar_name}}, {{appointment.start_time}}. Si no puede venir, avísenos respondiendo este correo para liberar la cancha."
     - **Remitente del correo:** el dominio de correo verificado de MD360. Para el cliente real se usa el dominio del club.
     - **Número de WhatsApp:** en la demo, el 320 405 5485. Para el cliente real, la línea del club.
   - **Workflow "DEMO — Bola Verde · Respuesta al recordatorio"** (el jugador maneja su reserva sin llamar):
     - **"✅ Confirmo":**
       - cambiar la cita a *Confirmed*;
       - responder "¡Perfecto, lo esperamos!".
     - **"❌ No puedo ir":**
       - cambiar la cita a *Cancelled*, para que la cancha quede libre en el calendario;
       - responder "Listo, liberamos su cancha. Puede reservar otra hora aquí: [enlace]";
       - enviar un push al club: "Se liberó {{appointment.calendar_name}} · {{appointment.start_time}}".
   - **Ida y vuelta:** cualquier respuesta del jugador, por WhatsApp o por correo, entra a **Conversaciones** en la app LeadConnector. Como el jugador escribió, se abre la ventana de 24 h y el club le contesta con texto libre, sin plantilla.
   - Dejar los dos workflows publicados solo para la demo.
6. **Prueba:** reservar desde el celular la Cancha 2 para mañana, con un invitado (otro correo de Sergio). Comprobar que:
   - llegan el WhatsApp de confirmación (si la plantilla ya está aprobada) y los dos correos, el del que reservó y el del invitado;
   - llega el push y se ve la cita en la app LeadConnector;
   - el recordatorio queda programado para 24 horas antes, en el registro del workflow;
   - se puede cancelar desde la app.

   Después, borrar la cita de prueba.
7. **Anotar** en `docs/estado-snapshot.md`, hacer commit y push, y comentar en la tarea T-812 de Blue firmando como [Claudio local].

### Cómo lo maneja el club (lo que Sergio le muestra al dueño)
- **App LeadConnector → Calendarios:** ve las 3 canchas por día, quién reservó y su WhatsApp. Puede mover, cancelar o bloquear horas (por ejemplo, para un torneo) desde el celular.
- Le llega un push con cada reserva nueva.
- Las preguntas de los clientes llegan a Conversaciones en la misma app.
- Más adelante, sobre los mismos contactos: reseñas en Google, club de lealtad y recordatorios a quien dejó de venir (Cliente 360).

### Datos de Bola Verde

**Confirmados por Sergio (17 oct):**
- **Precio por hora:** COP 30.000 hasta las 4:00 p. m. y COP 40.000 después de las 4:00 p. m.
- **Pago:** en la cancha, no al reservar. Puede cambiar más adelante; si se cobra al reservar, se conecta el cobro al calendario.
- **Superficie:** polvo de ladrillo (arcilla), las tres canchas.
- **Luz:** iluminación completa en las tres canchas; se juega igual de día y de noche.
- **Cancelación:** gratis por ahora. Puede cambiar.
- **Horario:** todos los días de 6:00 a. m. a 10:00 p. m., según el perfil de Google. Ya es el horario de los calendarios.
- **Elección de cancha:** el jugador escoge Cancha 1, 2 o 3, salvo que los empleados del club pidan otra cosa.

- **Perfil de Google (captura del 17 oct):**
  - nombre "Canchas de Tenis Bola Verde";
  - 4,6 estrellas con 5 reseñas;
  - categoría principal "Sports school" (escuela deportiva);
  - dirección: LT 8 A con Remansos del Bosque, Villavicencio, Meta, sobre la Calle 1 (vía 40);
  - abierto hasta las 10:00 p. m.
- **Para la página:**
  - la dirección exacta y el botón "Cómo llegar" con el enlace del perfil de Google;
  - la foto del perfil (cancha de arcilla con malla de sombra) como referencia del estilo, hasta tener las fotos reales.
- **Para la conversación de venta, después de las reservas:**
  - Con 5 reseñas el perfil se ve débil frente a quien busca "canchas de tenis Villavicencio". Es la entrada natural de Impulso 5 Estrellas: cada reserva cumplida genera una solicitud de reseña.
  - Revisar con el dueño la categoría: "Sports school" describe la academia, no las canchas. Conviene agregar "Tennis court" o "Club de tenis" como categoría adicional, sin quitar la principal.

- **Instagram:** https://www.instagram.com/canchasdetenis_bolaverde/ (para el pie de la página y el botón "Síganos").

**Llegan de Sergio:** logo, fotos y el WhatsApp del club (para el botón de la academia).

Con eso se cambian los textos, el horario de los calendarios y las fotos de la página.
