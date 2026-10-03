# Cliente 360™ — Estrategia de las 3 soluciones (borrador para discutir)

*3 oct 2026. Versión 0.1 — pendiente integrar las limitantes de GHL que Sergio envía aparte.*

## 0. La tesis en una frase
Las tres soluciones no son tres productos sueltos: son **un solo motor con tres momentos del cliente**.

| Momento | Solución | Qué entrega al dueño | Tipo de cobro sugerido |
|---|---|---|---|
| Pasado | Reputación Rescatada | Resultado visible en días (reseñas nuevas, calificación sube) | Pago único de arranque |
| Presente | Impulso 5 Estrellas | Reseñas constantes sin acordarse de pedirlas + **base de datos que crece sola** | Mensual (núcleo) |
| Futuro | CelebrAcción | Ventas medibles sobre esa base | Mensual (complemento o plan superior) |

El volante: **Rescatada abre la puerta → Impulso llena la base de datos → CelebrAcción la convierte en ventas → la lealtad las repite.** Sin Impulso, CelebrAcción se queda sin combustible a los 2–3 meses (la base vieja se agota y se cansa). Por eso Impulso es el producto que hay que vender como núcleo, aunque Rescatada sea el que se vende primero.

---

## 1. Reputación Rescatada (pasado)

**Cómo funciona**
1. Importar la base del negocio (Excel, contactos del celular, software de facturación). Limpiar: formato +57, duplicados, números inválidos, correos rebotados.
2. Segmentar por antigüedad: clientes de los últimos 6 meses primero, luego 6–18 meses. Más viejos: solo por correo o descartar.
3. Secuencia escalonada (Drip Mode de GHL, p. ej. 30–50 contactos/día):
   - Mensaje 1 (plantilla WhatsApp): saludo del negocio + pregunta de 1 a 5 ("¿Cómo te fue con nosotros?"). Respuesta con botón = abre ventana de 24 h.
   - Si responde 4–5: agradecimiento + enlace directo a dejar reseña.
   - Si responde 1–3: alerta inmediata al dueño para que llame/escriba y lo recupere; **luego** también se le comparte el enlace (ver "riesgo 1").
   - Si no responde: 1 recordatorio a los 3–4 días; si hay correo, versión por correo. Después, fin.
4. Reporte al dueño: cuántos contactados, respondieron, reseñas nuevas, calificación antes/después, clientes inconformes recuperados.

**Lo que confronto**
- **Riesgo 1 — "review gating" (el más grave).** El esquema clásico de GHL "encuesta → los felices a Google, los molestos a un formulario privado" va contra la política de Google. Si Google lo detecta, borra reseñas o castiga el perfil, y el cliente pierde exactamente lo que nos pagó. Propuesta: usar la encuesta para **detectar y atender** al inconforme (eso sí es valioso y es nuestro diferencial: "rescatamos al cliente, no solo la estrella"), pero no negarle el enlace a nadie. En la práctica, quien fue bien atendido después de una queja suele terminar dejando una reseña aceptable o no deja ninguna.
- **Riesgo 2 — el número de WhatsApp del negocio.** Escribirle en frío a 800 personas que no saben nada del negocio hace 2 años genera bloqueos y reportes → Meta baja la calidad del número → límites o restricción. Por eso: escalonado, segmentado por recencia, primer mensaje corto y útil, con salida fácil ("responde BAJA").
- **Riesgo 3 — autorización de datos (Ley 1581).** Muchas bases viejas no tienen autorización formal. No es para frenar el producto, pero sí para incluir en el contrato que el dueño declara tener la autorización, y que el primer mensaje permita darse de baja.
- **Riesgo 4 — costo por mensaje.** Cada plantilla de WhatsApp fuera de la ventana de 24 h cuesta (Meta cobra por mensaje según categoría). Hay que meterlo en el precio o cobrarlo como "saldo de mensajes". El correo es casi gratis: usarlo como canal de apoyo.
- **Es un producto de una sola vez.** Una base se rescata una vez. No sirve como ingreso recurrente; sirve como **oferta de entrada** que demuestra resultado rápido y justifica Impulso. Venderlo así: "arranque" con resultado en 2–3 semanas.

---

## 2. Impulso 5 Estrellas (presente → futuro)

El reto real no es pedir la reseña; es **saber cuándo el cliente ya consumió** sin que el dueño tenga que digitar nada. Regla de diseño: *o el cliente se registra solo, o el negocio marca con un toque.*

**Formas de entrada, por tipo de negocio**

