# Instalación de un cliente — Cliente 360™ (meta: ≤ 2 h de trabajo de MD360)

**Para quién:** quien instala (Sergio o, más adelante, el asistente). Se sigue de arriba abajo.

**Qué no cuenta en las 2 h:** las esperas de Meta, que aprueba las plantillas y verifica el número.

**Regla:** nada se publica hasta la prueba con un celular real (paso 7).

| Bloque | Tiempo | Quién |
|---|---|---|
| 0. Antes de la cita | 10 min | MD360 + dueño (por WhatsApp) |
| 1. Sub-cuenta y snapshot | 10 min | MD360 |
| 2. Custom values (script) | 15 min | MD360 |
| 3. Usuarios, dueño y equipo | 15 min | MD360 + dueño |
| 4. Línea del club y plantillas | 25 min + espera de Meta | MD360 + dueño (Meta) |
| 5. Google y reputación | 10 min | dueño (acceso) + MD360 |
| 6. Ajustes por cliente en workflows | 15 min | MD360 |
| 7. Prueba con celular y publicación | 20 min | MD360 + dueño |
| 8. QR, letrero y capacitación de 5 min | 10 min | MD360 |
| **Total** | **~2 h** | |

Reputación Rescatada (carga de la base antigua) va aparte, cuando el resto ya funciona (paso 9).

---

## 0. Antes de la cita (10 min)
1. Contrato firmado y primer cobro en Stripe (ver `docs/oferta-cliente360-v1.md`).
2. Enviar al dueño el enlace de la encuesta **"Instalación Cliente 360"** de la sub-cuenta MD360. Toma 2 minutos: ticket promedio, visitas al año, clientes nuevos al mes, visitas para el premio y premio.
3. Pedirle por WhatsApp:
   - nombre del negocio como lo dicen sus clientes y un emoji;
   - dirección, horario y enlace de Google Maps;
   - el nombre con que firma;
   - regalo de cumpleaños (y de bienvenida, si quiere);
   - el **número de la línea del club**: un número dedicado, nunca su número principal;
   - acceso a su Perfil de Empresa de Google (invitar a info@malldigital360.com como administrador).
4. Copiar `herramientas/instalacion-plantilla.json` a `clientes/<negocio>.json` y llenarlo con lo que ya se sabe. La carpeta `clientes/` no se sube al repo.

## 1. Sub-cuenta y snapshot (10 min)
1. Crear la sub-cuenta con el nombre del negocio, la zona horaria **America/Bogota** y el idioma español.
2. Cargar el snapshot **"Cliente 360 v1"** con todo: workflows, formularios, encuestas, custom values, campos, tags, calendario y pipelines.
3. **Ojo:** el snapshot trae los custom values **vacíos**. El paso 2 los llena.
4. Crear un token de **Private Integration** en la sub-cuenta (Settings → Private Integrations) con permisos de custom values, custom fields, contactos y formularios. Guardarlo en `.env` (nunca en el repo):
   ```
   GHL_TOKEN=pit-...
   GHL_LOCATION_ID=<location id de la sub-cuenta nueva>
   ```

## 2. Custom values con el script (15 min)
```
node herramientas/instalar-custom-values.mjs clientes/<negocio>.json --sin-api                      # 1) ¿falta algo?
node herramientas/instalar-custom-values.mjs clientes/<negocio>.json --dueno +57300XXXXXXX         # 2) ensayo
node herramientas/instalar-custom-values.mjs clientes/<negocio>.json --dueno +57300XXXXXXX --aplicar
```

**Qué hace el script:**
- Con `--dueno`, lee las 5 respuestas de la encuesta de instalación del contacto del dueño y llena con ellas los valores que estén vacíos en el JSON. Si el JSON y la encuesta no coinciden, avisa y usa el JSON.
- Busca el formulario **"Ingreso al club"** de la sub-cuenta nueva y pone su enlace en `club_link_registro`. El de la maestra no sirve.
- Deduce `club_nombre_completo`, `negocio_firma` y `club_premio_corto` si vienen vacíos.
- Pone los contadores `rep_*` en 0.
- Revisa:
  - obligatorios vacíos y valores de ejemplo ("REEMPLAZAR", "3xx");
  - números con puntos;
  - el PIN de la demo (3600);
  - la línea del club igual al número del dueño;
  - vocabulario prohibido.
