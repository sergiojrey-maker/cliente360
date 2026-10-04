# Snapshot Cliente 360™ — Especificación (v1, "evergreen")

*4 oct 2026. Es el plano para construir el snapshot en la sub-cuenta plantilla. Objetivo: **un solo snapshot sirve para cualquier negocio**. Todo lo que cambia de un negocio a otro (nombres, palabras, premios, plazos, enlaces) vive en **custom values**. Ningún workflow, mensaje o formulario lleva texto fijo de un negocio.*

---

## 1. Reglas de diseño

1. **Cero texto fijo.** Todo mensaje se escribe con merge fields: `{{contact.first_name}}`, `{{custom_values.xxx}}`. Si algo podría cambiar entre dos negocios, es un custom value.
2. **El vocabulario también es configurable.** "Club", "sello", "visita" y "premio" son custom values. Así:
   - un spa puede decir "Círculo VIP" y "estrella";
   - un gimnasio, "Comunidad" y "asistencia";
   - una barbería, "Club" y "corte".
3. **Los números de configuración se vuelven campos del contacto** al entrar al club, porque las condiciones If/Else de GHL comparan contra valores fijos.
   - **Truco central:** en vez de contar sellos hacia arriba y comparar con la meta (que cambia por negocio), cada contacto recibe `club_sellos_faltan = {{custom_values.club_meta_visitas}}` al ingresar, y cada visita **resta 1**.
   - Las condiciones quedan fijas para todos los negocios: `faltan = 2` → aviso "te faltan 2"; `faltan = 0` → premio.
4. **Prefijos para encontrar todo rápido:** custom values y campos con prefijo por bloque (`negocio_`, `club_`, `resena_`, `rea_`, `ca_`, `rep_`, `sis_`). Workflows con código (`CLUB-02 …`). Tags en minúscula con guion.
5. **Nada se borra para "apagar" algo:** cada módulo tiene un interruptor (custom value `sis_modulo_xxx` = `si`/`no`) que el workflow revisa al inicio. Así el Plan Impulso y el Plan 360 usan el **mismo snapshot**.
6. **Sin vocabulario prohibido** en nombres de campos, tags, workflows ni mensajes (ver `CLAUDE.md`).

## 2. Custom values (se llenan en la instalación con la encuesta de 3 preguntas + datos del negocio)

### Negocio
| Custom value | Ejemplo | Uso |
|---|---|---|
| `negocio_nombre` | Barbería El Llano | En todos los mensajes |
| `negocio_nombre_corto` | El Llano | Mensajes cortos |
| `negocio_emoji` | 💈 | Toque visual en los mensajes |
| `negocio_saludo` | ¡Hola | Permite "Hola", "Buenas", "Qué más" |
| `negocio_tratamiento` | tú | Referencia del tono. Hay dos juegos de plantillas: tú / usted |
| `negocio_direccion` | Cra 33 # 15-20, Villavicencio | Mensajes de cómo llegar |
| `negocio_link_mapa` | https://maps.google… | Mensajes de cómo llegar |
| `negocio_horario` | Lun–Sáb 9 a. m.–8 p. m. | Respuestas automáticas |
| `negocio_whatsapp_club` | +57 3xx… | Línea del club |
| `negocio_dueno_nombre` | Andrés | Firma y alertas |
| `negocio_whatsapp_dueno` | +57 3xx… | Destino de alertas y reportes al dueño |
| `negocio_firma` | — Andrés y el equipo de El Llano | Cierre de mensajes |
| `negocio_unidad_visita` | corte | "Tu 4.º corte", "tu próxima clase" |
| `negocio_ticket_promedio` | 35000 | Reporte en pesos |
| `negocio_visitas_anio` | 12 | Reporte en pesos (valor estimado) |
| `negocio_clientes_nuevos_mes` | 40 | Línea base del reporte |
| `negocio_modo` | cita | `visita` / `cita` / `orden` |
| `negocio_moneda` | COP | Reporte (sirve también para USD) |

