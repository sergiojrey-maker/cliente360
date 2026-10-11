# Turnotec™: turno digital (variante de Cliente 360 para negocios con sala de espera)

*Borrador del 11 oct 2026. "Turnotec", con C: de "tecnología".*

## Qué es
Para negocios **con sala de espera**:
1. El cliente llega, escanea un QR y queda en la **lista de espera digital**.
2. El sistema le avisa cuando es su turno.
3. Lo atienden.
4. Se le pide la **reseña**.

Además: referidos, promociones (CelebrAcción) y lealtad (club).
- **Mismo objetivo que Cliente 360**, con otra puerta de entrada.
- Para negocios **sin** sala de espera → Cliente 360.

En el snapshot evergreen es el **modo de operación "Turno"**, al lado de Visita / Cita / Orden.

## Lo que existe hoy (Goal Bridge Group, Winter Garden, `ELwKC7jNN3SjL8FPAe8j`, leído por API)
- **Dos sedes**, Winter Garden y Kissimmee, cada una con su pipeline:

| Pipeline | Etapas |
|---|---|
| Winter Garden | Waiting List → In-office assistance → Processing remotely → Appointment Scheduled → Escalated to Director → No Show |
| Kissimmee | Lista de Espera → Atendiendo en Oficina → Tramitando a distancia → WhatsApp → 1099 → Escalación a Director |

- **Workflows publicados**, por sede y en español/inglés:
  - "1. Nuevo Cliente en Lista de Espera — Comunicación a Cliente";
  - "2. Cliente, YA es su turno — SMS y Email a Cliente — Notificación a Empleado";
  - "Send Google Review Request via SMS and Email".
- Funciona por **SMS y correo** (EE. UU.).
- La otra sub-cuenta "Goal Bridge Group" (`m4Xo1m3EL4QrbAzQQAiC`, Kissimmee) no tiene workflows: es solo para responder reseñas.

**Para Claude local (fase 2, solo lectura, no tocar nada en Goal Bridge, es un cliente en vivo):**
- abrir en Chrome los workflows de Winter Garden 1, 2 y Review;
- documentar aquí el disparador de cada uno (¿formulario?, ¿etapa del pipeline?), los mensajes, las esperas y qué hace el empleado para "llamar" el turno;
- documentar también el formulario o QR de llegada.

## Diseño para el snapshot (Colombia, WhatsApp)
Se reutiliza todo lo de Cliente 360 (encuesta, reseña, alerta al dueño, club, CelebrAcción, reactivación). Solo cambia la entrada:
1. **Llegada:**
   - QR en recepción → WhatsApp con la palabra `TURNO` o formulario de 3 campos (nombre, celular, motivo + autorización de datos);
   - entra al pipeline **"Turnos"** en la etapa **En espera**;
   - WhatsApp: "Hola {{nombre}}, ya estás en la lista de {{negocio}}. Te escribimos cuando sea tu turno".
2. **Llamar el turno:** el empleado, desde la app LeadConnector o un botón/formulario "📣 Llamar", pasa al cliente a **Llamado** → WhatsApp "Ya es tu turno, pasa a {{turno_punto_atencion}}".
3. **Atendido:** etapa **Atendido** = la misma señal de visita (VIS-01) de Cliente 360 → sello del club, encuesta, reseña, alerta al dueño si quedó inconforme.
4. **No se presentó:** si a los {{turno_minutos_noshow}} no pasa a Atendido → etapa **No se presentó**, con mensaje opcional.

**Custom values nuevos (`turno_`):** `turno_palabra`, `turno_punto_atencion`, `turno_minutos_noshow`, `turno_mensaje_bienvenida`, `turno_sedes`.

