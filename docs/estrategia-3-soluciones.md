# Cliente 360™ — Estrategia de las 3 soluciones (borrador para discutir)

*3 oct 2026. Versión 0.3 — incorpora 2.ª ronda de respuestas de Sergio: 10 h/semana, precio fundador, prospección, cobro, lealtad aplazada, garantía y control del sistema sin entrenamiento.*

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
- **Orden sugerido (aprobado por Sergio):** primero salones, barberías y spas (Modo Cita), y **gimnasios** como opción paralela. Después restaurantes (Modo Visita). Modo Orden (talleres) queda en tercer lugar.
- **Gimnasio: puede ser el piloto con el dinero más fácil de demostrar.** Entra en Modo Visita (QR de ingreso o registro en recepción) con un campo extra de membresía (`fecha_vencimiento_membresia`). Ahí el sistema rinde por tres lados:
  - **Evita la deserción:** "No te vemos hace 10 días, ¿todo bien?". Un gimnasio pierde socios por inasistencia antes de que dejen de pagar. Cada socio retenido es dinero medido: la mensualidad.
  - **Renovación:** recordatorio 5 días antes del vencimiento.
  - **Reseña:** se pide a los 15–30 días del ingreso, cuando ya vio resultados, no el primer día.
  - CelebrAcción encaja con fechas de alta demanda: enero (propósitos), antes de vacaciones de mitad de año y "trae a tu amigo".

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
- **Costo por sub-cuenta, verificado:** WhatsApp en GHL cuesta USD 10/mes por sub-cuenta, más las plantillas que cobra Meta por mensaje entregado (según país y categoría) y un 5 % de procesamiento. Los mensajes entrantes y las respuestas dentro de la ventana de 24 h no tienen costo. Falta sumar la IA de reseñas y el correo, si se activan.
- **Decisión de Sergio:** se aceptan los rangos. Se prefieren menos clientes y mejor servidos; nada de cliente barato.

**Filtro de entrada (para no tomar clientes que van a salir mal)**
- Tiene que ser un negocio físico con al menos ~6 meses operando y un flujo constante de clientes.
- Tiene que tener un perfil de Google Business activo, o estar dispuesto a crearlo en la instalación.
- El dueño tiene que poder dedicar 5 minutos a la semana a leer el reporte y responder inconformes.
- Tiene que poder pagar el plan sin que le duela el mes. Si no puede, no se le vende software: va a la **ruta de capacitación** (charla o taller de Delfos, guía para pedir reseñas a mano). Queda en la base como prospecto para cuando crezca.

**Precio fuera de Colombia (hipótesis)**

| Mercado | Arranque | Impulso | 360 |
|---|---|---|---|
| Colombia (COP) | 600.000 – 900.000 | 250.000 – 350.000 | 450.000 – 600.000 |
| Resto de Latinoamérica (USD; Ecuador ya usa dólar; México luego en MXN) | USD 199 – 299 | USD 79 – 99 | USD 149 – 179 |
| Hispanos en EE. UU. (USD) | USD 497 | USD 197 | USD 297 – 397 |

En EE. UU. se mantiene la referencia de la web actual (USD 197/mes), porque ese mercado paga más y el costo de operar es el mismo.

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

**La idea que guía el reporte (Sergio):** el dueño no busca reseñas. Busca **más clientes, que le compren más, más seguido y que lo refieran**. Por eso el valor estimado se presenta con esas **4 palancas**, no como "valor de una reseña":
1. **Clientes nuevos** que llegan por mejor posición y calificación en Google.
2. **Ticket**: clientes que compran más (ofertas de CelebrAcción, "lleva dos").
3. **Frecuencia**: clientes que vuelven antes (reactivación, cumpleaños, lealtad).
4. **Referidos**: clientes que traen a otros ("trae a un amigo"; reseñas que convencen al que todavía duda).

**Cómo se calcula (configurable por negocio en la instalación)**
- **Dinero medido:** reactivados que volvieron + redenciones de ofertas, multiplicado por el ticket promedio que nos da el dueño (o el valor real si lo registran). Esto es lo más fuerte porque es verificable.
- **Datos que se piden en la instalación:** ticket promedio, visitas al año de un cliente típico y clientes nuevos al mes hoy. Son 3 preguntas por WhatsApp; no hace falta un formulario largo.
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
## 11. Mercado y estructura web (decidido: español, Latinoamérica + hispanos en EE. UU.)

