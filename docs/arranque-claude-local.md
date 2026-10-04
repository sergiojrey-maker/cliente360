# Arranque de Claude Code en el computador de Sergio (con Chrome)

## Instalación (una sola vez)
1. **Instalar Claude Code**
   - Mac: abrir Terminal y pegar `curl -fsSL https://claude.ai/install.sh | bash`
   - Windows: abrir PowerShell y pegar `irm https://claude.ai/install.ps1 | iex`
   - Verificar con `claude --version`.
2. **Instalar la extensión "Claude in Chrome"** desde la Chrome Web Store, con la misma cuenta de Claude (plan Pro, Max, Team o Enterprise).
3. **Bajar el repo con el trabajo:**
   ```
   git clone https://github.com/sergiojrey-maker/cliente360.git
   cd cliente360
   git checkout claude/trusting-tesla-no7f7o
   ```
   *(Alternativa: `claude --teleport` y elegir esta sesión de la nube. Trae una copia local de esta conversación y de la rama.)*

## Cada vez que se trabaje
1. Abrir Chrome con GoHighLevel abierto y la sesión iniciada (app.gohighlevel.com).
2. En la carpeta `cliente360`, ejecutar `claude --chrome`. *(Una vez adentro, `/chrome` → "Enabled by default" para no tener que escribir `--chrome` la próxima vez.)*
3. Pegar el **prompt de arranque** de abajo.
4. Claude pausa y pide ayuda solo en logins, códigos de verificación, CAPTCHAs, conexión de Meta/Google/Stripe/dominio y pruebas con el celular.

## Prompt de arranque (pegar en Claude Code)
> Lee CLAUDE.md y docs/orquesta-ask-ai.md, docs/snapshot-c360-spec.md y docs/pagina-club.md. Vas a dirigir la construcción de Cliente 360 en GoHighLevel usando Chrome (ya tengo la sesión iniciada).
>
> **Orden de trabajo:**
> 1. En la sub-cuenta "Cliente 360 — Snapshot Maestro", crea por API (conector de GoHighLevel) o por pantalla todos los custom values, campos, tags, el pipeline "Órdenes", un calendario de ejemplo y los contactos de prueba de la spec.
> 2. Abre Ask AI en esa sub-cuenta y pégale la instrucción general y luego los prompts F1–F5 y W1–W8, uno por uno. Después de cada uno, revisa en pantalla lo que construyó y corrige con Ask AI o a mano hasta que coincida con la spec. Todo en borrador.
> 3. En la sub-cuenta "Mall Digital 360": prompt P1 (página /club, sin publicar) y prompt P2 (parche al sitio). Antes de despublicar o borrar cualquier página en vivo, muéstrame la lista y espera mi OK.
> 4. Solo interrúmpeme para: iniciar sesión, códigos de verificación, conectar Meta/WhatsApp, Google Business Profile, Stripe o dominio, publicar algo en vivo, o probar con mi celular.
>
> Al terminar cada bloque, actualiza docs/plan-de-lanzamiento.md y la tarea "Lanzamiento Cliente 360 v1" en Blue, haz commit y push a la rama claude/trusting-tesla-no7f7o, y dame un reporte corto.

Documentación: [instalación](https://code.claude.com/docs/en/setup.md) · [Chrome](https://code.claude.com/docs/en/chrome.md) · [de la nube al computador (teleport)](https://code.claude.com/docs/en/claude-code-on-the-web.md#from-cloud-to-terminal)
