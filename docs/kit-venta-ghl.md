# Kit de venta: lo que se arma dentro de GHL (Claude local)

*Encargado por Sergio el 13 oct 2026 (tarea T-727). Va después de `docs/lanzamiento-smartleads-lote1.md` (miércoles 10:30) y en paralelo con `docs/maestra-v1.md`. Todo va en **Mall Digital 360** (`WZYaJ8M4dqpvhdM2gpip`). Firmar los avances como [Claude local] en `docs/estado-snapshot.md`, commit y push.*

## 1. Contrato Cliente 360 en Documents & Contracts
1. **Campos de oportunidad.** Settings → Custom Fields → Opportunity. Crear los que falten (revisar antes, puede que ya existan "montaje"/"mensual" de la secuencia SmartLeads):
   - `arranque` (número, COP);
   - `mensualidad` (número, COP);
   - `mensajes_incluidos` (número);
   - `meta_garantia` (número, por defecto 10).

   Los campos "Solución" y "Plan" de la simplificación ya existen: no duplicar.
2. **Plantilla.** Payments → Documents & Contracts → Templates → nueva: **"Contrato — Cliente 360™ (Colombia)"**.
   - Texto: `docs/contrato-cliente360.md` desde "**ACUERDO DE INSTALACIÓN Y USO…**" hasta las firmas. Sin la sección "Notas para Sergio".
   - Variables: `{{contact.company_name}}`, `{{contact.name}}`, NIT/C.C. (campo de contacto; si no existe, crear `nit` tipo texto) y `{{opportunity.<campo>}}` de los campos del punto 1.
   - Casillas de plan (Impulso / 360) y de fundador: elementos de casilla del editor o una línea de texto que se llena al enviar.
   - Firma: un bloque de firma para EL NEGOCIO y uno para MD360 (Sergio). Fecha automática.
   - Encabezado con logo de MD360, colores `#14315A` / `#16B364`.
   - **Marcarla como borrador**, con la nota "Pendiente de revisión de abogado" en la primera línea. No enviarla a nadie.
3. **Renombrar** la plantilla "GR · Contrato de servicio recurrente MD360" a **"Contrato — WhatsApp integral / Página moderna (MD360)"**. Es la de la secuencia SmartLeads. No cambiar su contenido.
4. **Prueba:** generar un documento desde la oportunidad de "Prueba Claude C360" (crearla en Mall Digital 360 → Nuevo prospecto, con arranque 790000, mensualidad 490000, mensajes_incluidos 1000, meta_garantia 10) y revisar que las variables se llenan. **No enviarlo.** Borrar el documento y la oportunidad de prueba.

## 2. Accesos rápidos para la demo en el celular de Sergio
- Comprobar que el formulario **Atendido** (`x7uUZwsRMWCYoazIVnn5`) y el formulario **Canjear** (`ORb7Xh71qDxlhqJcBJaq`) abren desde el enlace del formulario (Sites → Forms → Share). Anotar las URLs públicas exactas en `docs/kit-venta.md`, sección "Enlaces de la demo".

## 3. Al terminar
Comentar en la tarea de Blue "Cliente 360 — Contrato: revisión de abogado + plantilla en GHL Documents & Contracts".