**Decisión de Sergio:** malldigital360.com es el sitio principal, en español, abierto a todo el mundo hispanohablante (Latinoamérica + hispanos en EE. UU.). Colombia es el mercado activo hoy. México, Ecuador y otros se abren a medida que Sergio viaje con su marca personal.

**Recomendación: subcarpetas por país, no subdominios ni dominios por país.**

| Opción | Ejemplo | Veredicto |
|---|---|---|
| **Subcarpeta** | malldigital360.com/colombia | ✅ **Recomendada.** Toda la autoridad en Google se acumula en un solo dominio, hay una sola conexión de dominio en GHL y se abre un país nuevo en una tarde, duplicando la página. |
| Subdominio | co.malldigital360.com | ⚠️ Google lo trata casi como un sitio aparte: hay que construir autoridad desde cero en cada país. Útil solo si un país tuviera operación y equipo propios. |
| Dominio por país | malldigital360.com.co | ❌ Costo y mantenimiento multiplicados, y la autoridad dividida. |

**Estructura propuesta**
- `malldigital360.com` → sitio principal, español neutro: qué es Mall Digital 360, las soluciones y la historia de Sergio. Los precios aparecen como "desde USD…" o como "agenda tu diagnóstico", sin moneda local.
- `malldigital360.com/colombia` → embudo Cliente 360 Colombia: precios en COP, casos de Villavicencio y el Meta, WhatsApp +57.
- `malldigital360.com/mexico`, `/ecuador`… → se crean **solo cuando haya agenda de viaje o charla** en ese país (duplicando la de Colombia y cambiando moneda, casos y número).
- Variantes por nicho dentro de cada país, cuando haga falta: `/colombia/barberias`, `/colombia/gimnasios`. *(Verificar si GHL acepta rutas de dos niveles. Si no, usar `/colombia-barberias`.)*
- Más adelante, etiquetas `hreflang` (es-CO, es-MX, es-US, es) para que Google muestre a cada país su página.
- Inglés: no por ahora. Queda abierta la ruta `/en` para cuando se decida.

## 12. WhatsApp: qué número usar (análisis y recomendación)

**Lo que hay que saber (verificado)**
- **Coexistence** (la que Sergio usa hoy en MD360) permite usar el **mismo número** en la app WhatsApp Business del celular y en la API (GHL) a la vez. Limitaciones:
  - Hay que abrir la app en el celular **al menos una vez cada 14 días**. Si no, se desconecta y toca reconectar.
  - Tope de 20 mensajes por segundo (no nos afecta).
  - Se desactivan los mensajes temporales, la opción "ver una vez" y la ubicación en tiempo real.
- **Costo en GHL:** USD 10/mes por sub-cuenta + plantillas de Meta por mensaje entregado (según país y categoría) + 5 % de procesamiento. Los mensajes entrantes y las respuestas dentro de las 24 h son gratis.
- **Lo que de verdad arriesga un número no es el volumen, es la calidad.** Bloqueos y reportes bajan la calificación del número, y Meta responde bajando límites o restringiendo. Lo que más bloqueos genera: mensajes en frío a gente que no reconoce al remitente, frecuencia alta y promociones sin pedir permiso. Usar la API oficial (y no difusiones masivas desde la app normal) ya es en sí la mayor protección.

**Opciones**

| Opción | Ventaja | Riesgo | Veredicto |
|---|---|---|---|
| A. Número principal del negocio en coexistence | El cliente lo reconoce, máxima respuesta | Si se restringe, el negocio pierde su línea principal de atención. **Inaceptable para Rescatada y CelebrAcción** | Solo si el negocio insiste y únicamente con flujos donde el cliente escribe primero |
| B. **Número dedicado del negocio** ("línea del club"), conectado con coexistence | El riesgo queda aislado de la línea principal. El dueño o un empleado también puede contestar desde la app WhatsApp Business del celular (cumple "sin PC"). Se puede anunciar como "Club [Negocio]" | Al principio el cliente no tiene ese número guardado → hay que presentarlo bien | ✅ **Estándar recomendado** |
| C. Número de Mall Digital 360 para todos los clientes | Arranque inmediato, sin trámites | Mezcla marcas (el cliente final ve "Mall Digital 360", no su barbería). Un negocio que se porte mal afecta a todos. Los datos y la relación no quedan del negocio. Va contra la idea de que cada mensaje se identifique con el negocio | ❌ Solo para **demos de Delfos** y pruebas internas |