### Club
| Custom value | Ejemplo |
|---|---|
| `club_nombre` | Club |
| `club_nombre_completo` | Club El Llano |
| `club_sello_nombre` / `club_sello_plural` | sello / sellos |
| `club_meta_visitas` | 10 |
| `club_premio` | un corte gratis |
| `club_premio_corto` | corte gratis |
| `club_regalo_bienvenida` | 10 % en tu próximo corte *(opcional; vacío = sin regalo)* |
| `club_regalo_cumpleanos` | un lavado + mascarilla gratis |
| `club_link_terminos` | https://… |
| `club_palabra_ingreso` | CLUB *(lo que el QR escribe solo)* |

### Reseñas
| Custom value | Ejemplo |
|---|---|
| `resena_link_google` | https://g.page/r/…/review |
| `resena_espera_minutos` | 90 *(tiempo después de la visita; ver pruebas)* |
| `resena_meta_garantia` | 10 |

### Reactivación
| Custom value | Ejemplo |
|---|---|
| `rea_dias_inactividad` | 35 |
| `rea_oferta_regreso` | *(vacío = solo recordar los sellos)* |

### CelebrAcción (oferta vigente; se llena solo cuando el dueño responde 1/2/3)
`ca_fecha_nombre`, `ca_oferta_titulo`, `ca_oferta_detalle`, `ca_oferta_codigo`, `ca_oferta_vigencia`, más las 3 opciones precargadas por fecha: `ca_opcion_1`, `ca_opcion_2`, `ca_opcion_3`.

### Sistema
| Custom value | Valores |
|---|---|
| `sis_plan` | impulso / 360 |
| `sis_modulo_rescatada` | si / no |
| `sis_modulo_sellos` | si / no |
| `sis_modulo_celebraccion` | si / no |
| `sis_pin_equipo` | 4 dígitos |
| `sis_soporte_whatsapp` | +57 320 405 5485 (MD360) |
| `sis_estado` | activo / pausa *(lo cambia la palabra `PAUSA`/`ACTIVAR`)* |

## 3. Campos del contacto

**Cliente del negocio**
- **Visitas y club:**
  - `fuente_registro` (qr, cita, orden, base, formulario)
  - `fecha_ultima_visita` (fecha)
  - `visitas_total` (número)
  - `club_fecha_ingreso` (fecha)
  - `club_sellos` (número, para mostrar)
  - `club_sellos_faltan` (número, para decidir)
  - `club_premios_canjeados` (número)
  - `club_codigo_premio` (texto)
- **Reseñas:**
  - `calificacion_encuesta` (número 1–5)
  - `fecha_solicitud_resena` (fecha)
  - `resena_estado` (pendiente, solicitada, recordada, cerrada)
- **Reactivación:** `fecha_reactivacion` (fecha = última visita + `rea_dias_inactividad`)
- **Permisos:** `autorizacion_datos` (sí/no + fecha)
- **Cumpleaños:** se usa el campo estándar `date_of_birth`.

**Encuesta de instalación** (en el contacto del dueño): `inst_ticket`, `inst_visitas_anio`, `inst_nuevos_mes`, `inst_meta`, `inst_premio`. Claude los copia a los custom values por API.

**Dueño** (un contacto con tag `dueno`): los contadores del reporte
- `rep_resenas_total`, `rep_resenas_semana`
- `rep_calificacion_actual`, `rep_calificacion_inicial`
- `rep_miembros_club`, `rep_visitas_semana`
- `rep_reactivados_mes`, `rep_redenciones_mes`
- `rep_ventas_medidas_mes`, `rep_valor_estimado_mes`

## 4. Tags
- **Roles:** `dueno`, `empleado`
- **Club:** `club-miembro`, `club-premio-pendiente`, `club-premio-canjeado`
- **Reseñas:** `resena-solicitada`, `resena-inconforme`, `resena-inconforme-atendido`
- **Reputación Rescatada:** `rr-base-importada`, `rr-lote-1` … `rr-lote-n`, `rr-encuesta-enviada`
- **Reactivación:** `rea-enviada`, `rea-volvio`
- **CelebrAcción:** `ca-enviada-<fecha>`, `ca-redimio`
- **Contacto:** `baja` (no contactar nunca más), `sin-whatsapp` (usar correo)