- Muestra el antes → después y solo escribe con `--aplicar`.
- No corre contra la maestra ni contra Mall Digital 360, salvo con `--forzar`.

**Valores que se deciden con el dueño:**
- `negocio_modo`: visita / cita / orden.
- `negocio_unidad_visita`: corte, clase, visita…
- `sis_plan` y los interruptores `sis_modulo_*`:
  - Plan Impulso: `sellos` = si, `celebraccion` = no.
  - Plan 360: todo si.
- `resena_espera_minutos`: 90 por defecto. En gimnasios conviene más, para preguntar después de la clase.
- `sis_pin_equipo`: 4 dígitos propios. **Nunca 3600.**

## 3. Usuarios, dueño y equipo (15 min)
1. **Usuario del dueño** en la sub-cuenta, con su WhatsApp. Las alertas y los reportes le llegan como "notificación interna" y los usuarios no viajan en el snapshot.
2. **Contacto del dueño** con el número exacto de `negocio_whatsapp_dueno` y el tag `dueno`. Lo usan CTRL-01 (palabras REPORTE / PAUSA / ACTIVAR / AYUDA) y RES-03 (contador de reseñas). Si llenó la encuesta, el contacto ya existe: solo hay que ponerle el tag.
3. Instalar la **app LeadConnector** en el celular del dueño, entrar con su usuario y activar las notificaciones.
4. En el celular del equipo (o de recepción), guardar en la pantalla de inicio los formularios **✅ Atendido** y **🎁 Canjear**, y decirles el PIN.
5. Si es Modo Cita: en el calendario "Cita", poner al dueño o a los empleados como miembros del equipo y ajustar el horario. El snapshot trae lunes a sábado de 8:00 a 19:00, citas de 45 min.

## 4. Línea del club y plantillas de WhatsApp (25 min + espera de Meta)
1. Conectar la línea del club por WhatsApp API oficial con **coexistence** (Settings → WhatsApp). El dueño inicia sesión en Meta; MD360 no toca sus credenciales.
2. Iniciar la verificación del negocio en Meta si no la tiene. Sin verificar, los límites de envío son bajos.
3. Enviar a aprobación las plantillas de `docs/plantillas-whatsapp-demo.md`: las 10 de la demo más las de la tanda de la maestra (pedir cumpleaños, cumpleaños, reactivación ×4, Rescatada, oferta de fecha, recordar premio).
   - Mismos textos, ejemplos del negocio real.
   - Si el negocio usa otra palabra en vez de "sellos" (puntos, cortes), las plantillas se aprueban con su palabra.
4. Mientras Meta aprueba (de minutos a horas), seguir con los pasos 5 y 6.

## 5. Google y reputación (10 min)
1. Conectar el Perfil de Empresa en **Reputation** con el acceso que dio el dueño.
2. Copiar el enlace corto de reseñas (`g.page/r/…/review`) a `resena_link_google` (volver a correr el script o editarlo a mano).
3. Anotar en el JSON la calificación y el número de reseñas de hoy: es la línea base del antes/después y de la Garantía 10 Reseñas.
4. Si al conectar el perfil RES-03 cuenta reseñas viejas, poner `rep_resenas_total` en el número real.

## 6. Ajustes por cliente dentro de los workflows (15 min)
1. **Notificaciones internas al dueño.** Abrir cada acción que diga "INSTALACIÓN: elegir usuario dueño" y cambiarla a "Particular User" = el dueño. Están en RES-02, CLUB-03, REP-01, REP-02 y RES-03.
2. **Cambiar "SMS provisional" por WhatsApp** con la plantilla correspondiente, a medida que Meta apruebe. Se buscan por el nombre de la acción.
   - **En cada acción WhatsApp, apagar "Enable branches"** (viene encendido). Si queda encendido, el flujo se parte en Delivered/Undelivered y los pasos siguientes solo corren si el mensaje se entregó. Ejemplo: en GEN-01 la baja (DND) no se aplicaría si el WhatsApp de confirmación falla.
   - Método probado en la demo: agregar la acción WhatsApp debajo del SMS, apagar "Enable branches", guardar y luego borrar el SMS. Si había un "Esperar respuesta" apuntando al SMS (RES-01, RR-01), hay que volver a elegir en "Reply to" la acción nueva.
