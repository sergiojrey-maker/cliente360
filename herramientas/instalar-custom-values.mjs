#!/usr/bin/env node
// Cliente 360™ — carga los custom values de un cliente nuevo por API (GHL v2).
//
// Uso (desde la raíz del repo):
//   node herramientas/instalar-custom-values.mjs clientes/<negocio>.json              → ensayo (no escribe nada)
//   node herramientas/instalar-custom-values.mjs clientes/<negocio>.json --aplicar    → escribe en GHL
//   node herramientas/instalar-custom-values.mjs clientes/<negocio>.json --sin-api    → solo valida el JSON
//
// Opciones:
//   --dueno +57300...   Lee las respuestas de la encuesta "Instalación Cliente 360" (campos inst_*)
//                       del contacto del dueño y llena con ellas los valores que estén vacíos en el JSON.
//   --forzar            Permite correr contra la maestra o contra Mall Digital 360 (bloqueado por defecto).
//
// Credenciales: archivo .env en la raíz (nunca en el repo):
//   GHL_TOKEN=pit-...            token de Private Integration de la SUB-CUENTA del cliente
//   GHL_LOCATION_ID=xxxxxxxx     Location ID de la sub-cuenta del cliente
// También se aceptan como variables de entorno.

import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const API = 'https://services.leadconnectorhq.com';
const VERSION = '2021-07-28';
const PAUSA_MS = 150; // muy por debajo del límite de ~500 req / 10 s
const PROTEGIDAS = {
  PF7DK8r0SiEtcVhO4Trt: 'Cliente 360 — Snapshot Maestro',
  WZYaJ8M4dqpvhdM2gpip: 'Mall Digital 360 (demo + CRM comercial)',
};
const FORM_MAESTRA = '27nv6RRwCed6LN25PvV9'; // "Ingreso al club" de la maestra: no sirve en otra sub-cuenta

// Respuestas de la encuesta de instalación → custom values
const MAPA_ENCUESTA = {
  inst_ticket: 'negocio_ticket_promedio',
  inst_visitas_anio: 'negocio_visitas_anio',
  inst_nuevos_mes: 'negocio_clientes_nuevos_mes',
  inst_meta: 'club_meta_visitas',
  inst_premio: 'club_premio',
};

// Sin estos el sistema manda mensajes rotos
const OBLIGATORIOS = [
  'negocio_nombre', 'negocio_nombre_corto', 'negocio_dueno_nombre', 'negocio_whatsapp_club',
  'negocio_whatsapp_dueno', 'negocio_firma', 'negocio_unidad_visita', 'negocio_ticket_promedio',
  'negocio_visitas_anio', 'negocio_modo', 'negocio_moneda',
  'club_nombre', 'club_nombre_completo', 'club_sello_nombre', 'club_sello_plural', 'club_meta_visitas',
  'club_premio', 'club_premio_corto', 'club_regalo_cumpleanos', 'club_link_terminos', 'club_palabra_ingreso',
  'club_link_registro', 'resena_link_google', 'resena_espera_minutos', 'resena_meta_garantia',
  'rea_dias_inactividad', 'sis_plan', 'sis_modulo_rescatada', 'sis_modulo_sellos', 'sis_modulo_celebraccion',
  'sis_pin_equipo', 'sis_soporte_whatsapp', 'sis_soporte_email', 'sis_estado',
];
// Pueden quedar vacíos a propósito
const OPCIONALES_VACIOS = ['club_regalo_bienvenida', 'rea_oferta_regreso'];

// ---------- utilidades ----------
const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opcion = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };
const archivo = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--dueno');
const dormir = (ms) => new Promise((r) => setTimeout(r, ms));
const salir = (msg) => { console.error(`\n✖ ${msg}\n`); process.exit(1); };

