# Decisiones pendientes para Sergio (noche del 4 al 5 oct 2026)

Lista corta. Cada punto tiene una propuesta; con un "OK" o un cambio basta.

1. **Términos del club (`/club-terminos`):**
   - Están escritos en genérico: el negocio es el Responsable y MD360 el Encargado.
   - Supuestos míos para confirmar:
     - el premio vence a los **90 días** de ganado;
     - el negocio avisa con **30 días** si cambia o cierra el club;
     - los datos pueden alojarse fuera de Colombia (GHL / Meta).
   - Falta revisión del abogado.
   - En v2, cada cliente debería tener su página de términos en su propia sub-cuenta, con sus datos de contacto.
2. **Enlace de reseña en la demo:**
   - En Mall Digital 360, `resena_link_google` apunta a `malldigital360.com/club` y no al perfil real de Google de MD360.
   - Así no se le piden reseñas a gente que solo probó la demo (Google lo prohíbe).
   - ¿Le parece bien?
3. **Dominio del funnel del club:**
   - El funnel ya muestra `malldigital360.com/club`, así que alguien conectó el dominio.
   - Las páginas `/club` y `/club-terminos` están **guardadas pero no publicadas** (no se tocó "Publish").
   - Revise si ya se ven en vivo.
4. **Parche del sitio (P2):**
   - Sigue pendiente el borrado manual de las 5 páginas y el retiro del dominio del funnel MedSpa.
   - Los pasos están en `estado-snapshot.md`.
5. **Footer del sitio:** ¿dirección de EE. UU. o Villavicencio + WhatsApp +57?
6. **Dos mensajes de la demo siguen en SMS porque su plantilla no se ha enviado a Meta:**
   - el regalo de bienvenida de CLUB-01 (`c360_regalo`);
   - el recordatorio único de premio de CLUB-02 (`c360_recordar_premio`).
   - MD360 no tiene línea SMS en Colombia, así que en la demo no van a llegar.
   - Opciones:
     - (a) usted envía las dos plantillas a Meta (textos en `plantillas-whatsapp-demo.md`, #13 y #14) y yo hago el cambio;
     - (b) para la demo, se deja vacío `club_regalo_bienvenida` y la rama se salta. Ojo: el guion dice que llega el regalo.
   - Propuesta: (a). Mientras tanto, en la prueba con el celular no espere esos dos mensajes.
7. **Costo de las plantillas:** Meta pasó 9 de las 10 a **Marketing**; solo `c360_disculpa` quedó en Utilidad. Marketing cuesta más por mensaje.
   - Para el cálculo de costos por cliente, asuma tarifa Marketing en casi todo.
   - Se puede apelar la categoría en el administrador de WhatsApp de Meta. Es poco probable que cambie con textos que hablan de premios o del club.
