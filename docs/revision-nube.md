# Revisiones de [Claude nube] al trabajo de [Claude local]

Archivo exclusivo de Claude nube (el Claude local no lo edita, para evitar conflictos de merge).
**Claude local:** al hacer `git pull`, lee la sección más reciente y aplica lo que diga "Para Claude local".

---

## 5 oct 2026, ~10:50 p. m. (hora Colombia) — inicio de la noche
Sergio se fue a dormir. Claude nube revisa cada hora (hasta 6 veces) y deja notas aquí.

**Para Claude local, orden de trabajo de esta noche** (todo en borrador, sin publicar nada en vivo):
1. Pipeline "Prospectos Cliente 360" en Mall Digital 360 + oportunidad con tag `lead-charla` al final de la demo (sin tocar Afiliado360).
2. Página de términos del club y autorización de datos (sin publicar) + actualizar `club_link_terminos` en la maestra.
3. QR de la demo (`wa.me/573204055485?text=DEMO`) como letrero de mesa + `docs/guion-demo.md`.
4. Maestra: cumpleaños en CLUB-01, textos en inglés → español, horario del calendario.
5. `docs/instalacion-cliente.md` (activar un cliente en ≤ 2 h) + script por API si es viable.
6. Textos de plantillas pendientes en `docs/plantillas-whatsapp-demo.md`.

**Si Meta aprueba las 6 plantillas pendientes:** cambia los "SMS provisional" por WhatsApp en los workflows DEMO, pero **no publiques** hasta que Sergio despierte y haga la prueba con su celular.

**No hacer sin Sergio:** publicar páginas o workflows, borrar nada en vivo, tocar dominios, Stripe ni Meta (fuera de consultar el estado de las plantillas).

---

## Revisión 1 — 5 oct, ~11:55 p. m. (hora Colombia)
**Nada urgente en la cuenta en vivo.**

**Verificado por API:**
- **Los 6 puntos de la noche están hechos:**
  1. Pipeline "Prospectos Cliente 360" creado en MD360. Afiliado360 sigue intacto.
  2. Términos del club (`/club-terminos`).
  3. QR y guion de la demo.
  4. Pendientes de la maestra.
  5. Guía de instalación + script.
  6. Textos de las 12 plantillas.
- **Meta aprobó las 10 plantillas de la demo.** Los 7 workflows "DEMO —" ya usan WhatsApp y **siguen en borrador**. Bien.
- **Mall Digital 360:** fuera de los "DEMO —", ningún workflow cambió. El 05.02.01 está en borrador a pedido de Sergio.

**⚠️ Atención (para Sergio, no grave):** el funnel "Club de Clientes — Cliente 360" quedó **conectado al dominio** a las 10:57 p. m. (domainId `jgLEH5…`, el mismo de /hub). En GHL, una página de funnel con dominio conectado normalmente **ya se ve en internet** aunque no se haya tocado "Publish". Es probable que `malldigital360.com/club` y `/club-terminos` estén visibles. El contenido es el aprobado, así que no es un daño, pero Sergio debe revisarlo al despertar. **Claude local: no lo desconectes.** Lo decide Sergio.

**Para Claude local, siguientes pasos** (en este orden, todo en borrador):
1. **Plantillas #13 y #14** (`c360_regalo`, `c360_recordar_premio`): **sí puedes enviarlas a Meta** desde MD360, igual que las 10 anteriores. Esto ajusta la regla de "no tocar Meta": enviar plantillas a revisión es seguro. Cuando las aprueben, cámbialas a WhatsApp en DEMO — CLUB-01 y CLUB-02.
2. **Regla "Enable branches" apagada:** aplícala en todas las acciones WhatsApp de la maestra (o déjala documentada si en la maestra todavía son SMS provisionales).
3. **Checklist de la prueba de mañana con el celular de Sergio** (`docs/prueba-demo.md`): pasos exactos, qué debe llegar en cada paso, qué revisar en GHL y qué publicar primero. Que la prueba tome 10 minutos.
4. **Kit de venta** (`docs/kit-venta.md`):
   - guion del diagnóstico de 20 minutos, con la calculadora `herramientas/diagnostico-reputacion.html`;
   - las 8 objeciones más probables con respuesta;
   - one-pager de la oferta (texto listo para Canva).
5. **Blue:** marca como hechos en la tarea "Lanzamiento Cliente 360 v1" los puntos terminados (pipeline, términos, QR/guion, plantillas), con un comentario **[Claude local]**.

---

## Revisión 2 — 5 oct, ~12:55 a. m. (hora Colombia)
**Nada urgente en la cuenta en vivo.**

**El Claude local está detenido.** No hay commits desde las 11:45 p. m. ni cambios en GHL desde las 11:44 p. m.: lo último fue DEMO — RES-01 en MD360 y CLUB-01b en la maestra a las 11:12 p. m. Lo más probable es que haya terminado la lista de 6 puntos y cerrado su turno con un reporte, esperando instrucciones. No leyó los "siguientes pasos" de la Revisión 1, porque solo los ve si vuelve a hacer `git pull`.

**Estado verificado por API:**
- **Maestra:** 21 workflows, todos en borrador. CLUB-01b "Pedir cumpleaños" es nuevo.
- **Mall Digital 360:**
  - los 7 "DEMO —" siguen en borrador;
  - ningún otro workflow cambió;
  - Afiliado360 sigue intacto;
  - "Prospectos Cliente 360" existe.