| Negocio | Entrada | Señal de "ya consumió" | En GHL |
|---|---|---|---|
| Restaurante, café, heladería | QR en mesa/caja/factura → abre WhatsApp con mensaje pre-escrito ("Hola, quiero unirme al club de X") | El propio escaneo ocurre durante/después del consumo → espera 60–90 min | Trigger de mensaje entrante con palabra clave → espera → solicitud |
| Spa, salón, barbería, consultorio | Agenda (calendario de GHL o la que usen) | Cita marcada como "asistió" | Trigger de cita con estado *showed* |
| Taller | Registro al recibir el vehículo (QR o el empleado lo crea desde la app) | Oportunidad movida a "Entregado" desde la app móvil | Trigger de cambio de etapa |
| Tienda / POS | QR en caja, o integración con facturación electrónica (Alegra, Siigo, etc.) | Factura emitida | Inbound webhook (fase 2) |
| Recepción (hotel, clínica) | Tablet en modo kiosco con formulario corto | Salida/checkout marcado | Formulario + cambio de etapa |
| Cualquiera | Tarjeta NFC "acerca tu celular" (mismo enlace del QR) | Igual que QR | Igual que QR |

**Por qué recomiendo QR → WhatsApp como estándar (y no QR → formulario)**
- El cliente escribe primero: eso es consentimiento claro y abre la ventana de 24 h, dentro de la cual los mensajes son libres (sin plantilla y sin costo de plantilla). La solicitud de reseña sale prácticamente gratis.
- El contacto queda creado con nombre y número reales, sin digitar.
- Es lo más rápido de mostrar en vivo en la demo de Delfos.

**Lo que confronto**
- **¿Por qué la persona va a escanear el QR?** Nadie escanea "para dejar una reseña". Necesita un motivo propio: club del negocio, regalo de cumpleaños, wifi, carta digital, acumular compras. Y ese incentivo es por **registrarse**, nunca por reseñar (política de Google). Aquí Impulso se conecta con lealtad y con CelebrAcción: el gancho del QR es "únete al club y recibe beneficios en tus fechas".
- **No pedirle reseña al mismo cliente cada vez.** Un cliente frecuente de un café va 15 veces al mes. Regla: una solicitud por contacto (y quizá otra a los 6–12 meses si no reseñó). Se controla con un tag `resena-solicitada` / campo de fecha.
- **El dueño no va a operar nada.** Si la señal depende de que un empleado marque algo, tiene que ser 1 toque en la app móvil de GHL, y aun así hay que medir si lo hacen. Preferir siempre la señal automática.
- **Agregar respuesta a reseñas.** Responder todas las reseñas (con IA de GHL o plantillas aprobadas por el dueño) también ayuda al posicionamiento local y es un entregable visible cada semana. Recomiendo incluirlo en Impulso.

---

## 3. CelebrAcción (futuro: ventas)

**Cómo funciona**
- Calendario comercial precargado por país y por tipo de negocio, más fechas **personales** del contacto (cumpleaños, aniversario como cliente) — estas últimas son las que más convierten.
- Para cada fecha, 2–3 ofertas listas por vertical (2x1, % de descuento, lleva dos, regalo, trae a un amigo).
- Envío escalonado a la base, con código o mensaje para mostrar en caja, y medición de cuántos lo usaron.

**Fechas Colombia que no pueden faltar** (validar cada año): Día de la Mujer (8 mar), Día del Hombre (19 mar), Día de la Madre (2.º domingo de mayo — la más fuerte del año en comercio local), Día del Padre (3.er domingo de junio), primas de junio y diciembre (gente con plata en el bolsillo), Amor y Amistad (septiembre, distinto a San Valentín), Halloween / día de los niños (31 oct), Black Friday, temporada navideña y novenas, fechas locales del Meta, y quincenas como refuerzo.