## Versiones
- **v1 (hoy, Goal Bridge):** lista de espera, aviso "ya es su turno", reseña. **No muestra número de turno** ni cuántas personas hay antes.
- **v2 (la que construimos, decidido por Sergio el 11 oct):** **número de turno** + **"hay N personas antes de usted"**.
- **Varias sedes en una sub-cuenta:** pendiente. Se analiza cuando llegue otro caso como el de Goal Bridge (dos sedes). Por ahora v2 asume **una sede por sub-cuenta**.

### Cómo funciona el número de turno en v2
GHL no tiene un contador global nativo. Se usan **dos custom values del negocio**, que se actualizan desde el workflow con la API de GHL (acción *Custom Code* o *Webhook* con el token de Private Integration de la sub-cuenta):
- `turno_ultimo_entregado`: el último número que se dio.
- `turno_ultimo_llamado`: el último número que se llamó.

1. **Llegada:**
   - `turno_ultimo_entregado` + 1 → se guarda en el campo del contacto **`turno_numero`**;
   - **personas antes** = `turno_numero` − `turno_ultimo_llamado` − 1 (mínimo 0) → campo `turno_personas_antes`;
   - WhatsApp: "Hola {{nombre}}, su turno en {{negocio}} es el **#{{turno_numero}}**. Hay **{{turno_personas_antes}}** personas antes de usted. Le escribimos cuando sea su turno."
2. **Llamar (📣):** `turno_ultimo_llamado` = `turno_numero` del cliente llamado → WhatsApp "Turno #{{turno_numero}}: ya es su turno, pase a {{turno_punto_atencion}}".
3. **Reinicio diario:** un workflow programado a la hora de apertura (`turno_hora_apertura`) pone los dos contadores en 0.
4. **Limitaciones aceptadas:**
   - "Personas antes" es una **estimación**: no descuenta a quien no se presentó.
   - Si dos personas llegan en el mismo segundo podrían recibir el mismo número; en un negocio pequeño es poco probable.
   - Mejora v2.1: aviso "faltan 2 turnos" a quien está por pasar.

**Custom values nuevos:** `turno_ultimo_entregado`, `turno_ultimo_llamado`, `turno_hora_apertura`.
**Campos de contacto nuevos:** `turno_numero`, `turno_personas_antes`, `turno_fecha`.

**Antes de construir, probar:**
- que la acción Custom Code o Webhook de la sub-cuenta pueda leer y escribir custom values con el token;
- si no se puede, alternativa: un contacto "Sistema — Turnos" que guarde los contadores en sus campos, actualizado con la API.

## Demo en Mall Digital 360
Igual que la demo del club:
- palabra **`TURNO`** al 320 → bienvenida a la lista;
- el "empleado" (Sergio) pulsa **📣 Llamar** → "ya es tu turno";
- **Atendido** → encuesta → reseña.

Workflows "DEMO — TURNO-0x". Se construye después de la fase 1.

## Regla de operación (Sergio, 11 oct): todo desde el celular
Los empleados **no tienen que entrar a un computador**. Pueden, si quieren, pero todo se debe poder hacer desde el celular: WhatsApp, correo o la app LeadConnector.

| Acción del empleado | Cómo, desde el celular |
|---|---|
| Ver quién está esperando | App LeadConnector → Oportunidades → pipeline "Turnos", etapa **En espera**, ordenada por número |
| **📣 Llamar** al siguiente | En la app, mover la tarjeta a **Llamado**. Dispara el WhatsApp "ya es su turno" y actualiza `turno_ultimo_llamado` |
| Marcar atendido | Mover a **Atendido** (dispara reseña y sello) |
| Enterarse de que llegó alguien | Push de la app: "Nuevo turno #23: Ana" |

- Se descartan el formulario con PIN para llamar y la palabra por WhatsApp desde el número del empleado: GHL no puede buscar un contacto por número de turno dentro de un workflow.
- Mover la tarjeta en la app es lo más rápido y no requiere entrenamiento.
- Probar en la demo que mover la tarjeta desde la app del celular dispara el workflow igual que desde el computador.
