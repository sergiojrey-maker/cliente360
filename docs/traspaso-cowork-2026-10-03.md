# Contexto para Claude Code — Cliente 360™ (Sardes), Mall Digital 360

*Documento de traspaso, preparado en Cowork el 3 de octubre de 2026, para que Claude Code arranque el trabajo técnico del vertical Sardes / Cliente 360™ con el contexto necesario. Pégalo como CLAUDE.md o archivo de contexto del proyecto/repo donde vayas a trabajar.*

## 1. Quién es el cliente y qué es la empresa
- Sergio Rey, fundador único de **Mall Digital 360**, con sede en Villavicencio, Meta, Colombia. Totalmente bilingüe español-inglés — destacarlo siempre en cualquier texto de posicionamiento.
- Mall Digital 360 **NO es una agencia de marketing.** Es una empresa de tecnología y automatización con IA para negocios: construye, instala y mantiene sistemas que se quedan trabajando dentro del negocio del cliente.
  - Descriptor oficial: "Empresa de tecnología y automatización con IA para negocios."
  - Frase de conversación: "Somos una empresa de soluciones tecnológicas."
  - **Vocabulario prohibido** en cualquier copy, nombre de campo, workflow, página, mensaje: *agencia, marketing, campaña, pauta, publicidad, community manager, contenido (como servicio)*. Usar en su lugar: *soluciones, sistemas, plataforma, automatización, implementación, integración, optimización, IA aplicada.* Decir "instalamos un sistema que…", nunca "te hacemos una estrategia de…".
  - Esta regla aplica a TODO lo que generes para este proyecto.

## 2. Estructura de la empresa (dónde vive Cliente 360)
Mall Digital 360 se organiza en 5 "coworks" (verticales de negocio):
- **Mecenas** — dirección/estrategia (no técnico).
- **Sardes — Cliente 360™** ← el vertical que vas a trabajar.
- **Cartago** — proyectos high-ticket DFY para empresa mediana/grande y sector público.
- **Tiro** — programa de afiliados de GoHighLevel para LatAm. Ya tiene su propio funnel construido; no tocarlo salvo que se indique.
- **Delfos** — networking presencial y charlas de Sergio Rey en Villavicencio; trae leads a Sardes (su charla firma "Ningún cliente sin respuesta" alimenta directamente a Sardes).

Dos marcas: **Mall Digital 360** (comercial) y **Sergio Rey** (personal, cara del negocio). Sardes/Cliente 360 opera bajo la marca y la sub-cuenta de GoHighLevel de Mall Digital 360.

## 3. Qué es Cliente 360™
Sistema instalado (nunca "servicio de reseñas") para negocios locales: más reseñas de Google, más clientes, más ventas, vía Google Business Profile — sin pauta paga, sin redes sociales, sin complicación técnica para el dueño.

**Tres productos base:**
1. **Reputación Rescatada** — recupera reputación usando contactos/WhatsApp de clientes pasados.
2. **Impulso 5 Estrellas** — solicita reseñas de forma constante y automática a clientes nuevos.
3. **Celebración** — campañas atadas a fechas nacionales/internacionales (ofertas, 2x1, referidos).

**En camino:** plan de lealtad — registro del cliente final (QR o formulario) → campo "compras acumuladas" en el contacto de GHL → automatización por WhatsApp al llegar a X compras → recordatorio de recompra por inactividad.

**Mercado objetivo:** negocios físicos locales que dependen de reputación/recompra (restaurantes, spas/salones de belleza, talleres, consultorios), tamaño micro/pequeña empresa, en Villavicencio y el Meta. **Pendiente de confirmar con Sergio:** si esto reemplaza por completo el ángulo original de la web (negocios "Latino-owned" en EE. UU., precios en USD $197/mes–$2.970/año) o si se mantienen ambos mercados en paralelo. Mientras no se confirme, no asumas EE. UU./USD como mercado activo — el resto de la empresa (RUT colombiano, Delfos, prioridades) apunta a Colombia/COP.

## 4. Entorno técnico de GoHighLevel
- Cuenta agencia en plan 297 USD/mes, sub-cuentas ilimitadas.
- Sub-cuenta relevante para Cliente 360: **Mall Digital 360**, Location ID `WZYaJ8M4dqpvhdM2gpip`.
  - La sub-cuenta "Sergio Rey" (Location ID `vC1oy6Ev3Wy52vl1l91g`) es de Delfos/marca personal, no es el entorno de Cliente 360, aunque Delfos alimenta leads hacia Sardes.
- Pipeline existente a **conservar intacto**: `Afiliado360` — personas que ayudan a vender Cliente 360 (referidores), no confundir con clientes de Cliente 360 ni con el programa de afiliados de GHL (eso es de Tiro, pipeline separado).
- **API v2 de GoHighLevel** — qué puedes y no puedes hacer:
  - Base `services.leadconnectorhq.com`, header `Version: 2021-07-28`, límite ~500 requests/10s.
  - Autenticación: token de Private Integration (Settings → Private Integrations en GHL); guardarlo en `.env`, nunca en código ni en commits.
  - **Sí permite por API:** crear/editar custom fields, custom values, tags, pipelines y sus etapas, contactos, oportunidades, y disparar contactos hacia un workflow ya existente.
  - **No permite por API:** construir los pasos internos de un workflow (va por UI/snapshots — el editor de Workflows corre en un iframe que tampoco se puede automatizar de forma confiable desde el navegador), ni construir páginas de funnel/landing (también UI, con el builder tradicional de GHL — Sergio prefiere el builder tradicional sobre AI Studio).