**Lo que confronto**
- **Es la solución que más se parece a lo que NO somos.** "Promos en fechas especiales" suena a agencia. Hay que presentarla como sistema: *"un calendario comercial que se activa solo y te muestra cuánto vendió"*. Nada de "campañas".
- **El cuello de botella es operativo, no técnico.** Si cada mes alguien de Mall Digital 360 tiene que redactar la oferta de cada cliente, esto no escala. Propuesta: 10–7 días antes de cada fecha, el sistema le escribe al **dueño** por WhatsApp: *"Se acerca el Día de la Madre. ¿Cuál activamos? 1) 2x1 en… 2) 15 % … 3) Regalo … 4) Esta vez no"*. El dueño responde un número y el sistema llena los custom values y programa el envío. Esto es construible en GHL (el dueño es un contacto más; su respuesta dispara el workflow).
- **Sin medición, el cliente cancela.** Si no puede ver "esta fecha te trajo 23 clientes", a los 3 meses siente que paga por mensajes. Mínimo: código por fecha y que el empleado lo registre con un toque (o QR de redención que crea el registro solo).
- **Fatiga y costo.** Los mensajes promocionales por WhatsApp son de la categoría más cara, Meta limita cuántos de marketing recibe una persona, y cada envío de más genera bajas. Recomendación: máximo 1–2 fechas por mes + cumpleaños, y nunca mezclar promoción con solicitud de reseña en el mismo mensaje.
- **Necesita base con autorización.** Por eso depende de Impulso: los registros por QR ya traen autorización explícita para recibir beneficios.

---

## 4. Empaque y precio
Ver sección 8 (reemplaza el borrador anterior).

## 5. Cómo se ve en GoHighLevel (primer borrador del snapshot)

- **Custom fields (contacto):** `fuente_registro`, `fecha_ultima_visita`, `calificacion_encuesta`, `fecha_solicitud_resena`, `fecha_cumpleanos` (campo estándar), `compras_acumuladas`, `autorizacion_datos`.
- **Custom values (negocio):** nombre comercial, enlace de reseña de Google, WhatsApp del dueño, oferta vigente (título, detalle, código, vigencia).
- **Tags:** `rr-base-importada`, `rr-encuesta-enviada`, `rr-inconforme`, `i5-registrado`, `i5-resena-solicitada`, `ca-oferta-<fecha>`, `ca-redimio`, `baja`.
- **Workflows base:** RR-01 Secuencia de rescate · RR-02 Alerta de inconforme · I5-01 Registro por QR · I5-02 Solicitud tras consumo (por tipo de señal) · I5-03 Respuesta a reseñas · CA-01 Consulta de oferta al dueño · CA-02 Envío escalonado de fecha · CA-03 Cumpleaños · CA-04 Redención · GEN-01 Baja / no contactar.
- **Plantillas de WhatsApp** a aprobar en Meta por cada número (encuesta, recordatorio, oferta, cumpleaños).

## 6. ¿Vertical (por nicho) u horizontal (por tamaño)? — Recomendación: híbrido

**Producto horizontal, entrada al mercado vertical.**

- **El producto es uno solo** (un snapshot, un motor). Lo que cambia entre negocios no es la industria, es **cómo opera el negocio**, porque eso define la señal de "ya consumió". Propongo segmentar el *producto* en 3 modos de operación, no en 20 nichos:
  - **Modo Visita** (sin cita): restaurante, café, tienda, panadería, heladería → QR/NFC → WhatsApp.
  - **Modo Cita**: salón, barbería, spa, consultorio, odontología, veterinaria → agenda / "asistió".
  - **Modo Orden** (recibe y entrega): taller, lavandería, sastrería, servicio técnico → etapa "Entregado".
  Cada modo es una variante del mismo snapshot. Tres cosas que mantener, no veinte.
- **El tamaño define el plan**, no el producto: dueño solo (todo por WhatsApp/app) vs. negocio con empleados (usuarios para el equipo, un administrador con PC).
- **La venta sí va por nicho**, y uno a la vez: textos, ejemplos, ofertas de CelebrAcción y casos de éxito específicos ("barberías de Villavicencio"). Razones: Villavicencio es una ciudad donde los dueños del mismo gremio se conocen y se refieren entre sí. Un caso de éxito de una barbería le vende a otra barbería, no a un taller. El discurso específico convierte más que el genérico ("para negocios locales").
- **Riesgo de ir 100 % vertical:** se limita el mercado en una ciudad mediana y se termina con 10 versiones del producto. **Riesgo de ir 100 % horizontal:** mensaje genérico, nadie se siente identificado, y vuelve a sonar a "agencia que hace de todo".
- **Orden sugerido:** el primer nicho en Modo Cita (salones/barberías/spas: la señal es limpia, la recompra es frecuente y el ticket es bueno). El segundo en Modo Visita (restaurantes). Modo Orden queda en tercer lugar.

## 7. Principio de uso: "el dueño no abre el computador"

**El panel principal del dueño es su propio WhatsApp.** La app LeadConnector queda para responder y marcar cosas. El computador se usa solo para la instalación, que hace Mall Digital 360, y para una reconexión ocasional.