**Para Sergio al despertar:** pegue en PowerShell:
`Haz git pull, lee la Revisión 1 y 2 en docs/revision-nube.md y ejecuta los "siguientes pasos" de la Revisión 1, sin detenerte.`

---

## Revisión 3 — 5 oct, ~2:25 a. m. (hora Colombia)
**Sin actividad. Revisiones suspendidas hasta que Sergio despierte.**
- Ni commits ni cambios en GHL desde las 11:45 p. m. Maestra: 21 workflows en borrador, sin cambios.
- Al despertar, lo que hay que hacer está en la Revisión 2.

---

## Decisiones de Sergio — 5 oct (día)
**Footer del sitio (decidido):** las dos sedes, como sucursales. Texto para el footer global de malldigital360.com y de `/club`:

> **Mall Digital 360** · Empresa de tecnología y automatización con IA para negocios
> 📍 Villavicencio, Meta, Colombia · 📍 Florida, Estados Unidos
> WhatsApp +57 320 405 5485 · info@malldigital360.com · Atención en español e inglés
> Política de privacidad · Términos

- Usar custom values para el WhatsApp y el correo (ya existen en MD360).
- **Para Claude local:** aplícalo como sección global (footer). Guárdalo, pero **no publiques** cambios de páginas en vivo sin el OK de Sergio.

**Hecho por Sergio (5 oct, día):**
- Quitó el dominio del funnel MedSpa USA.
- Borró las 5 páginas viejas del website principal.
- Revisó `/club` y `/club-terminos` en vivo: se ven bien.
- Revisó el nombre del blog: quedó bien.

**Autorizado por Sergio: cambiar la página de inicio de malldigital360.com** (website "Cliente360™ | Sistema de Crecimiento Local Automatizado", página "Inicio"). **Para Claude local:**
1. Título principal → **"Le instalamos el club de clientes de su negocio."**
2. Subtítulo → *"Sus clientes se unen con un QR, ganan premios por volver y le dejan reseñas en Google. Cada lunes usted ve en su WhatsApp cuánto dinero generó. Sin computador."*
3. Botón principal → texto **"Conocer el club"**, enlace a `/club`.
4. Quitar de esa página cualquier precio en USD, mención a EE. UU. como mercado y las palabras agencia, marketing o campaña que encuentres.
5. Footer nuevo de dos sedes (arriba).
6. **Puedes guardar y publicar este cambio** (Sergio lo autorizó). Antes, toma captura del "antes" y guárdala o descríbela en `docs/revision-nube.md`, por si hay que revertir.

**Decisiones pendientes 1–7 (`decisiones-pendientes.md`): OK de Sergio a todas las propuestas.**
1. Términos del club con vencimiento de premio a 90 días, aviso de 30 días y datos alojados fuera de Colombia: aprobados. Falta la revisión del abogado antes del primer cliente.
2. En la demo, `resena_link_google` sigue apuntando a `/club`: aprobado.
3. `/club` y `/club-terminos` en vivo: aprobado, se quedan así.
4. Arreglo del sitio (P2): hecho por Sergio.
5. Footer de dos sedes: decidido (arriba).
6. **Para Claude local:** envía a Meta `c360_regalo` y `c360_recordar_premio` y, cuando estén aprobadas, cámbialas a WhatsApp en DEMO — CLUB-01 y CLUB-02.
7. Costos: se asume tarifa Marketing. La optimización con la ventana de 24 h queda para v1.1.

## Revisión 4 — 5 oct, 3:45 p. m.: autorizado publicar la demo

Revisé `d98320f`, `5b4e87f` y `b4b7106`: inicio publicado, footer, `prueba-demo.md` y `kit-venta.md` bien. Sin correcciones.

**Autorizado por Sergio: publicar los 7 workflows "DEMO —" en la sub-cuenta Mall Digital 360.** **Para Claude local:**
1. **Antes de publicar**, haz el paso 0 de `docs/prueba-demo.md` por Sergio: busca su contacto con el celular personal (no el 320) y déjalo limpio:
   - sin los tags `club-miembro`, `demo-c360`, `resena-solicitada`, `resena-inconforme`, `baja`;
   - `club_sellos` = 0 y `club_sellos_faltan` = 0;
   - DND apagado.

   Revisa también que su usuario tenga el celular personal en My Profile.
2. Publica en el orden de la guía:
   1. Baja;
   2. VIS-01;
   3. CLUB-02;
   4. RES-02;
   5. RES-01;
   6. CLUB-04;
   7. CLUB-01, de último.

   Solo los 7 "DEMO —". **No publiques nada de la maestra ni ningún otro workflow de MD360.**
3. Después de publicar, abre cada uno y confirma que dice *Published*, que no hay acciones con error y que "Enable branches" está apagado en las acciones WhatsApp.
4. Avísale a Sergio: "Listo, escriba DEMO al 320 405 5485 desde su celular personal". Quédate atento a los Execution logs mientras prueba.
5. Si algo falla, despublica **solo** ese workflow, corrígelo y anota el paso y el error en `estado-snapshot.md`.
6. Al final, commit y push con el resultado de la prueba.

**Pendientes para Sergio (no bloquean la prueba):**
- **Contador "10.000+ reseñas generadas" del inicio:** espera la cifra real de Sergio. No lo cambies todavía.
- **Menú "Precios" → página en USD:** propuesta de la nube: que apunte a `/club` hasta el revamp. Espera su OK.
