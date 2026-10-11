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

**Por definir con Sergio:**
- número de turno visible;
- "hay N personas antes de ti", que en GHL requiere un contador;
- varias sedes en una sub-cuenta.

## Demo en Mall Digital 360
Igual que la demo del club:
- palabra **`TURNO`** al 320 → bienvenida a la lista;
- el "empleado" (Sergio) pulsa **📣 Llamar** → "ya es tu turno";
- **Atendido** → encuesta → reseña.

Workflows "DEMO — TURNO-0x". Se construye después de la fase 1.
