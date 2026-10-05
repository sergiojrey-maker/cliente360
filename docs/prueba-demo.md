# Prueba de la demo con el celular de Sergio (10 minutos)

**Dónde:** sub-cuenta **Mall Digital 360**, línea del club +57 320 405 5485.

**Con qué:** el celular **personal** de Sergio. No sirve el 320 405 5485: ese es el número del "negocio".

**Qué se prueba:** el recorrido del guion (`docs/guion-demo.md`): DEMO → bienvenida → Atendido → encuesta → calificación → MIS SELLOS → BAJA.

---

## 0. Antes de empezar (2 min)
1. **Contacto limpio.** En Contactos, busque su número personal.
   - Si existe y tiene los tags `club-miembro`, `demo-c360`, `resena-solicitada`, `resena-inconforme` o `baja`, quítelos.
   - Ponga en 0 los campos `club_sellos` y `club_sellos_faltan`, y apague el DND.
   - Si no, la prueba le responde "ya eres miembro" o no le escribe.
2. **Usuario Sergio con WhatsApp.** En Settings → My Profile, revise que su usuario tenga el celular personal. Ahí le llega la alerta de inconforme (RES-02).
3. **Publicar los 7 workflows "DEMO —"**, en este orden. Las salidas primero, para que la baja funcione desde el primer mensaje:
   1. DEMO — Baja
   2. DEMO — VIS-01 Visita
   3. DEMO — CLUB-02 Sello
   4. DEMO — RES-02 Alerta de inconforme
   5. DEMO — RES-01 Solicitud de reseña
   6. DEMO — CLUB-04 Mis sellos
   7. DEMO — CLUB-01 Ingreso al club (al final, porque es la puerta de entrada)
4. **Tenga a mano** el formulario **✅ Atendido** de Mall Digital 360 (PIN **3600**).

## 1. Ingreso al club (1 min)
| Usted hace | Debe llegar a su celular (WhatsApp) | Revisar en GHL |
|---|---|---|
| Escribe **DEMO** al 320 405 5485 | **Bienvenida** del Club Barbería El Llano (`c360_bienvenida_club`) y **regalo de bienvenida**: "10 % en tu próximo corte" (`c360_regalo`) | Contacto con tags `club-miembro`, `demo-c360`, `lead-charla` · oportunidad "… — demo club" en **Prospectos Cliente 360 → Contacto** |
| — (segundos después) | **Sello 1 de 10** (`c360_sello`), lo pone VIS-01 | `club_sellos` = 1, `club_sellos_faltan` = 9 |
| Espera **2 minutos** | **Encuesta**: "¿cómo te fue hoy en Barbería El Llano? Responde con un número del 1 al 5 ⭐" (`c360_encuesta`). Llega por la primera visita, que es el ingreso | Tag `resena-solicitada` |

## 2. Visita registrada por el equipo (1 min)
Mientras espera la encuesta, haga esto:

| Usted hace | Debe llegar | Revisar |
|---|---|---|
| Llena **✅ Atendido** con su celular y el PIN 3600 | **Sello 2 de 10** | `club_sellos` = 2 · `rep_visitas_semana` subió en Custom Values |

> **Ajuste solo en la demo:** se quitó de DEMO — VIS-01 la regla "una visita por día", para poder mostrar el sello 2 a los pocos minutos del ingreso. En la maestra y en los clientes la regla sigue.
>
> La encuesta se envía **una sola vez** por cliente (la primera visita). Para ver el caso feliz (responder 5) y el del inconforme (responder 2), haga la prueba dos veces: en la segunda, quite antes el tag `resena-solicitada` (paso 0).

## 3. Cliente inconforme (1 min)
| Usted hace | Debe llegar | Revisar |
|---|---|---|
| Responde **2** | **Disculpa** con el enlace para opinar, igual para todos (`c360_disculpa`) | Tag `resena-inconforme` · `rep_inconformes_semana` +1 |
| — | **A usted, como dueño:** "⚠️ Cliente inconforme…" por WhatsApp interno | Tarea "Llamar a …" creada |

En la demo, el enlace de reseña apunta a `malldigital360.com/club` a propósito: así no se piden reseñas reales de MD360 a quien solo probó la demo.

## 4. Consulta y salida (1 min)
| Usted hace | Debe llegar | Revisar |
|---|---|---|
| Escribe **MIS SELLOS** | "Hola Sergio, llevas 2 sellos. Te faltan 8 para corte gratis…" (`c360_mis_sellos`) | — |
| Escribe **DEMO** otra vez | La misma respuesta de sellos: "ya eres miembro". Sin segunda bienvenida | No se duplica la oportunidad |
| Escribe **BAJA** | "Listo, ya no te enviaremos más mensajes…" (`c360_baja`) | DND activo en todos los canales |

## 5. Si algo no llega (2 min de revisión)
1. **Automation → el workflow → Execution logs.** Ahí se ve en qué paso se detuvo y el error.
2. **Errores típicos:**
   - "Template not approved" → revisar en Settings → WhatsApp → Templates.
   - "Contact is DND" → el paso 0 quedó incompleto.
   - CLUB-01 no se dispara → el mensaje debe ser exactamente `DEMO`, sin saludo.
3. **La alerta interna no llega:** puede que el WhatsApp interno a usuarios también exija plantilla fuera de 24 h. Anótelo; la solución está en `plantillas-whatsapp-demo.md` (`c360_dueno_aviso`).

## 6. Después de la prueba
- **Si todo pasó:** deje publicados los 7 workflows. La demo queda lista para prospectos y charlas.
- Para repetir la demo con su celular, haga otra vez el paso 0.
- **Si algo falló:** despublique solo ese workflow y escriba el paso y el error en Blue. Claude local lo corrige.

**Pendiente que no afecta esta prueba:** `c360_recordar_premio` sigue en revisión de Meta. Solo se usa cuando alguien ya ganó el premio y vuelve antes de canjearlo (rama de CLUB-02). Cuando Meta la apruebe, se cambia.