## 5. Formularios, encuesta y calendario
| Nombre | Campos | Para quién |
|---|---|---|
| ✅ Atendido | Celular, nombre (opcional), PIN | Empleados (ícono en el celular) |
| 🎁 Canjear | Celular, PIN | Empleados |
| Ingreso al club (respaldo del QR) | Nombre, celular, cumpleaños, autorización | Clientes sin WhatsApp a mano |
| Encuesta de satisfacción | 1–5 + comentario | Clientes (Rescatada e Impulso) |
| Encuesta de instalación | Ticket, visitas/año, clientes nuevos/mes, regla y premio del club | Dueño, una vez |

Todos los textos de los formularios usan custom values (`{{custom_values.club_nombre_completo}}`, etc.).

## 6. Workflows (orden de construcción)

| Código | Disparador | Qué hace |
|---|---|---|
| **CLUB-01 Ingreso** | Mensaje entrante con `{{club_palabra_ingreso}}` / formulario de ingreso | Crea/actualiza contacto, autorización, tag `club-miembro`. Copia `club_meta_visitas` a `club_sellos_faltan`. Bienvenida (+ regalo si existe). Pide cumpleaños |
| **VIS-01 Visita** | Formulario ✅ Atendido / cita "asistió" / etapa "Entregado" / QR de caja | Revisa PIN. Si ya hubo visita hoy, termina. Actualiza `fecha_ultima_visita`, `visitas_total` +1 y `fecha_reactivacion`. Llama CLUB-02 (si `sis_modulo_sellos` = si) y RES-01 (si es la primera visita o pasaron ≥ 6 meses) |
| **CLUB-02 Sello** | Llamado por VIS-01 | `club_sellos` +1 y `club_sellos_faltan` −1. Si faltan = 2: "¡Ya casi!". Si faltan = 0: premio (código, tag `club-premio-pendiente`). Si no: "{{club_sello_nombre}} X de {{club_meta_visitas}} ✅" |
| **CLUB-03 Canje** | Formulario 🎁 Canjear | Revisa PIN y premio pendiente. Reinicia `club_sellos_faltan` y `club_sellos`, suma +1 a `club_premios_canjeados`, suma +1 a la redención del dueño |
| **CLUB-04 Mis sellos** | Mensaje entrante `MIS SELLOS` / `MIS {{club_sello_plural}}` | Responde con el conteo y cuánto falta |
| **RES-01 Solicitud de reseña** | Llamado por VIS-01 | Espera `resena_espera_minutos` → encuesta 1–5. Con 4–5: gracias + enlace. Con 1–3: alerta al dueño (RES-02) + disculpa + enlace igual. **Nunca se niega el enlace.** Sin respuesta: 1 recordatorio a los 2–3 días |
| **RES-02 Alerta de inconforme** | Calificación 1–3 | WhatsApp al dueño con nombre, número y comentario + botones "Ya lo llamé ✅" / "Que lo llame MD360" |
| **RES-03 Reseña recibida** | Disparador de reseña nueva *(verificar)* | Suma a los contadores del dueño. Mensaje "Reseña #N, calificación X" con impacto en pesos |
| **REA-01 Reactivación** | Recordatorio de fecha sobre `fecha_reactivacion` | Si no volvió: mensaje con sellos guardados (+ oferta de regreso si existe). Tag `rea-enviada`. Si vuelve en 30 días: `rea-volvio` + suma a ventas medidas |
| **RR-01 Reputación Rescatada** | Tag `rr-lote-n` (se aplica por lotes con Drip Mode) | Plantilla de encuesta → misma lógica que RES-01. Correo para los que tienen tag `sin-whatsapp` |
| **CA-01 Consulta al dueño** | Fecha programada (10 días antes de cada fecha) | "Se acerca {{ca_fecha_nombre}}. ¿Cuál activamos? 1/2/3/4" |
| **CA-02 Activación de fecha** | Respuesta 1/2/3 del dueño | Llena `ca_oferta_*` con la opción elegida. Envío escalonado a `club-miembro` sin `baja` |
| **CA-03 Cumpleaños** | Recordatorio de cumpleaños (7 días antes) | Regalo `club_regalo_cumpleanos` |
| **CA-04 Redención** | Formulario 🎁 con código de oferta / palabra | Tag `ca-redimio` + suma a ventas medidas |
| **REP-01 Reporte del lunes** | Programado, lunes 8 a. m. | Lee contadores → WhatsApp + correo con 3 botones (trigger links). Reinicia contadores semanales |
| **CTRL-01 Palabras del dueño** | Mensaje entrante del contacto `dueno` | `REPORTE`, `PAUSA`, `ACTIVAR`, `AYUDA` |
| **GEN-01 Baja** | `BAJA` / `NO` / clic en "no me interesa" | Tag `baja` + DND en todos los canales |
| **GEN-02 Monitor** | Diario | Si no salió ningún mensaje en 3 días: aviso a Sergio |