**Recomendación**
1. Cada negocio tiene su **línea del club**: una SIM nueva del negocio, un celular viejo o de la recepción con WhatsApp Business, y coexistence a GHL. El número principal queda intacto.
2. Para que la gente lo guarde, **todo nace del cliente**: el QR del local abre esa línea ("Únete al Club…"), y la factura o el letrero dicen "guarda este número: aquí llegan tus beneficios".
3. **Rescatada se hace desde la línea del club, pero con escudo:**
   - Primero por correo, a toda la base.
   - Por WhatsApp, solo a los clientes de los últimos 6–12 meses, en lotes pequeños.
   - El primer mensaje nombra claramente al negocio y trae botón de "No me interesa".
   - Si la calidad del número baja, se pausa.
   Si aun así se restringiera, el negocio no pierde su línea principal.
4. **Monitoreo:** revisar cada semana la calidad del número (verde/amarillo/rojo en Meta) de todos los clientes. Es un punto del checklist interno de MD360.
5. **Celular de la línea del club:** queda en el local (recepción o caja), con la app abierta. Así se cumple la regla de los 14 días sin depender de la memoria del dueño, y el personal atiende desde ahí.
6. **Verificación del negocio en Meta** (Business Manager a nombre del negocio): se hace en la instalación. Es lo que más demora el arranque, así que hay que pedir los documentos desde el día de la venta.

## 13. Metas a 6 y 12 meses (ajustadas a 10 h/semana)

**Supuestos**
- **10 horas semanales para Sardes** (decidido), es decir, ~43 horas al mes.
- Instalar un cliente con el snapshot listo toma ~4–6 horas.
- Mantener un cliente estable toma ~1–1,5 horas al mes.
- Prospectar y vender toma ~12–15 horas al mes. La preparación de las charlas cuenta como tiempo de Delfos.
- De cada ~10 diagnósticos se cierran ~3. Al principio se pierde ~1 cliente cada 2–3 meses.
- Los 3 primeros clientes pagan precio de fundador: **50 % por 3 meses**, a cambio de testimonio en video y datos de antes/después.

**Cuánto alcanzan 43 horas al mes**

| Clientes activos | Soporte | Instalaciones (2–3/mes) | Ventas | Total | ¿Cabe? |
|---|---|---|---|---|---|
| 10 | ~12 h | ~12 h | ~14 h | ~38 h | ✅ |
| 15 | ~19 h | ~12 h | ~12 h | ~43 h | ⚠️ Al límite |
| 20 | ~25 h | ~12 h | ~12 h | ~49 h | ❌ Necesita asistente |

**Meta**

| Mes | Nuevos | Bajas | Activos | Comentario |
|---|---|---|---|---|
| 1 | 2 | 0 | 2 | Pilotos fundadores (gimnasio + barbería/salón), salen de la charla y del networking propio |
| 2 | 1 | 0 | 3 | Tercer piloto |
| 3 | 1 | 0 | 4 | Primera venta a precio completo |
| 4 | 2 | 0 | 6 | Ya con casos medidos |
| 5 | 2 | 1 | 7 | |
| 6 | 2 | 0 | **9** | **Meta 6 meses: 8–10 clientes** |
| 7–12 | ~2/mes | ~1 cada 2–3 meses | **~20** | **Meta 12 meses: 20 clientes**, con asistente medio tiempo desde el cliente 12–15 (≈ mes 8) |

