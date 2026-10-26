# Auditoría de la cuenta de GoHighLevel de Serv Florida (solo lectura)

*Pedido por Sergio el 26 oct 2026. La ejecuta **Claudio local** con el Chrome de Sergio y la revisa **Claudio nube**. El cliente ya dio su consentimiento y agregó a Sergio como personal; Sergio le pide el rol **Admin** mientras dura la auditoría. Informe en **español**.*

## Contexto (reunión del 26 oct 2026 con Jairo Rubiano, Laura y Paola)
- **Negocio:** Serv Florida. Dos líneas: **impuestos y seguros**, y **notaría y envíos**. Cuenta de GoHighLevel propia (no es de la marca blanca de MD360).
- **Cómo trabajan hoy:** usan el CRM para la base de datos y los calendarios, y casi nada más ("menos del 1 %"). Atienden a los clientes uno a uno y a mano. Parte del proceso sigue en Excel o en papel.
- **Dolores:**
  - dos números de WhatsApp (uno por línea de negocio) **no están conectados** al CRM, así que no hay automatización ni bandeja compartida;
  - mensajes de Instagram, Facebook y Google sin respuesta fuera del horario de oficina;
  - las citas se atrasan porque los clientes llegan sin los documentos;
  - pidieron una encuesta poscita, tuvo poca respuesta y Laura la apagó.
- **Reputación:** unas **400 reseñas en Google**, todas pedidas en persona. Quieren pedirlas automáticamente después de la cita, sin volver a pedírsela a quien ya dejó reseña, y responder cada reseña.
- **Urgencia:** la **temporada de seguros médicos empieza la próxima semana** (inscripción abierta, desde el 1 de noviembre). Quieren pipelines y calendarios listos antes.
- **Objetivo de la auditoría:** diagnóstico de punto de partida para proponer un plan de acción, priorizando lo que debe estar listo para la temporada de seguros.

## Preguntas que la auditoría debe responder
1. **WhatsApp:** ¿hay algo conectado o a medio conectar (WhatsApp de GHL, LC Phone, integración de terceros)? ¿Los dos números son de la app WhatsApp Business en celulares? ¿La cuenta admite dos números de WhatsApp en la misma sub-cuenta, o habría que separarlos? (Verificar en la interfaz; no asumir.) ¿Conviene coexistence para seguir usando la app en el celular?
2. **SMS:** estado del **A2P 10DLC**. Sin aprobación no se puede usar SMS para recordatorios ni para pedir reseñas.
3. **Agenda:** ¿cuántos calendarios hay, por servicio o por persona? ¿Tienen recordatorios? ¿Se puede pedir la lista de documentos antes de la cita (formulario con carga de archivos)?
4. **Seguros:** ¿hay pipeline de seguros? ¿Qué etapas faltan para la temporada?
5. **Reputación:** ¿Google Business Profile está conectado? ¿Se puede marcar a quien ya dejó reseña, con tag o campo, para no volver a pedírsela? ¿Está disponible la respuesta automática a reseñas (con IA)?
6. **IA:** ¿Conversation AI o Voice AI están disponibles en su plan? ¿Están apagados?
7. **Redes:** ¿Facebook, Instagram y Google Business Profile están conectados a Conversations?

## Riesgos que hay que señalar en el informe
- **Documentos sensibles:** los papeles de impuestos y seguros traen datos como el número de seguro social. Antes de recomendar que los suban por un formulario, revisar dónde quedan guardados y quién los ve. Proponer una forma segura (y lo mínimo necesario).
- **Consentimiento para mensajes en EE. UU.:** el SMS y el WhatsApp necesitan consentimiento del cliente (TCPA y 10DLC). Revisar si los formularios lo piden.

## Reglas
1. **Solo lectura.** No guardar, publicar, activar, desactivar, borrar ni enviar nada. No pulsar "Test workflow", "Send", "Publish" ni "Save". Si una pantalla pide guardar al salir, salir **sin guardar**.
2. **Cero datos personales en el informe y en el repo:** ni nombres, ni teléfonos, ni correos, ni conversaciones de los clientes del negocio. Solo conteos, nombres de workflows, páginas y configuraciones.
3. Si algo no se puede ver por permisos, se anota en el informe como **"no revisado (permisos)"**. No se pide más acceso por cuenta propia.
4. Capturas de pantalla solo de configuración, nunca de contactos ni de conversaciones.
5. No se cambia de sub-cuenta. Si el usuario de Sergio ve otras cuentas, solo se trabaja en la del cliente.

## Recorrido (en este orden)

### 1. Cuenta y negocio
- Settings → Business Profile: nombre, dirección, zona horaria, idioma, horario. ¿Está completo y correcto?
- Plan o tipo de cuenta, si se ve (sin entrar a facturación).
- My Staff: cuántos usuarios hay y con qué roles. ¿Hay usuarios inactivos o con más permisos de los necesarios?

