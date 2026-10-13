# Cobro automático en Colombia sin Stripe — comparación (13 oct 2026)

*Contexto: el 13 oct Sergio decidió que en Colombia se factura por la DIAN y se cobra desde Colombia. Stripe (LLC de EE. UU.) queda suspendido para Colombia. Mientras tanto se cobra a mano con recordatorio. Meta: tener cobro automático antes de llegar a 8–10 clientes. Investigación de [Claude nube] con búsqueda web. Las tarifas cambian según la fuente: **confirmarlas en la cuenta de cada pasarela antes de firmar**.*

## Qué necesitamos
1. Cobro mensual automático a tarjeta (o Nequi/débito) guardada, sin que el dueño haga nada.
2. Que GHL se entere del resultado (pago o fallo) para disparar workflows: recibo, recordatorio y aviso a MD360 si falla. También para pausar el sistema (`sis_estado`) si no paga.
3. Dinero que entra a la cuenta colombiana de Sergio, la misma entidad que factura por la DIAN.
4. Poco mantenimiento técnico. Lo ideal es que nada quede fuera de GHL.

## Opciones

| | **Mercado Pago (nativo en GHL)** | **Wompi (Bancolombia)** | **ePayco** |
|---|---|---|---|
| Integración con GHL | **Nativa desde abril 2026**, Colombia incluida (Public Key + Access Token + webhook). Funciona en formularios, funnels, calendarios y facturas, y guarda tarjetas para cobros de un clic | **No nativa.** Hace falta una app de "custom payment provider" o un puente propio (webhook → API de GHL) | **No nativa.** Mismo caso que Wompi |
| Cobro recurrente | Mercado Pago tiene suscripciones en Colombia. **Sin confirmar:** si las suscripciones y facturas recurrentes de GHL cobran solas con Mercado Pago | Sí, por API: se tokeniza la tarjeta o Nequi y se cobra con `payment_source_id`. Hay que programar el cobro mensual nosotros | Sí: "Suscripciones" con planes, periodos y portal del cliente. GHL solo recibe el aviso |
| Tarifa tarjeta (aprox.) | 3,29 % + $800 + IVA con giro a 7 días, o 2,99 % + $800 + IVA a 14 días | 2,65 % + $700 + IVA (plan agregador) | 2,64 % + $690 + IVA con cuenta Davivienda; 3,29 % + $700 + IVA con otros bancos |
| Costo por cliente en Plan Impulso (COP 290.000) | ≈ $12.300 (≈ 4,2 %) a 7 días | ≈ $10.000 (≈ 3,4 %) | ≈ $9.900 con Davivienda; ≈ $12.200 con otros bancos |
| Trabajo técnico | Mínimo: conectar y probar | Alto: puente propio, reintentos y avisos, mantenerlo | Medio: crear planes en ePayco y conectar el webhook a GHL |

Diferencia de costo entre la opción más cara y la más barata: ≈ $2.300 por cliente al mes, unos $23.000 al mes con 10 clientes. **Pesa menos que el tiempo de construir y mantener un puente propio.**

Capa opcional: **Treli** (suscripciones colombianas encima de Wompi, ePayco o Mercado Pago). Hace reintentos y comunicación, y se conecta con Siigo y Alegra para la factura. No encontré integración con GHL ni precio público. Solo vale la pena si además resuelve la factura DIAN automática.

## Recomendación
1. **Probar primero Mercado Pago nativo en GHL.** Es lo único que deja todo dentro de GHL, igual que con Stripe: pago → workflow → `sis_estado`. Prueba en Mall Digital 360 con credenciales de prueba:
   - producto mensual "Plan Impulso" con precio recurrente;
   - pagar con tarjeta de prueba y confirmar que GHL crea la **suscripción**;
   - confirmar que el **segundo cobro** sale solo (o una factura recurrente con cobro automático a la tarjeta guardada);
   - confirmar que los disparadores de pago exitoso y de pago fallido llegan a un workflow.
   - Requisito de Mercado Pago: tener activos los **cobros sin CVV**, que hacen falta para renovaciones.
2. **Si GHL no renueva solo con Mercado Pago:** ePayco con su módulo de suscripciones (mejor tarifa si Sergio tiene o abre cuenta Davivienda) y un webhook a GHL. Wompi solo si queremos la tarifa más baja y aceptamos construir y mantener el puente.
3. **Preguntas para el contador**, que deciden entre opciones:
   - retenciones (retefuente, reteICA, reteIVA) que aplica cada pasarela;
   - si el cobro va a nombre de persona natural (RUT de Sergio), igual que la factura.

## Qué hace falta de Sergio
- Cuenta de Mercado Pago Colombia a su nombre (la que factura) y las credenciales de prueba. Conectarla en GHL pide login y es un tema de pagos, así que lo hace o autoriza Sergio.
- Después, Claude local hace la prueba del punto 1 y Claude nube revisa por API.

## Fuentes
- GHL + Mercado Pago nativo (changelog y pedidos de la comunidad): ideas.gohighlevel.com/changelog/sell-smarter-in-latam-with-mercado-pago-payments · ideas.gohighlevel.com/saas/p/add-mercado-pago-as-a-payment-processor-in-the-saas-configurator · marketplace.gohighlevel.com/docs/Changelog/
- Mercado Pago suscripciones y costos: mercadopago.com.co/developers/es/docs/subscription-plans/overview · mercadopago.com.co/herramientas-para-vender/suscripciones
- Wompi: wompi.com/es/co/que-es-wompi · treli.co/wompi-guia-completa-para-pagos-y-suscripciones · andres-dev.com/wompi-la-nueva-pasarela-de-pagos-de-bancolombia
- ePayco: epayco.com/tarifas · larepublica.co/finanzas/como-autogestionar-mis-pagos-en-epayco-4226623
- Comparativas 2026: alejandroverjel.com/blog/ecommerce/pasarelas-de-pago-colombia-comparativa · mentoracolombia.com/pasarelas-de-pago-colombia-2026-comisiones-wompi-bold-mercadopago
- Treli: intercom.help/treli/es/articles/11025268-como-conectar-mi-cuenta-de-mercado-pago-a-treli