function leerEnv() {
  const ruta = resolve(process.cwd(), '.env');
  if (existsSync(ruta)) {
    for (const linea of readFileSync(ruta, 'utf8').split(/\r?\n/)) {
      const m = linea.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

async function ghl(metodo, ruta, cuerpo) {
  await dormir(PAUSA_MS);
  const res = await fetch(API + ruta, {
    method: metodo,
    headers: {
      Authorization: `Bearer ${process.env.GHL_TOKEN}`,
      Version: VERSION,
      Accept: 'application/json',
      ...(cuerpo ? { 'Content-Type': 'application/json' } : {}),
    },
    body: cuerpo ? JSON.stringify(cuerpo) : undefined,
  });
  const texto = await res.text();
  if (!res.ok) throw new Error(`${metodo} ${ruta} → ${res.status}: ${texto.slice(0, 300)}`);
  return texto ? JSON.parse(texto) : {};
}

// Valores que se pueden deducir si vienen vacíos
function completarDerivados(v) {
  const vacio = (k) => v[k] === undefined || String(v[k]).trim() === '';
  if (vacio('club_nombre')) v.club_nombre = 'Club';
  if (vacio('club_nombre_completo') && !vacio('negocio_nombre')) v.club_nombre_completo = `${v.club_nombre} ${v.negocio_nombre}`;
  if (vacio('negocio_firma') && !vacio('negocio_dueno_nombre') && !vacio('negocio_nombre_corto'))
    v.negocio_firma = `— ${v.negocio_dueno_nombre} y el equipo de ${v.negocio_nombre_corto}`;
  if (vacio('club_premio_corto') && !vacio('club_premio')) v.club_premio_corto = String(v.club_premio).replace(/^(un|una|unos|unas)\s+/i, '');
  if (vacio('club_sello_plural') && !vacio('club_sello_nombre')) v.club_sello_plural = `${v.club_sello_nombre}s`;
  // Contadores de reportes: siempre arrancan en 0 en una instalación nueva
  for (const k of Object.keys(v)) if (k.startsWith('rep_')) v[k] = '0';
  return v;
}

function validar(v) {
  const errores = [];
  const avisos = [];
  for (const k of OBLIGATORIOS) if (v[k] === undefined || ['', '+57'].includes(String(v[k]).trim())) errores.push(`${k} está vacío`);
  for (const [k, val] of Object.entries(v)) {
    const s = String(val);
    if (/REEMPLAZAR|xxx|3xx/i.test(s)) errores.push(`${k} todavía tiene un valor de ejemplo: "${s}"`);
    if (/agencia|marketing|campaña|pauta|publicidad/i.test(s)) avisos.push(`${k} usa vocabulario prohibido: "${s}"`);
  }
  if (v.club_link_registro?.includes(FORM_MAESTRA)) errores.push('club_link_registro apunta al formulario de la MAESTRA; use el de esta sub-cuenta');
  if (v.resena_link_google && !/^https:\/\/(g\.page|search\.google|www\.google|maps\.app\.goo\.gl|g\.co)/.test(v.resena_link_google))
    avisos.push(`resena_link_google no parece un enlace de reseñas de Google: ${v.resena_link_google}`);
  for (const k of ['negocio_ticket_promedio', 'negocio_visitas_anio', 'club_meta_visitas', 'resena_espera_minutos', 'rea_dias_inactividad'])
    if (v[k] && !/^\d+$/.test(String(v[k]))) errores.push(`${k} debe ser un número entero sin puntos ni símbolos (hoy: "${v[k]}")`);
  if (v.club_meta_visitas && ![6, 8, 10, 12].includes(Number(v.club_meta_visitas))) avisos.push(`club_meta_visitas = ${v.club_meta_visitas} (lo normal es 6, 8, 10 o 12)`);
  if (v.sis_pin_equipo && !/^\d{4}$/.test(v.sis_pin_equipo)) errores.push('sis_pin_equipo debe tener 4 dígitos');
  if (v.sis_pin_equipo === '3600') avisos.push('sis_pin_equipo = 3600 es el PIN de la demo; ponga uno propio del negocio');
  if (v.negocio_modo && !['visita', 'cita', 'orden'].includes(v.negocio_modo)) errores.push('negocio_modo debe ser visita, cita u orden');
  for (const k of ['sis_modulo_rescatada', 'sis_modulo_sellos', 'sis_modulo_celebraccion'])
    if (v[k] && !['si', 'no'].includes(v[k])) errores.push(`${k} debe ser "si" o "no"`);
  for (const k of ['negocio_whatsapp_club', 'negocio_whatsapp_dueno'])
    if (v[k] && v[k] !== '+57' && !/^\+\d{10,15}$/.test(v[k])) errores.push(`${k} debe ir en formato +57XXXXXXXXXX`);
  if (v.negocio_whatsapp_club && v.negocio_whatsapp_club === v.negocio_whatsapp_dueno)
    avisos.push('la línea del club es igual al WhatsApp del dueño: la línea del club debe ser dedicada');
  return { errores, avisos };
}

// Lee los campos inst_* del contacto del dueño
async function leerEncuesta(loc, telefono) {
  const { customFields = [] } = await ghl('GET', `/locations/${loc}/customFields`);
  const idPorClave = {};
  for (const c of customFields) {
    const clave = String(c.fieldKey || '').replace(/^contact\./, '');
    if (MAPA_ENCUESTA[clave]) idPorClave[c.id] = clave;
  }
  const busca = await ghl('GET', `/contacts/search/duplicate?locationId=${loc}&number=${encodeURIComponent(telefono)}`);
  const contacto = busca.contact;
  if (!contacto) salir(`No hay un contacto con el celular ${telefono} en esta sub-cuenta. ¿El dueño ya llenó la encuesta?`);
  const { contact } = await ghl('GET', `/contacts/${contacto.id}`);
  const respuestas = {};
  for (const cf of contact.customFields || []) {
    const clave = idPorClave[cf.id];
    if (clave && cf.value !== undefined && String(cf.value).trim() !== '') respuestas[MAPA_ENCUESTA[clave]] = String(cf.value).replace(/[^\d]/g, '') || String(cf.value);
  }
  // El premio es texto: no se le quitan las letras
  const campoPremio = (contact.customFields || []).find((cf) => idPorClave[cf.id] === 'inst_premio');
  if (campoPremio?.value) respuestas.club_premio = String(campoPremio.value).trim();
  return respuestas;
}

// Busca el formulario "Ingreso al club" de ESTA sub-cuenta
async function enlaceRegistro(loc) {
  const { forms = [] } = await ghl('GET', `/forms/?locationId=${loc}&limit=50`);
  const f = forms.find((x) => /ingreso al club/i.test(x.name));
  return f ? `https://api.leadconnectorhq.com/widget/form/${f.id}` : undefined;
}

// ---------- programa ----------
async function main() {
  if (!archivo) salir('Falta el archivo JSON del cliente. Copie herramientas/instalacion-plantilla.json a clientes/<negocio>.json y llénelo.');
  const datos = JSON.parse(readFileSync(resolve(archivo), 'utf8'));
  const valores = { ...datos.custom_values };
  delete valores._nota;

  if (flag('--sin-api')) {
    completarDerivados(valores);
    const { errores, avisos } = validar(valores);
    avisos.forEach((a) => console.log(`⚠ ${a}`));
    errores.forEach((e) => console.log(`✖ ${e}`));
    console.log(errores.length ? `\n${errores.length} error(es). Corrija el JSON.` : '\n✔ El JSON está completo.');
    process.exit(errores.length ? 1 : 0);
  }

  leerEnv();
  const loc = process.env.GHL_LOCATION_ID || datos.location_id;
  if (!process.env.GHL_TOKEN) salir('Falta GHL_TOKEN en .env (token de Private Integration de la sub-cuenta del cliente).');
  if (!loc) salir('Falta GHL_LOCATION_ID en .env o "location_id" en el JSON.');
  if (PROTEGIDAS[loc] && !flag('--forzar')) salir(`Esta es la sub-cuenta "${PROTEGIDAS[loc]}". Para escribir aquí use --forzar.`);

  console.log(`Sub-cuenta: ${loc}${PROTEGIDAS[loc] ? ` (${PROTEGIDAS[loc]})` : ''}`);

  const telefono = opcion('--dueno');
  if (telefono) {
    const respuestas = await leerEncuesta(loc, telefono);
    for (const [k, val] of Object.entries(respuestas)) {
      if (valores[k] === undefined || String(valores[k]).trim() === '') {
        valores[k] = val;
        console.log(`  encuesta → ${k} = ${val}`);
      } else if (String(valores[k]) !== String(val)) {
        console.log(`  ⚠ ${k}: el JSON dice "${valores[k]}" y la encuesta "${val}". Se usa el JSON.`);
      }
    }
    // Si cambió el premio por la encuesta, el corto se recalcula
    if (respuestas.club_premio && !datos.custom_values.club_premio_corto) valores.club_premio_corto = '';
  }

  if (!valores.club_link_registro || valores.club_link_registro.includes(FORM_MAESTRA)) {
    const enlace = await enlaceRegistro(loc);
    if (enlace) { valores.club_link_registro = enlace; console.log(`  formulario → club_link_registro = ${enlace}`); }
  }

  completarDerivados(valores);
  const { errores, avisos } = validar(valores);
  avisos.forEach((a) => console.log(`⚠ ${a}`));
  if (errores.length) { errores.forEach((e) => console.log(`✖ ${e}`)); salir(`${errores.length} error(es). No se escribió nada.`); }

  const { customValues = [] } = await ghl('GET', `/locations/${loc}/customValues`);
  const existentes = Object.fromEntries(customValues.map((c) => [c.name, c]));

  const cambios = [];
  const faltantes = [];
  for (const [nombre, valor] of Object.entries(valores)) {
    const actual = existentes[nombre];
    if (!actual) { faltantes.push(nombre); continue; }
    if (String(actual.value ?? '') !== String(valor)) cambios.push({ id: actual.id, nombre, antes: actual.value ?? '', despues: String(valor) });
  }
  const sinValor = customValues.filter((c) => !(c.name in valores) && String(c.value ?? '').trim() === '' && !OPCIONALES_VACIOS.includes(c.name)).map((c) => c.name);

  console.log(`\n${cambios.length} cambio(s):`);
  for (const c of cambios) console.log(`  ${c.nombre}: "${c.antes}" → "${c.despues}"`);
  if (faltantes.length) console.log(`\n⚠ No existen en la sub-cuenta (¿se cargó el snapshot?): ${faltantes.join(', ')}`);
  if (sinValor.length) console.log(`\n⚠ Quedan vacíos en GHL y no están en el JSON: ${sinValor.join(', ')}`);

  if (!flag('--aplicar')) { console.log('\nEnsayo: no se escribió nada. Para escribir, repita con --aplicar.'); return; }

  let ok = 0;
  for (const c of cambios) {
    try {
      await ghl('PUT', `/locations/${loc}/customValues/${c.id}`, { name: c.nombre, value: c.despues });
      ok++;
    } catch (e) { console.log(`✖ ${c.nombre}: ${e.message}`); }
  }
  console.log(`\n✔ ${ok} de ${cambios.length} custom values actualizados.`);
}

main().catch((e) => salir(e.message));