**En dinero (ticket mensual promedio ≈ COP 400.000)**
- **Mes 6:** ~9 clientes ≈ **COP 3,6 millones/mes** recurrentes + arranques.
- **Mes 12:** ~20 clientes ≈ **COP 8 millones/mes** recurrentes + ~2 arranques al mes (≈ COP 1,5 millones) ≈ **COP 9,5 millones/mes**.
- Menos el asistente (medio tiempo) y ~COP 80.000/mes por cliente en WhatsApp y mensajes, el margen sigue cerca del 60–70 %.
- Si no se contrata asistente, el techo realista es **~15 clientes**. Eso también es válido si se suben los precios hacia la parte alta del rango.

## 15. Garantía de reseñas (decidido: importantísima)

**Nombre y promesa (simple):** *"Garantía 10 Reseñas: si en tus primeros 30 días con el sistema activo no recibes al menos 10 reseñas nuevas en Google, el mes siguiente no lo pagas, y seguimos trabajando hasta lograrlo."*

**Reglas (en el contrato, en lenguaje sencillo)**
- Los 30 días cuentan desde que la línea del club y el QR quedan activos, no desde la firma.
- **Lo que pone el negocio:**
  - QR o NFC visible en al menos 2 puntos (caja y mesa/recepción).
  - Entregar la base de clientes (para Rescatada).
  - Marcar los atendidos cuando aplique (Modo Cita/Orden), por el método de un toque de la sección 16.
  Si el negocio no cumple su parte, la garantía no aplica. El reporte semanal se lo va mostrando, para que no haya sorpresas.
- **Solo cuentan reseñas reales** de clientes reales. Nunca se compran reseñas, nunca se pide a familiares que reseñen y nunca se dan regalos a cambio.
- **El filtro de entrada protege la garantía:** solo se vende a negocios con suficiente flujo de clientes (orientación: ≥ 150–200 clientes atendidos al mes, o una base de ≥ 300 contactos). Si el negocio es pequeño, se ajusta la cifra en el diagnóstico (por ejemplo, "6 reseñas") **antes** de firmar, nunca después.
- **Cálculo de riesgo:** con una tasa normal de 5–10 % de quienes reciben la solicitud, 150 clientes al mes dan 8–15 reseñas, más las de Rescatada. La garantía es alcanzable si el sistema está bien instalado.

## 16. Control sin entrenamiento: el dueño maneja todo con botones, enlaces y respuestas

**Principio (Sergio):** al dueño no se le enseña a poner tags, mover etapas ni entrar a la plataforma. Todo lo que necesite hacer debe caber en *"te llega un mensaje, tocas un botón (o respondes un número) y listo"*. Cada botón, enlace o respuesta dispara un workflow por debajo.

**Las 5 herramientas de GHL para lograrlo**

| Herramienta | Cómo la vive el dueño | Qué pasa por debajo | Dónde sirve |
|---|---|---|---|
| **Respuesta con botón / número en WhatsApp** | "Responde 1, 2 o 3" o toca un botón del mensaje | Trigger *Customer Replied* con filtro por palabra → workflow | Aprobar ofertas, pausar, pedir reporte |
| **Trigger link** en correo o WhatsApp | "Toca aquí para activar" | Trigger *Trigger Link Clicked*. GHL sabe quién tocó porque el enlace sale personalizado desde el sistema | Botonera del reporte semanal |
| **Formulario de un paso** guardado como ícono en el celular | Abre "✅ Atendido", escribe el celular del cliente y envía | *Form Submitted* → crea/actualiza contacto → secuencia de reseña | Empleados en Modo Cita/Orden, sin app ni contraseña |
| **Encuesta** | 3 preguntas en el celular | *Survey Submitted* → llena custom values | Instalación (ticket promedio, visitas/año, clientes nuevos/mes) y elección de ofertas |
| **Chat widget / QR** | El cliente final escribe | Crea contacto y conversación | Registro al club |

**Botonera del dueño (lo que puede hacer sin abrir nada)**
- **Lunes, reporte semanal** (WhatsApp + correo) con 3 botones:
  1. 🎁 *"Activar la oferta del mes"* → muestra las 3 opciones de la fecha → responde 1/2/3.
  2. ⭐ *"Pedir reseñas a los clientes de esta semana"* → dispara la solicitud a quienes aún no la recibieron.
  3. 🙋 *"Necesito ayuda"* → crea tarea para Mall Digital 360 y avisa a Sergio.