| Tarea del día a día | Dónde la hace el dueño | Cómo |
|---|---|---|
| Ver resultados | WhatsApp | Reporte semanal automático (ver sección 9) |
| Aprobar la oferta de una fecha (CelebrAcción) | WhatsApp | Responde "1", "2", "3" o "4" |
| Enterarse de un cliente inconforme | WhatsApp + notificación de la app | Alerta con nombre, número y botón para llamar |
| Responder a clientes | App LeadConnector (Conversaciones) | Bandeja única WhatsApp/correo |
| Marcar "asistió" / "entregado" | App (Calendario / Oportunidades) | Un toque. En Modo Visita no hace falta |
| Responder reseñas | Automático con IA + aprobación opcional | Verificar qué tanto permite la app |
| Configurar algo | Nada | Lo hace Mall Digital 360 (incluido en el plan) |

- **Negocio con empleados:** los empleados usan la app (marcar atendido, responder chats). Un administrador puede usar PC para ver tableros. Aun así, el reporte por WhatsApp sigue siendo lo principal.
- **Desconexiones** (WhatsApp, Google Business Profile, correo): las detecta y las arregla Mall Digital 360. Hay que montar un monitor interno, por ejemplo un workflow que avise a Sergio si no salen mensajes en X días, para que el dueño nunca sea el primero en notarlo.
- **Para verificar en la app LeadConnector actual:** reseñas (ver/responder), tableros y marcar asistencia. Lo pruebo cuando tenga acceso a la cuenta.

## 8. Precio: simple, duplicable, anclado al valor

**Principios**
- Máximo **2 planes mensuales + 1 arranque**. Nada de menús de complementos al principio.
- El precio se justifica con **un solo cliente recuperado al mes**. Si el ticket promedio es de COP 50.000 y ese cliente vuelve 2 veces, el sistema ya se pagó.
- La instalación y el soporte van incluidos. El dueño no paga por "hacer cambios".
- Pago mensual con permanencia mínima corta (3 meses) y descuento por pago anual. Cobro automático donde se pueda.

**Estructura propuesta (montos = hipótesis para validar con 5–10 dueños antes de publicar)**

| | **Arranque — Reputación Rescatada** | **Plan Impulso** (dueño solo) | **Plan 360** (con CelebrAcción) |
|---|---|---|---|
| Qué es | Pago único | Mensual | Mensual |
| Incluye | Instalación, limpieza de base, secuencia de rescate, reporte antes/después | QR/NFC, solicitud automática de reseñas, alerta de inconformes, respuesta a reseñas, **reactivación por inactividad**, reporte semanal en pesos | Todo Impulso + calendario comercial, cumpleaños, oferta aprobada por WhatsApp, medición de redenciones, usuarios para empleados |
| Rango a validar | COP 600.000 – 900.000 | COP 250.000 – 350.000 | COP 450.000 – 600.000 |

- **Mensajes de WhatsApp:** cada plan incluye un tope de envíos. Lo que pase de ahí se cobra como recarga. Así el costo de Meta no se come el margen.
- **Garantía para quitar el miedo:** por ejemplo, "si en 30 días no tienes al menos X reseñas nuevas, el siguiente mes no lo pagas". Ojo: depende de la base del cliente, así que X debe ser conservador.
- **Arranque gratis o con descuento** al tomar el Plan 360 con 6 meses o más. Es la palanca de cierre.
- **Pendiente:** confirmar el costo real por sub-cuenta (WhatsApp en GHL, IA de reseñas, envíos de correo) para fijar el margen.

## 9. Que el dueño vea pesos, no notificaciones

Una notificación de "nueva reseña" no dice nada. El sistema le lleva al dueño un **marcador acumulado** y lo traduce a plata, pero de forma honesta, separando lo **medido** de lo **estimado**. Si inflamos los números, el dueño deja de creerle al reporte y cancela.

**Mensaje al recibir una reseña (ejemplo)**
> ⭐ ¡Reseña número 87! Ya tienes 4,7 de calificación (empezaste en 4,2).
> Desde que instalamos el sistema llevas 41 reseñas nuevas. Los negocios con más y mejores reseñas aparecen más arriba en Google Maps y reciben más llamadas y visitas.