3. Revisar que CLUB-01 se dispare con la palabra exacta de `club_palabra_ingreso`. El disparador es "Exactly matches", con tres variantes: mayúsculas, inicial mayúscula y minúsculas. Si el negocio cambió la palabra, se cambia aquí también.
4. Interruptores: si un módulo quedó en "no", no hace falta tocar nada. Los If/Else leen `sis_modulo_*`.

## 7. Prueba con celular y publicación (20 min)
**Primero, con el celular de MD360 y después con el del dueño:**
- [ ] Escribir la palabra del club a la línea → bienvenida, sello 1 y, a los 3 min, la petición de cumpleaños.
- [ ] En el contacto: `club_sellos` = 1 y `club_sellos_faltan` = meta − 1. Si quedan en 0, falta "Save result to field" en alguna Math.
- [ ] Formulario ✅ Atendido con PIN → sello 2. A los `resena_espera_minutos`, la encuesta 1–5. Para la prueba se baja temporalmente a 2.
- [ ] Responder 5 → enlace de Google.
- [ ] Responder 2 → disculpa **con** el enlace (sin filtrado de reseñas) + alerta al dueño.
- [ ] MIS SELLOS → conteo.
- [ ] El dueño escribe REPORTE → números.
- [ ] BAJA → confirmación y DND.

**Si todo pasó:**
- Devolver `resena_espera_minutos` a su valor.
- Publicar los workflows en este orden: GEN-01, CLUB-01, CLUB-01b, VIS-01, CLUB-02, CLUB-03, CLUB-04, RES-01, RES-02, RES-03, CTRL-01, REP-01, REP-02, GEN-02, REA-01. Después CA-01 a CA-04 si el plan los incluye.
- **RR-01 no se publica todavía** (va en el paso 9).
- Borrar los contactos de prueba o marcarlos `prueba`.

## 8. QR, letrero y capacitación (10 min)
1. QR que abre `wa.me/<línea del club sin +>?text=<club_palabra_ingreso>`. El texto debe ser **exactamente** la palabra, sin saludo.
   - Se genera igual que el de la demo (`web/qr-demo.*`) y se pone en un letrero como `web/letrero-demo.html`, con el nombre del club y el premio.
2. Capacitación de 5 minutos:
   - **Al equipo:** "cada cliente que atiendan, botón Atendido con su celular y el PIN; si viene por el premio, botón Canjear".
   - **Al dueño:** "usted no entra al computador; le llega todo al WhatsApp; escriba AYUDA si se le olvida algo".
3. Comentario en Blue con lo instalado, firmado.

## 9. Reputación Rescatada (aparte, cuando lo anterior funciona)
1. Pedir la base: exportación de WhatsApp, agenda, Excel o software del negocio.
2. Limpiar:
   - formato +57;
   - sin duplicados;
   - sin números del equipo.
3. Importar con el tag `rescatada-base`. Los que no tienen WhatsApp llevan el tag `sin-whatsapp`.
4. Habeas data: el primer mensaje es la plantilla `c360_rr_encuesta`, de bajo riesgo y con BAJA.
5. Aplicar el tag `rr-enviar` con la acción masiva en **Drip Mode** (ej.: 50 cada 2 horas, solo en horario del negocio). Nunca toda la base de una vez.
6. Publicar RR-01 y vigilar la calidad del número en Meta los primeros 2 días.

---

## Errores conocidos que esta lista ya evita
- Custom values vacíos después del snapshot → paso 2.
- `club_link_registro` apuntando al formulario de la maestra → el script lo detecta y lo corrige.
- Alertas que no llegan porque la notificación interna no tiene usuario → paso 6.1.
- QR con un saludo antes de la palabra → CLUB-01 no se dispara → paso 8.1.
- Contador de reseñas inflado con reseñas viejas → paso 5.4.
- Math operation que calcula pero no escribe en el contacto → en cada acción Math, "SAVE RESULT TO FIELD" debe tener el campo destino. Revisarlo en la maestra antes de cada snapshot y comprobarlo en la prueba del paso 7 (sello 1 → faltan meta − 1).
- `PUT /calendars/{id}` de la API borra los campos que no se envían. Si se ajusta el calendario por API, se manda el objeto completo.
