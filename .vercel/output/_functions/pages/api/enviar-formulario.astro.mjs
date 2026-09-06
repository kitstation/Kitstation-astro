export { renderers } from '../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://kitstation.pe", "SSR": true};
const prerender = false;
const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store"
};
const ALLOWED_FORMS = /* @__PURE__ */ new Set([
  "Contacto",
  "Diseño de Página Web",
  "Automatización con IA",
  "Campañas Digitales",
  "Posicionamiento SEO",
  "Consultoría y Soporte",
  "Creación de Contenido",
  "Animación Digital",
  "Diagnóstico de Proyecto",
  "Libro de Reclamaciones"
]);
const EXCLUDED_FIELDS = /* @__PURE__ */ new Set([
  "formulario",
  "pagina_origen",
  "privacy",
  "website",
  "recaptcha_token",
  "recaptcha_action"
]);
function jsonResponse(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: JSON_HEADERS
  });
}
function cleanValue(value) {
  return typeof value === "string" ? value.trim() : "";
}
function fieldLabel(name) {
  const labels = {
    name: "Nombre",
    company: "Empresa",
    email: "Correo electrónico",
    phone: "Celular",
    service: "Servicio de interés",
    need: "Necesidad",
    budget: "Presupuesto aproximado",
    project_description: "Breve descripción del proyecto",
    message: "Mensaje",
    tipo_documento: "Tipo de documento",
    numero_documento: "Número de documento",
    nombres: "Nombres",
    apellidos: "Apellidos",
    departamento: "Departamento",
    provincia: "Provincia",
    distrito: "Distrito",
    direccion: "Dirección",
    correo_electronico: "Correo electrónico",
    telefono: "Teléfono",
    padre_madre: "Padre o madre",
    bien_contratado: "Bien contratado",
    monto_reclamado: "Monto reclamado",
    descripcion: "Descripción",
    pedido: "Pedido"
  };
  return labels[name] ?? name.replace(/[_-]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
function htmlValue(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;").replace(/\r?\n/g, "<br />");
}
function getEnv(name) {
  const value = Object.assign(__vite_import_meta_env__, { OS: process.env.OS })[name];
  return typeof value === "string" ? value.trim() : "";
}
function getRecipients() {
  const recipients = getEnv("MAIL_TO").split(",").map((item) => item.trim()).filter(Boolean);
  return recipients;
}
function getMissingEnvVars() {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_FROM"];
  return required.filter((name) => !getEnv(name));
}
function getRequestMetadata(request) {
  return {
    ip: request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? "No disponible",
    userAgent: request.headers.get("user-agent") ?? "No disponible",
    referer: request.headers.get("referer") ?? "No disponible"
  };
}
function getSubmitterName(entries) {
  return entries.get("name") || entries.get("company") || entries.get("nombres") || entries.get("correo_electronico") || entries.get("email") || "cliente";
}
async function sendInternalMail(transporter, entries, metadata) {
  const formName = entries.get("formulario") ?? "Formulario";
  const pageOrigin = entries.get("pagina_origen") || metadata.referer;
  const recipients = getRecipients();
  const details = [...entries.entries()].filter(([key]) => !EXCLUDED_FIELDS.has(key)).map(
    ([key, value]) => `<tr><td style="padding:8px 12px;border:1px solid #d7deea;font-weight:700;">${htmlValue(fieldLabel(key))}</td><td style="padding:8px 12px;border:1px solid #d7deea;">${htmlValue(value || "No indicado")}</td></tr>`
  ).join("");
  await transporter.sendMail({
    from: getEnv("MAIL_FROM"),
    to: recipients,
    replyTo: entries.get("email") || entries.get("correo_electronico") || void 0,
    subject: `Nuevo mensaje desde Kitstation: ${formName}`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#111827;">
        <h2>Nuevo envío recibido</h2>
        <p>Se recibió un nuevo formulario desde Kitstation.</p>
        <table style="border-collapse:collapse;width:100%;max-width:760px;">
          <tbody>${details}</tbody>
        </table>
        <h3 style="margin-top:24px;">Datos de la solicitud</h3>
        <ul>
          <li><strong>Formulario:</strong> ${htmlValue(formName)}</li>
          <li><strong>Página de origen:</strong> ${htmlValue(pageOrigin || "No disponible")}</li>
          <li><strong>IP:</strong> ${htmlValue(metadata.ip)}</li>
          <li><strong>User-Agent:</strong> ${htmlValue(metadata.userAgent)}</li>
        </ul>
      </div>
    `
  });
}
async function sendAutoReply(transporter, entries) {
  const recipient = entries.get("email") || entries.get("correo_electronico");
  if (!recipient) return;
  const senderName = getSubmitterName(entries);
  await transporter.sendMail({
    from: getEnv("MAIL_FROM"),
    to: recipient,
    subject: "Gracias por escribirnos | Kitstation",
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#111827;">
        <p>Hola ${htmlValue(senderName)},</p>
        <p>Gracias por escribirnos. Recibimos tu mensaje correctamente y nos pondremos en contacto contigo a la brevedad.</p>
        <p>Equipo Kitstation</p>
      </div>
    `
  });
}
async function handleSubmit(request) {
  const missingEnv = getMissingEnvVars();
  if (missingEnv.length > 0 || getRecipients().length === 0) {
    return jsonResponse(500, {
      success: false,
      message: "Configuración SMTP incompleta."
    });
  }
  const formData = await request.formData();
  const honeypot = cleanValue(formData.get("website"));
  if (honeypot) {
    return jsonResponse(200, { success: true });
  }
  const entries = /* @__PURE__ */ new Map();
  for (const [key, value] of formData.entries()) {
    entries.set(key, cleanValue(value));
  }
  const metadata = getRequestMetadata(request);
  const formName = entries.get("formulario") || "";
  if (!ALLOWED_FORMS.has(formName)) {
    return jsonResponse(400, {
      success: false,
      message: "Formulario no válido."
    });
  }
  const email = entries.get("email") || entries.get("correo_electronico") || "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return jsonResponse(400, {
      success: false,
      message: "El correo electrónico no es válido."
    });
  }
  const nodemailerModule = await import('nodemailer');
  const nodemailer = nodemailerModule.default ?? nodemailerModule;
  const transporter = nodemailer.createTransport({
    host: getEnv("SMTP_HOST"),
    port: Number(getEnv("SMTP_PORT")),
    secure: Number(getEnv("SMTP_PORT")) === 465,
    auth: {
      user: getEnv("SMTP_USER"),
      pass: getEnv("SMTP_PASS")
    }
  });
  await sendInternalMail(transporter, entries, metadata);
  await sendAutoReply(transporter, entries);
  return jsonResponse(200, {
    success: true,
    message: "Mensaje enviado correctamente."
  });
}
const POST = async ({ request }) => {
  try {
    return await handleSubmit(request);
  } catch (error) {
    console.error("Error sending form", error);
    return jsonResponse(500, {
      success: false,
      message: "No se pudo enviar el formulario."
    });
  }
};
const OPTIONS = async () => new Response(null, {
  status: 204,
  headers: {
    ...JSON_HEADERS,
    Allow: "POST, OPTIONS"
  }
});
const GET = async () => jsonResponse(405, {
  success: false,
  message: "Método no permitido."
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  OPTIONS,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