- **Datos de contacto/marca** como custom values de la sub-cuenta (crear nuevos si falta alguno), para poder cambiarlos en un solo lugar: WhatsApp/teléfono +57 320 405 5485 (wa.me/573204055485), correo info@malldigital360.com, dominio malldigital360.com/hub.
- Header/menú y footer de cualquier página nueva: como secciones globales compartidas entre páginas, no repetidas página por página.

## 5. Marca — paleta y tipografía (Mall Digital 360)
- Tipografía: títulos en **Archivo** (Archivo Black en Canva / peso 800-900 en web y GHL); texto en **Source Sans 3**.
- Colores: azul marino `#14315A` (principal), verde `#16B364` (acento propio de MD360, también en los embudos de Tiro), azul profundo `#0B1F3A`, tinta `#1A2432`, gris pizarra `#4E5D70`, verde claro `#E7F7EF`, gris claro `#EEF2F7`, blanco `#FFFFFF`.
- Logo MD360: "M" de dos cúpulas sobre tres rombos, cúpulas en azul marino y rombos en verde. **No usar** los colores estilo pin de Google Maps (verde/amarillo/rojo/azul) en nada de Cliente 360 — se retiró ese ícono a propósito porque sugiere relación con Google y limita la marca a "reseñas".

## 6. Cómo trabajar con Sergio
- Para ejecución, Sergio quiere que se proceda con criterio propio y se entregue un reporte al final; pide cambios después si algo no encaja — no hace falta confirmar cada paso.
- Prefiere el builder tradicional de GHL sobre AI Studio para sitios y páginas.
- Español latinoamericano, directo y práctico, sin jerga — los dueños de negocio que verán el resultado final no son técnicos.

## 7. Qué ya se diagnosticó (resumen de una sesión previa de Cowork, "Plan de Arranque")
Antes de que existiera la estructura de 5 coworks se hizo un diagnóstico inicial de Cliente 360 cuyas recomendaciones operativas siguen vigentes (el posicionamiento como "agencia" de esa sesión quedó obsoleto por la regla de identidad de la sección 1):
- La oferta ancla correcta es reseñas + fidelización por WhatsApp: se explica en una frase, da resultado visible en días, no pide presupuesto de pauta al cliente, se demuestra en vivo en 5 minutos, y abre la puerta al plan de lealtad (mismo motor, mismo cliente, ticket más alto).
- No hace falta evaluar el resto del stack de apps lifetime (AppSumo) para lanzar esto — GoHighLevel solo alcanza; esas apps quedan en reserva para necesidades puntuales de un cliente.
- La validación en campo (ir a Cámara de Comercio/gobernación/alcaldía) ya **no es un hueco abierto**: la resuelve el vertical Delfos, que entra como aliado institucional con charlas gratuitas y cierra con QR a un formulario — el canal de entrada de leads hacia Sardes ya está diseñado ahí.

## 8. Próximos pasos recomendados, en orden
1. **Repricing en COP.** La única tabla de precios que existe hoy (malldigital360.com) está en USD para un mercado de EE. UU. que probablemente ya no es el foco. Confirmar el mercado con Sergio y, si es Colombia, definir 2-3 planes en pesos antes de construir más automatización.
2. **Snapshot base de onboarding.** Usar Ask AI para armar un snapshot reutilizable (custom fields, tags, pipeline, workflows base) de los tres productos, para activar un cliente nuevo en minutos.
3. **Plan de lealtad.** Construir el flujo de la sección 3 sobre la sub-cuenta Mall Digital 360.
4. **Demo de 2 minutos.** Dejar lista una demo corta (solicitud automática de reseña por WhatsApp desde un contacto de prueba) para que Delfos la muestre en vivo.
5. **Página/landing de Cliente 360 en COP**, con el builder tradicional de GHL, la paleta de la sección 5, el vocabulario de la sección 1, y los datos de contacto como custom values.
6. Con los primeros 2-3 clientes reales, documentar resultados (reseñas antes/después) como prueba social — hoy el único social proof visible está en inglés y dólares.

## 9. Si necesitas más contexto
Este documento es autocontenido para empezar. El proyecto "Mall Digital 360" en Claude (Cowork) tiene documentos vivos más extensos, en particular `claude/contexto-completo-mall-digital-360.md` (contexto maestro de toda la empresa) y `claude/sardes.md` (este vertical, que Cowork actualiza al cierre de cada sesión). Si tienes acceso a ese proyecto, vale la pena leerlos directamente — este archivo es una fotografía al 3 de octubre de 2026.