- **Alerta de inconforme** con 2 botones: *"Ya lo llamé ✅"* (cierra el caso) y *"Que lo llame Mall Digital 360"*.
- **Palabras clave** que puede escribir a la línea del club cuando quiera: `REPORTE` (resultados al instante), `PAUSA` / `ACTIVAR` (detener o reanudar todos los envíos, por ejemplo en vacaciones o cierre), `AYUDA`.
- **Tarjeta "Cómo manejar tu sistema"**: una sola imagen fijada en el chat con los botones y palabras de arriba. Ese es todo el "entrenamiento".

**Empleados:** solo un ícono en el celular ("✅ Atendido"), que es un formulario de un campo. Para evitar abusos, el formulario pide un PIN de 4 dígitos del negocio. La app LeadConnector queda para quien responda chats.

**Cuidados técnicos (a verificar en la cuenta antes de construir)**
- Los trigger links identifican al contacto solo si el enlace sale **desde GHL hacia ese contacto**. Por eso el dueño se registra como contacto (tag `dueno`) en la sub-cuenta del negocio. Hay que confirmar que el rastreo funcione en mensajes de WhatsApp y no solo en correo/SMS. Si no funciona, en WhatsApp se usan botones de respuesta rápida o números, que sí son confiables.
- Si alguien reenvía un trigger link, el clic queda a nombre del dueño. Para acciones sensibles (enviar a toda la base) siempre hay un segundo paso: "¿Confirmas? Responde SÍ".
- Ninguna acción del dueño dispara un envío masivo sin pasar por los topes del envío escalonado y el monitoreo de calidad del número.

## 17. Prospección (canales de Sergio)

**1. Red propia: canal número 1.**
- Charlas de Delfos.
- Networking diario: el **gimnasio donde entrena** es candidato natural a primer piloto, y las **clases de tenis** (academias y clubes entran en Modo Cita).
- Referidos de pilotos y de Afiliado360.

**2. Gancho para cualquier canal: "Diagnóstico de reputación gratis".** Una hoja de 1 página con la calificación y el número de reseñas del negocio frente a 3 competidores cercanos en Google Maps, y lo que eso le cuesta en pesos (con el modelo de la sección 9). Se entrega en persona, por WhatsApp o por correo. Es concreto, no suena a agencia y abre la conversación de venta.

**3. Smartlead (correo en frío) y Closely (LinkedIn + correo).**
- **Para qué sí sirven:**
  - Negocios con más estructura que sí viven en LinkedIn o leen correo: cadenas de gimnasios, clínicas y consultorios con varias sedes, franquicias.
  - **Calentar ciudades antes de los viajes** de Sergio a México, Ecuador, etc.
  - Además le sirven a Cartago.
- **Para qué no:** la barbería o el restaurante pequeño de Villavicencio casi no está en LinkedIn ni lee correo en frío. Ahí funciona la red propia y el diagnóstico en persona.
- **Cuidados:**
  - El correo en frío sale desde un **dominio secundario** (no desde malldigital360.com), para no dañar la entrega de los correos de clientes.
  - Volúmenes bajos y personalizados.
  - Siempre con opción de no recibir más.
  - Vocabulario de la casa: nada de "campaña" ni "marketing".
- **Flujo:** las respuestas positivas de Smartlead/Closely entran a GHL (por integración o webhook) a un pipeline de prospectos de Cliente 360, separado de `Afiliado360`, con la cita de diagnóstico agendada desde el calendario.

## 18. Cobro a los clientes

**Lo que hay en Colombia (verificado, oct 2026)**