### 2. Canales
- **Teléfono:** números (Phone Numbers), a qué llegan las llamadas, si hay buzón de voz y si existe **"missed call text back"** (respuesta por SMS a llamada perdida).
- **SMS en EE. UU.:** estado del registro **A2P 10DLC** (Trust Center / Phone System). Sin A2P aprobado, los SMS a números de EE. UU. se bloquean o filtran. Es lo primero que hay que revisar.
- **Correo:** dominio de envío dedicado (LC Email / Mailgun) y si están SPF, DKIM y DMARC. Si envía desde el dominio compartido, anotarlo.
- **WhatsApp:** si está conectado, número, estado y plantillas.
- **Facebook / Instagram / Google Business Profile:** conectados o no, y si los mensajes entran a Conversations.
- **Chat widget:** si existe y en qué sitio está instalado.

### 3. Contactos y datos
- Total de contactos, cuántos con teléfono, cuántos con correo y cuántos con DND.
- Tags: cuántos hay, si siguen una lógica o están desordenados, y si hay duplicados por mayúsculas o escritura.
- Custom fields y custom values: cuántos hay, cuáles se usan y cuáles están vacíos.
- Smart lists guardadas.
- Duplicados: si la regla de duplicados está activa (Settings → Business Profile → Allow duplicate contact).

### 4. Oportunidades
- Pipelines y etapas. ¿Reflejan el proceso real de venta?
- Oportunidades abiertas por etapa y cuántas llevan más de 14 días sin movimiento.
- Valor monetario: ¿se registra o está en 0?

### 5. Agenda
- Calendarios: tipo, quién atiende, horario, recordatorios y confirmaciones.
- Citas de los últimos 30 días y cuántos no-show.
- ¿Hay recordatorios por SMS, correo o WhatsApp? ¿Hay seguimiento al no-show?

### 6. Automatización
- Lista de workflows: nombre, estado (publicado / borrador) y fecha de última edición.
- Para cada workflow **publicado**: disparador, qué hace en 1–2 líneas y si tuvo ejecuciones en los últimos 30 días (pestaña Execution Logs o Enrollment History).
- Señales de problema: workflows publicados sin disparador, con acciones en error, que envían a un pipeline o a un tag que ya no existe, o duplicados que hacen lo mismo.
- Campañas, triggers antiguos y Bulk Actions recientes, si existen.

### 7. Captación
- Sitios, funnels y páginas: cuáles están publicados, dominio y si tienen SSL.
- Formularios y encuestas: dónde están, cuántos envíos han tenido en 30 días y qué pasa después de cada envío (¿hay workflow?).
- Píxeles y analítica: Meta Pixel, Google Analytics o Google Tag Manager en los sitios.
- Rastreo de conversiones: ¿llegan los envíos de formularios como conversiones?

### 8. Reputación
- Reputation / Reviews: ¿Google conectado? Solicitudes de reseña enviadas en 30 días, reseñas recibidas y calificación promedio.
- ¿Hay workflow que pida la reseña después del servicio? ¿Respuesta a reseñas (manual o con IA)?

### 9. Conversaciones (sin leer contenido)
- Mensajes sin responder hace más de 24 horas (solo el número).
- Tiempo típico de respuesta, si el reporte lo muestra.
- ¿Hay Conversation AI o un bot activo? ¿Qué responde?

### 10. Pagos y otros módulos
- Payments: Stripe u otra pasarela conectada, productos, facturas o suscripciones (solo si están configurados; sin montos de clientes).
- Membresías/cursos, comunidades, social planner, email marketing: en uso o no.
- Integraciones: Zapier, Google, QuickBooks, etc.

## Informe (en español)
Archivo: `docs/auditorias/<negocio>-<fecha>.md`. Estructura:
1. **Resumen en 5 líneas:** cómo está la cuenta y las 3 oportunidades más grandes.
2. **Qué tiene y funciona.**
3. **Qué tiene pero no usa** (pagado y apagado).
4. **Qué está roto o es un riesgo**, por ejemplo A2P sin aprobar, correo sin dominio propio, workflows con error o llamadas perdidas sin respuesta.
5. **Qué le falta** para responder rápido, agendar, recordar, pedir reseñas y recuperar clientes inactivos.
   - Respuesta a cada una de las 7 preguntas de arriba.
   - Sección aparte: **"Listo para la temporada de seguros"**, con lo mínimo que debe quedar antes del 1 de noviembre.
6. **Plan de acción priorizado:** tabla con prioridad (alta / media / baja), qué hacer, impacto esperado y esfuerzo (horas).
7. **No revisado (permisos)**, si aplica.

Al terminar: commit y push a `claude/trusting-tesla-no7f7o` y avisar a Sergio. Claudio nube revisa el informe antes de que Sergio lo use con el cliente.
