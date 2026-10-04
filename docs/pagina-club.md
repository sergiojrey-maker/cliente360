# Página `malldigital360.com/club` — texto y estructura (v1)

*Para construir en el builder tradicional de GHL. Paleta y tipografía según `CLAUDE.md` (Archivo 800–900 en títulos, Source Sans 3 en texto, azul marino `#14315A`, verde `#16B364`). Header y footer como secciones globales. El WhatsApp y el correo, como custom values de la sub-cuenta Mall Digital 360.*

**Objetivo único de la página:** que el dueño agende su **Diagnóstico gratis** por WhatsApp. Sin precios: se dan en el diagnóstico.

---

## Sección 1 — Encabezado (hero)
- **Etiqueta pequeña:** Cliente 360™ · Mall Digital 360
- **Título:** Le instalamos el club de clientes de su negocio.
- **Subtítulo:** Sus clientes se unen con un QR y ganan premios por volver. Mientras tanto, el sistema le consigue reseñas en Google, trae de vuelta a quienes dejaron de venir y cada lunes le muestra en su WhatsApp cuánto dinero generó. Usted no toca un computador.
- **Botón principal (verde):** Quiero mi diagnóstico gratis → `wa.me/573204055485?text=Hola,%20quiero%20el%20diagnóstico%20gratis%20del%20club%20de%20clientes`
- **Botón secundario:** Ver cómo funciona ↓
- **Imagen:** celular con el chat del club ("Bienvenido al Club…, sello 1 de 10") junto a un QR en un mostrador.

## Sección 2 — El problema (3 tarjetas)
- **Clientes que no vuelven.** Vinieron una vez, quedaron contentos… y nunca más se supo de ellos.
- **Reseñas que no llegan.** Sus clientes felices no dejan reseña porque nadie se la pide en el momento justo.
- **Fechas que se pasan.** Día de la Madre, Amor y Amistad, Navidad… y su base de clientes sin usar.

## Sección 3 — Cómo funciona (3 pasos)
1. **Sus clientes se unen al club.** Escanean un QR en su negocio y quedan inscritos por WhatsApp. Sin aplicaciones, sin formularios largos.
2. **El club trabaja solo.** Suma sus visitas, les avisa cuando están cerca del premio, les pide la reseña en el momento justo, los saluda en su cumpleaños y los invita a volver si dejan de venir.
3. **Usted ve los resultados.** Cada lunes recibe en su WhatsApp las reseñas nuevas, las visitas del club y las ventas medidas, en pesos.

## Sección 4 — Lo que el club hace por usted (4 bloques con ícono)
- ⭐ **Más reseñas en Google**, de forma constante y siguiendo las reglas de Google. Si un cliente quedó inconforme, usted se entera primero para atenderlo.
- 🔁 **Clientes que vuelven**: tarjeta de sellos digital, premios y mensajes automáticos a quien lleva tiempo sin venir.
- 🎉 **Ventas en fechas especiales**: el sistema le propone la oferta, usted responde con un número y él se encarga del resto.
- 📊 **Reporte en pesos cada lunes**: no solo "tiene una reseña nueva", sino cuántos clientes volvieron y cuánto vendió gracias al club.

## Sección 5 — Sin complicaciones (franja de fondo azul marino)
- **Título:** Usted no tiene que aprender nada.
- Todo se maneja desde su WhatsApp: le llega un mensaje, toca un botón y listo.
- Su equipo solo tiene un ícono en el celular: "✅ Atendido".
- Nosotros instalamos, configuramos y mantenemos todo.

## Sección 6 — Garantía (tarjeta destacada en verde claro)
- **Título:** Garantía 10 Reseñas
- **Texto:** Si en sus primeros 30 días con el sistema activo no recibe al menos 10 reseñas nuevas en Google, el mes siguiente no lo paga, y seguimos trabajando hasta lograrlo.
- **Letra pequeña:** Aplican condiciones que se explican en el diagnóstico.

## Sección 7 — Para quién es (chips)
Barberías · Salones de belleza · Spas · Gimnasios · Academias · Restaurantes y cafés · Talleres
*"Si su negocio vive de que los clientes vuelvan, el club es para usted."*

## Sección 8 — Diagnóstico gratis (CTA final)
- **Título:** Descubra en 20 minutos cuánto le están costando las reseñas que no tiene.
- **Texto:** Le mostramos su calificación y sus reseñas frente a 3 competidores cercanos, y cuánto representa eso en pesos. Sin compromiso.
- **Botón:** Agendar mi diagnóstico por WhatsApp

## Sección 9 — Preguntas frecuentes (acordeón)
- **¿Tengo que usar computador?** No. Todo se maneja desde WhatsApp. Nosotros hacemos la instalación.
- **¿Mis clientes tienen que descargar una aplicación?** No. Todo pasa en WhatsApp, que ya tienen.
- **¿Esto es publicidad en redes?** No. Es un sistema que trabaja con los clientes que ya tiene y con los que lleguen a su negocio.
- **¿Las reseñas son reales?** Sí, siempre. Solo se las pedimos a clientes reales, nunca se compran ni se regalan cosas a cambio. Así lo exige Google y así lo hacemos.
- **¿Y si un cliente quedó molesto?** Usted recibe una alerta inmediata para atenderlo antes de que el problema crezca.
- **¿Cuánto cuesta?** Depende del tamaño de su negocio. Se lo explicamos en el diagnóstico, junto con lo que puede esperar en pesos.

## Footer (global)
Mall Digital 360 · Empresa de tecnología y automatización con IA para negocios · Villavicencio, Meta · WhatsApp {{custom_values.whatsapp}} · {{custom_values.email}} · Política de privacidad · Términos

---

### Notas de construcción
- **Dónde va:** crear un funnel nuevo **"Club de Clientes — Cliente 360"** en la sub-cuenta Mall Digital 360, conectado al dominio malldigital360.com, con el paso en la ruta `/club` y una página de gracias en `/club-gracias` (si después se agrega un formulario). Así no se toca el sitio actual y luego se integra al sitio corporativo nuevo.
- **Evento de seguimiento:** el botón de WhatsApp lleva el texto prellenado. Con eso se reconoce de dónde vino el contacto (y en GHL se etiqueta `fuente-pagina-club` con un disparador de palabra clave).
- **Video de la demo:** se agrega a la Sección 3 en cuanto esté grabada (Fase 2).