| Opción | ¿Cobro automático recurrente? | ¿Integración con GHL? | Comentario |
|---|---|---|---|
| **Stripe** (cuenta de Rey Enterprises USA LLC) | ✅ Suscripciones nativas | ✅ Nativa | Puede cobrar **en COP** a tarjetas colombianas y liquida en USD (Stripe convierte con ~1 % adicional). Es la vía más simple. Contras: varias tarjetas débito colombianas rechazan cobros internacionales o recurrentes, y hay comisión internacional. |
| **Mercado Pago** | ✅ Suscripciones nativas | ⚠️ No oficial: app de terceros del Marketplace (mpghl.com), Albato o API | Buena opción para quien no tiene tarjeta de crédito. Hay que probar la app de terceros antes de depender de ella. |
| **Wompi** (Bancolombia) | ⚠️ Solo tokenizando la tarjeta; sin suscripciones listas | ❌ Por webhook | Viable combinado con **Treli**, que maneja suscripciones, reintentos y conciliación sobre Wompi, ePayco, PayU o Stripe, y avisa por webhook. Tiene sentido con más de ~15–20 clientes colombianos. |
| **Bold** | ❌ Todavía no: Bold dice que está desarrollando API de pagos recurrentes | ❌ | Sirve para **links de pago** mensuales; no para cobro automático. |
| **Nequi / transferencia** | ❌ Manual | — | Se automatiza el recordatorio, no el cobro. |

**Recomendación: dos carriles, sin complicar**
1. **Carril automático (preferido): Stripe en COP** con suscripción mensual desde GHL. Incentivo: **5 % de descuento por cobro automático o pago anual**.
2. **Carril manual con recordatorio automático:** para quien no tenga tarjeta que funcione. GHL envía el día 1 el link de pago (Bold o Mercado Pago) o los datos de Nequi. A Sergio le llega *"¿Pagó Barbería X? [Sí ✅] [No]"*. Si toca "No", sigue una secuencia amable de recordatorio y luego pausa del servicio.
3. **Probar Mercado Pago (app de terceros) con el primer cliente que lo necesite.** Si funciona bien, se vuelve el carril automático para quien no usa Stripe.
4. **Revisar con el contador** (antes del primer cobro):
   - si se factura desde la LLC de EE. UU. o desde el RUT colombiano;
   - qué implica la factura electrónica DIAN para que el negocio pueda deducir el gasto;
   - retenciones al pagar a una empresa del exterior.
   Esto puede inclinar la balanza hacia una pasarela local.

## 19. Decisiones tomadas y preguntas abiertas

**Decidido (3 oct 2026)**
- Mercado: español para Latinoamérica + hispanos en EE. UU. Colombia es el mercado activo, con subcarpetas por país (sección 11).
- Precios: se aceptan los rangos; calidad sobre volumen; quien no pueda pagar va a la ruta de capacitación (sección 8).
- **Precio fundador:** 50 % por 3 meses para 3 pilotos, a cambio de testimonio en video y datos de antes/después.
- Pilotos: gimnasio + barbería/salón/spa. Se buscan en la próxima charla de Delfos y en el networking propio (gimnasio, tenis).
- WhatsApp: línea del club dedicada por negocio, con coexistence; número de MD360 solo para demos (sección 12).
- **Tiempo:** 10 h/semana. Metas: 8–10 clientes a 6 meses y 20 a 12 meses, con asistente desde el cliente 12–15 (sección 13).
- **Garantía 10 Reseñas** en 30 días (sección 15).
- **Control sin entrenamiento:** botones, trigger links, palabras clave y un formulario de un toque (sección 16).
- Prospección: red propia + Delfos, más Smartlead y Closely para cuentas con estructura y para otros países (sección 17).
- Cobro: Stripe en COP automático + carril manual con recordatorio; probar Mercado Pago (sección 18).
- **Plan de lealtad: aplazado.** Quedó como idea en Blue (workspace Mall Digital 360 → lista 💡Ideas).
- Valor de las reseñas: estimado, traducido a dinero con 4 palancas (sección 9).

**Abiertas**
1. ¿La Garantía 10 Reseñas aplica igual a los 3 pilotos fundadores, o ellos quedan por fuera porque ya tienen descuento?
2. ¿Factura desde la LLC de EE. UU. (Stripe) o desde el RUT colombiano? (Revisar con el contador.)
3. ¿Fecha de la próxima charla de Delfos? Para tener lista la demo de 2 minutos y el diagnóstico de reputación.
4. ¿Ya tiene cuentas activas de Smartlead y Closely (¿AppSumo?) y algún dominio secundario para correo en frío?
5. ¿Ha probado la app LeadConnector con un cliente? ¿Qué no pudo hacer desde ahí?