**Reporte semanal por WhatsApp (ejemplo)**
> 📊 Tu semana con Cliente 360
> • 9 reseñas nuevas (total 87 · ⭐ 4,7)
> • 14 clientes que no venían hace más de 45 días recibieron mensaje; **6 volvieron** → **COP 312.000 en ventas medidas**
> • Día de la Madre: 23 redenciones → **COP 1.150.000 medidos**
> • Valor estimado de tu reputación este mes: **≈ COP 800.000** (cálculo abajo)
> • 1 cliente inconforme atendido a tiempo ✅

**Cómo se calcula (configurable por negocio en la instalación)**
- **Dinero medido:** reactivados que volvieron + redenciones de ofertas, multiplicado por el ticket promedio que nos da el dueño (o el valor real si lo registran). Esto es lo más fuerte porque es verificable.
- **Dinero estimado por reseñas:** clientes nuevos atribuibles × ticket promedio × visitas al año. Como referencia está el estudio de Michael Luca (Harvard Business School, 2011): una estrella más en Yelp se asoció con 5–9 % más ingresos en restaurantes. Lo usamos como supuesto conservador y visible, no como promesa.
- **Fase 2:** traer métricas reales de Google Business Profile (llamadas, solicitudes de cómo llegar, clics al sitio) para pasar de "estimado" a "medido" también en reputación.
- **En GHL:** el dueño es un contacto con campos numéricos (`total_resenas`, `resenas_mes`, `reactivados_mes`, `ventas_medidas_mes`). Los workflows suman con la acción de operación matemática. El reporte sale con un workflow programado que lee esos campos. *(Hay que verificar el disparador de "reseña recibida" en la cuenta.)*

## 10. Lo que lo hace "sticky" (sin atrapar al cliente)

1. **Reactivación por inactividad**, la pieza que más retiene. Cada visita actualiza `fecha_ultima_visita`. Si el cliente no vuelve en el plazo de su nicho (barbería ~30–40 días, salón ~45, restaurante ~30, consultorio según tratamiento, taller ~6 meses), le llega un mensaje por WhatsApp o correo, con oferta opcional. Esto produce **dinero medido** cada semana.
2. **El marcador acumulado** (reseña #87, COP X recuperados desde que empezaste). Cancelar se siente como perder el contador.
3. **Lo instalado físicamente:** QR/NFC en mesas y caja, y clientes inscritos al "club" esperando beneficios.
4. **La base de datos crece cada día**, con autorización, y eso tiene valor propio. El dueño puede exportarla cuando quiera. Eso genera confianza; la permanencia la deben dar los resultados.
5. **El hábito del reporte semanal:** el lunes el dueño espera su mensaje.

<!-- fin secciones nuevas -->
## 11. Preguntas para Sergio (respóndalas cuando vuelva)

**Oferta y mercado**
1. ¿Solo Colombia/COP, o también EE. UU./USD? Esto define el revamp de malldigital360.com.
2. ¿Le cuadra "producto horizontal por modo de operación + venta por nicho, uno a la vez"? ¿Qué nicho primero? (Yo propongo salones/barberías/spas.)
3. ¿Tiene ya clientes o conocidos que sirvan de piloto (2–3)? ¿De qué nicho?
4. ¿Cuántos clientes quiere tener a 6 y a 12 meses? Con eso calculo si los rangos de precio dan para la meta.
5. Los rangos de precio de la sección 8, ¿le parecen altos, bajos o razonables para Villavicencio? ¿Cuál es el tope que ha escuchado pagar a dueños por software o servicios mensuales?
6. ¿Se anima con la garantía ("si no hay X reseñas en 30 días, el mes siguiente no se cobra")?

**Operación**
7. WhatsApp: ¿cada negocio con su propio número (más confianza, más trámite en Meta) o un número de Mall Digital 360 para arrancar? ¿Ya conectó WhatsApp por GHL en alguna sub-cuenta? ¿Qué le costó por sub-cuenta?
8. ¿Ha probado la app LeadConnector con un cliente? ¿Qué cosas no pudo hacer desde ahí?
9. ¿Quién da soporte cuando haya 20 clientes? ¿Solo usted, o tiene en mente un asistente?
10. ¿Cómo cobraría? (Transferencia/Nequi mensual, tarjeta con cobro automático, pagos de GHL…)

**Producto**
11. ¿El plan de lealtad (puntos/compras acumuladas) entra en el Plan 360 desde el inicio, o lo dejamos para después?
12. Las limitantes de GHL que mencionó: envíelas y las cruzo contra todos los flujos.
13. ¿Le sirve que el valor en pesos de las reseñas se muestre como "estimado", con el cálculo visible? ¿O prefiere solo lo medido?