**Regla de pausa:** todo workflow que envía mensajes revisa al inicio que `sis_estado` = `activo`.

## 7. Plantillas de WhatsApp (escritas con variables, para aprobación de Meta)
Meta solo acepta variables numeradas (`{{1}}`, `{{2}}`…). En GHL se mapean a los custom values. Un solo texto aprobado sirve para todos los negocios.

Ejemplo de **bienvenida**:
> {{1}} {{2}} {{3}}, bienvenido al {{4}}. Ya tienes tu primer {{5}} (1 de {{6}}). Al completar los {{6}} te espera {{7}}. Guarda este número: aquí te llegan tus beneficios. Si no quieres recibir mensajes, responde BAJA.

Mapeo de variables:
- `1` = `negocio_saludo`
- `2` = `contact.first_name`
- `3` = `negocio_emoji`
- `4` = `club_nombre_completo`
- `5` = `club_sello_nombre`
- `6` = `club_meta_visitas`
- `7` = `club_premio`

Juego completo (bienvenida, encuesta, recordatorio, reseña, te faltan 2, premio, reactivación, cumpleaños, oferta de fecha, reporte, alerta) en versiones **tú** y **usted**: se redacta en la Fase 1D.

## 8. Pruebas que deciden detalles del diseño (Fase 1E)
| Prueba | Si funciona | Si no funciona |
|---|---|---|
| Update Contact Field con `{{custom_values.club_meta_visitas}}` en un campo numérico | Diseño del conteo regresivo como está | Una variante del workflow por meta (6/8/10/12), elegida por tag |
| Espera con valor de custom value (`resena_espera_minutos`) | Configurable | Espera fija de 90 min |
| Suma de días a una fecha con custom value (`rea_dias_inactividad`) | `fecha_reactivacion` automática | Variantes de 30/45/60 días por tag |
| Trigger links rastreados en WhatsApp | Botonera por enlaces | Botones de respuesta rápida o números |
| Disparador de reseña nueva | RES-03 automático | Conteo semanal manual desde el panel de reputación |
| Comparación de fecha "hoy" para 1 visita por día | Como está | Tag temporal `visita-hoy` que se quita a las 24 h |
| App LeadConnector: formularios, conversaciones, citas | Íconos y app como está | Ajustar la tarjeta "Cómo manejar su sistema" |

## 9. Cómo se activa un cliente nuevo desde el snapshot
1. Crear la sub-cuenta del negocio desde el snapshot "Cliente 360 v1".
2. Llenar los custom values. La mitad salen de la encuesta de instalación y se pueden cargar por API.
3. Conectar la línea del club (coexistence), Google Business Profile y el correo.
4. Crear al dueño (tag `dueno`) y a los empleados.
5. Imprimir los QR (apuntan a `wa.me/<línea>?text=<club_palabra_ingreso>`).
6. Cargar la base de Rescatada y programar los lotes.

**Meta: activar un cliente en ≤ 2 horas de trabajo de MD360** (sin contar las esperas de Meta).
