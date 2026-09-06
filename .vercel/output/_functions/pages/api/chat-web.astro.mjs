export { renderers } from '../../renderers.mjs';

const prerender = false;
const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store"
};
const MODEL = "gpt-4o-mini";
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const SYSTEM_PROMPT = `
Eres el asistente comercial de Kitstation.
Tu objetivo es informar, orientar y vender servicios de páginas web.

Reglas:
- Responde siempre en español.
- Sé breve, clara y útil.
- Explica beneficios, tiempos, tipos de webs y siguientes pasos.
- Si detectas intención de compra, invita a hablar por WhatsApp o dejar sus datos.
- No inventes precios exactos si no fueron dados.
- Si preguntan por tipo de web, sugiere opciones como tienda online, servicios, restaurante, blog, portafolio o agenda de citas.
- Mantén un tono comercial, amable y directo.
`;
function jsonResponse(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: JSON_HEADERS
  });
}
function getApiKey() {
  const value = undefined                              ;
  return typeof value === "string" ? value.trim() : "";
}
function sanitizeHistory(value) {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (item) => !!item && typeof item === "object" && item.role !== void 0 && item.content !== void 0
  ).filter((item) => (item.role === "user" || item.role === "assistant") && typeof item.content === "string").map((item) => ({
    role: item.role,
    content: item.content.trim()
  })).filter((item) => item.content.length > 0).slice(-10);
}
const POST = async ({ request }) => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) {
      return jsonResponse(500, {
        success: false,
        message: "Falta configurar OPENAI_API_KEY en el servidor."
      });
    }
    const body = await request.json().catch(() => null);
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const history = sanitizeHistory(body?.history);
    if (!message) {
      return jsonResponse(400, {
        success: false,
        message: "Debes enviar un mensaje."
      });
    }
    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.7,
        max_tokens: 220,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...history,
          { role: "user", content: message }
        ]
      })
    });
    const result = await response.json().catch(() => null);
    const reply = result?.choices?.[0]?.message?.content;
    if (!response.ok || typeof reply !== "string" || !reply.trim()) {
      console.error("OpenAI chat error", result);
      return jsonResponse(502, {
        success: false,
        message: "No se pudo obtener respuesta del asistente."
      });
    }
    return jsonResponse(200, {
      success: true,
      reply: reply.trim(),
      model: MODEL
    });
  } catch (error) {
    console.error("Chat API error", error);
    return jsonResponse(500, {
      success: false,
      message: "Ocurrió un error procesando el chat."
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
