/* empty css                                             */
import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_QwZ4hMVt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$WhatsAppButton } from '../chunks/WhatsAppButton_Bu1RdmaY.mjs';
import { $ as $$Footer } from '../chunks/Footer_BXr2HzUB.mjs';
/* empty css                                  */
/* empty css                                                */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$LandingPaginasWebs = createComponent(async ($$result, $$props, $$slots) => {
  const whatsappNumber = "51901637020";
  const buildWhatsAppLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const siteTypeLinks = [
    { label: "Tienda online", href: buildWhatsAppLink("Hola, quiero mi tienda online") },
    { label: "Servicios", href: buildWhatsAppLink("Hola, quiero una web de servicios") },
    { label: "Restaurante", href: buildWhatsAppLink("Hola, quiero una web para mi restaurante") },
    { label: "Consultor\xEDas", href: buildWhatsAppLink("Hola, quiero una web para mi consultor\xEDa") },
    { label: "Eventos", href: buildWhatsAppLink("Hola, quiero una web para eventos") },
    { label: "Blogs", href: buildWhatsAppLink("Hola, quiero mi blog") },
    { label: "Otros", href: buildWhatsAppLink("Hola, quiero una p\xE1gina web") },
    { label: "Portafolio", href: buildWhatsAppLink("Hola, quiero mi portafolio") },
    { label: "Agendar Citas", href: buildWhatsAppLink("Hola, quiero una web para agendar citas") }
  ];
  const benefitVisuals = [
    {
      title: "Dise\xF1o inteligente y personalizado",
      image: "/wp-content/uploads/2025/11/kitcito-landing.webp"
    },
    {
      title: "Webs optimizadas y seguras",
      image: "/wp-content/uploads/2025/11/esfera-landing-3.webp"
    },
    {
      title: "100% adaptables a m\xF3viles",
      image: "/wp-content/uploads/2025/11/iphone-landing.webp"
    }
  ];
  const featureCards = [
    {
      title: "Tienda online",
      description: "Vende tus productos y gestiona tu inventario con una plataforma de comercio electr\xF3nico segura y f\xE1cil de usar.",
      image: "/wp-content/uploads/2026/02/zapatillas-3.webp"
    },
    {
      title: "Correos personalizados",
      description: "Potencia tu identidad corporativa con correos profesionales que generen confianza y autoridad en cada mensaje que env\xEDes.",
      image: "/wp-content/uploads/2026/02/correo-personalizado-3.webp"
    },
    {
      title: "Blog profesional",
      description: "Comparte contenido de valor, mejora tu posicionamiento en buscadores y conecta con tu audiencia de manera estrat\xE9gica y constante.",
      image: "/wp-content/uploads/2026/02/blog-1.webp"
    },
    {
      title: "Software para agendar citas",
      description: "Automatiza tus reservas y organiza tu calendario con un sistema interactivo dise\xF1ado para optimizar el tiempo de tu negocio.",
      image: "/wp-content/uploads/2026/02/citas-1.webp"
    }
  ];
  const principles = [
    {
      title: "Identidad visual inmersiva",
      text: "Dise\xF1amos interfaces que respiran el ADN de tu marca. Sin plantillas gen\xE9ricas; aplicamos direcci\xF3n de arte y narrativa visual."
    },
    {
      title: "Ingenier\xEDa a medida",
      text: "Desarrollo t\xE9cnico enfocado en tus objetivos comerciales. Implementamos soluciones espec\xEDficas y escalables para crecer."
    },
    {
      title: "Adaptabilidad fluida",
      text: "Garantizamos una navegaci\xF3n intuitiva en cualquier entorno. Tu web se adapta perfectamente a cada dispositivo."
    },
    {
      title: "Rendimiento estrat\xE9gico",
      text: "Entregamos una plataforma preparada para posicionar y convertir. Creada para competir en los motores de b\xFAsqueda."
    }
  ];
  const interactiveProjects = [
    {
      title: "Bodega Olcese",
      href: "https://bodegaolcese.pe/",
      image: "/wp-content/uploads/2025/07/Captura-de-pantalla-2025-0sssss7-08-074800.png",
      alt: "Captura del sitio web Bodega Olcese"
    },
    {
      title: "Exiven",
      href: "https://www.exiven.com/",
      image: "/wp-content/uploads/2025/07/Captura-de-pantalla-2025-07-08-074717.png",
      alt: "Captura del sitio web Exiven"
    },
    {
      title: "Pulsera Tyvek",
      href: "https://pulserastyvek.pe/",
      image: "/wp-content/uploads/2025/07/Captura-de-pantalla-2025-07-08-074736.png",
      alt: "Captura del sitio web Pulsera Tyvek"
    },
    {
      title: "Uncult Culture",
      href: "https://uncultculture.com/",
      image: "/wp-content/uploads/2025/07/uncultculture.png",
      alt: "Captura del sitio web Uncult Culture"
    },
    {
      title: "J y R Agro",
      href: "https://jyragrotech.com/",
      image: "/wp-content/uploads/2026/01/Captura-1300x652.png",
      alt: "Captura del sitio web J y R Agro"
    },
    {
      title: "Evil World",
      href: "https://evilworld.pe/",
      image: "/wp-content/uploads/2026/04/Captur1a-1-1-1300x655.webp",
      alt: "Captura del sitio web Evil World"
    },
    {
      title: "Versounited",
      href: "https://versounited.com/",
      image: "/wp-content/uploads/2026/04/versounited-1300x648.webp",
      alt: "Captura del sitio web Versounited"
    },
    {
      title: "Kitstation",
      href: "https://kitstation.pe/",
      image: "/wp-content/uploads/2026/04/KIT-1300x625.png",
      alt: "Captura del sitio web Kitstation"
    }
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"><\/script> <script>\n  document.querySelectorAll("[data-hero-selector-toggle]").forEach((toggle) => {\n    const selectorId = toggle.getAttribute("aria-controls");\n    const selector = selectorId ? document.getElementById(selectorId) : null;\n\n    if (!selector) return;\n\n    toggle.addEventListener("click", () => {\n      const willOpen = selector.hasAttribute("hidden");\n\n      if (willOpen) {\n        selector.removeAttribute("hidden");\n        requestAnimationFrame(() => selector.classList.add("is-visible"));\n      } else {\n        selector.classList.remove("is-visible");\n        selector.setAttribute("hidden", "");\n      }\n\n      toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");\n\n      if (willOpen) {\n        selector.scrollIntoView({ behavior: "smooth", block: "nearest" });\n      }\n    });\n  });\n\n  document.querySelectorAll("[data-sales-chat]").forEach((chat) => {\n    const messages = chat.querySelector("[data-chat-messages]");\n    const input = chat.querySelector(".landing-webs__chat-input input");\n    const sendButton = chat.querySelector("[data-chat-send]") || chat.querySelector(".landing-webs__chat-input button");\n    const promptButtons = Array.from(chat.querySelectorAll(".landing-webs__chat-actions button"));\n\n    if (!messages || !input || !sendButton) return;\n\n    const history = [\n      {\n        role: "assistant",\n        content: "Hola. Si, podemos ayudarte a crear una web que venda, informe o automatice procesos."\n      }\n    ];\n\n    const appendBubble = (role, content) => {\n      const bubble = document.createElement("div");\n      bubble.className = `landing-webs__chat-bubble landing-webs__chat-bubble--${role}`;\n      bubble.textContent = content;\n      messages.appendChild(bubble);\n      messages.scrollTop = messages.scrollHeight;\n    };\n\n    const setSending = (sending) => {\n      sendButton.disabled = sending;\n      input.disabled = sending;\n      promptButtons.forEach((button) => {\n        button.disabled = sending;\n      });\n      sendButton.textContent = sending ? "Enviando..." : "Enviar";\n    };\n\n    const sendMessage = async (text) => {\n      const message = text.trim();\n      if (!message) return;\n\n      appendBubble("user", message);\n      history.push({ role: "user", content: message });\n      input.value = "";\n      setSending(true);\n\n      try {\n        const response = await fetch("/api/chat-web", {\n          method: "POST",\n          headers: {\n            "Content-Type": "application/json",\n            Accept: "application/json"\n          },\n          body: JSON.stringify({\n            message,\n            history: history.slice(-10)\n          })\n        });\n\n        const result = await response.json().catch(() => null);\n        const reply =\n          response.ok && result?.success && typeof result.reply === "string"\n            ? result.reply.trim()\n            : "Ahora mismo no puedo responder desde el chat. Si quieres, escr\xEDbenos y te orientamos sobre la web que necesitas.";\n\n        appendBubble("bot", reply);\n        history.push({ role: "assistant", content: reply });\n      } catch (_error) {\n        const fallback =\n          "Hubo un problema de conexi\xF3n. Si quieres, cu\xE9ntanos qu\xE9 tipo de web necesitas y te ayudamos por WhatsApp o por contacto.";\n        appendBubble("bot", fallback);\n        history.push({ role: "assistant", content: fallback });\n      } finally {\n        setSending(false);\n        input.focus();\n      }\n    };\n\n    sendButton.addEventListener("click", () => {\n      sendMessage(input.value);\n    });\n\n    input.addEventListener("keydown", (event) => {\n      if (event.key === "Enter") {\n        event.preventDefault();\n        sendMessage(input.value);\n      }\n    });\n\n    promptButtons.forEach((button) => {\n      button.addEventListener("click", () => {\n        sendMessage(button.dataset.chatPrompt || button.textContent || "");\n      });\n    });\n  });\n\n  document.querySelectorAll("[data-web-carousel]").forEach((carousel) => {\n    const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));\n    const prevButton = carousel.querySelector("[data-carousel-prev]");\n    const nextButton = carousel.querySelector("[data-carousel-next]");\n\n    if (!slides.length || !prevButton || !nextButton) return;\n\n    let activeIndex = 0;\n    let autoplayId;\n\n    const update = () => {\n      const total = slides.length;\n\n      slides.forEach((slide, index) => {\n        let offset = index - activeIndex;\n\n        if (offset > total / 2) offset -= total;\n        if (offset < -total / 2) offset += total;\n\n        slide.dataset.offset = String(offset);\n        slide.setAttribute("aria-hidden", offset === 0 ? "false" : "true");\n      });\n    };\n\n    const goTo = (nextIndex) => {\n      activeIndex = (nextIndex + slides.length) % slides.length;\n      update();\n    };\n\n    const startAutoplay = () => {\n      clearInterval(autoplayId);\n      autoplayId = window.setInterval(() => {\n        goTo(activeIndex + 1);\n      }, 4200);\n    };\n\n    prevButton.addEventListener("click", () => {\n      goTo(activeIndex - 1);\n      startAutoplay();\n    });\n\n    nextButton.addEventListener("click", () => {\n      goTo(activeIndex + 1);\n      startAutoplay();\n    });\n\n    carousel.addEventListener("mouseenter", () => clearInterval(autoplayId));\n    carousel.addEventListener("mouseleave", startAutoplay);\n\n    update();\n    startAutoplay();\n  });\n<\/script> '], ["", ' <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"><\/script> <script>\n  document.querySelectorAll("[data-hero-selector-toggle]").forEach((toggle) => {\n    const selectorId = toggle.getAttribute("aria-controls");\n    const selector = selectorId ? document.getElementById(selectorId) : null;\n\n    if (!selector) return;\n\n    toggle.addEventListener("click", () => {\n      const willOpen = selector.hasAttribute("hidden");\n\n      if (willOpen) {\n        selector.removeAttribute("hidden");\n        requestAnimationFrame(() => selector.classList.add("is-visible"));\n      } else {\n        selector.classList.remove("is-visible");\n        selector.setAttribute("hidden", "");\n      }\n\n      toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");\n\n      if (willOpen) {\n        selector.scrollIntoView({ behavior: "smooth", block: "nearest" });\n      }\n    });\n  });\n\n  document.querySelectorAll("[data-sales-chat]").forEach((chat) => {\n    const messages = chat.querySelector("[data-chat-messages]");\n    const input = chat.querySelector(".landing-webs__chat-input input");\n    const sendButton = chat.querySelector("[data-chat-send]") || chat.querySelector(".landing-webs__chat-input button");\n    const promptButtons = Array.from(chat.querySelectorAll(".landing-webs__chat-actions button"));\n\n    if (!messages || !input || !sendButton) return;\n\n    const history = [\n      {\n        role: "assistant",\n        content: "Hola. Si, podemos ayudarte a crear una web que venda, informe o automatice procesos."\n      }\n    ];\n\n    const appendBubble = (role, content) => {\n      const bubble = document.createElement("div");\n      bubble.className = \\`landing-webs__chat-bubble landing-webs__chat-bubble--\\${role}\\`;\n      bubble.textContent = content;\n      messages.appendChild(bubble);\n      messages.scrollTop = messages.scrollHeight;\n    };\n\n    const setSending = (sending) => {\n      sendButton.disabled = sending;\n      input.disabled = sending;\n      promptButtons.forEach((button) => {\n        button.disabled = sending;\n      });\n      sendButton.textContent = sending ? "Enviando..." : "Enviar";\n    };\n\n    const sendMessage = async (text) => {\n      const message = text.trim();\n      if (!message) return;\n\n      appendBubble("user", message);\n      history.push({ role: "user", content: message });\n      input.value = "";\n      setSending(true);\n\n      try {\n        const response = await fetch("/api/chat-web", {\n          method: "POST",\n          headers: {\n            "Content-Type": "application/json",\n            Accept: "application/json"\n          },\n          body: JSON.stringify({\n            message,\n            history: history.slice(-10)\n          })\n        });\n\n        const result = await response.json().catch(() => null);\n        const reply =\n          response.ok && result?.success && typeof result.reply === "string"\n            ? result.reply.trim()\n            : "Ahora mismo no puedo responder desde el chat. Si quieres, escr\xEDbenos y te orientamos sobre la web que necesitas.";\n\n        appendBubble("bot", reply);\n        history.push({ role: "assistant", content: reply });\n      } catch (_error) {\n        const fallback =\n          "Hubo un problema de conexi\xF3n. Si quieres, cu\xE9ntanos qu\xE9 tipo de web necesitas y te ayudamos por WhatsApp o por contacto.";\n        appendBubble("bot", fallback);\n        history.push({ role: "assistant", content: fallback });\n      } finally {\n        setSending(false);\n        input.focus();\n      }\n    };\n\n    sendButton.addEventListener("click", () => {\n      sendMessage(input.value);\n    });\n\n    input.addEventListener("keydown", (event) => {\n      if (event.key === "Enter") {\n        event.preventDefault();\n        sendMessage(input.value);\n      }\n    });\n\n    promptButtons.forEach((button) => {\n      button.addEventListener("click", () => {\n        sendMessage(button.dataset.chatPrompt || button.textContent || "");\n      });\n    });\n  });\n\n  document.querySelectorAll("[data-web-carousel]").forEach((carousel) => {\n    const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));\n    const prevButton = carousel.querySelector("[data-carousel-prev]");\n    const nextButton = carousel.querySelector("[data-carousel-next]");\n\n    if (!slides.length || !prevButton || !nextButton) return;\n\n    let activeIndex = 0;\n    let autoplayId;\n\n    const update = () => {\n      const total = slides.length;\n\n      slides.forEach((slide, index) => {\n        let offset = index - activeIndex;\n\n        if (offset > total / 2) offset -= total;\n        if (offset < -total / 2) offset += total;\n\n        slide.dataset.offset = String(offset);\n        slide.setAttribute("aria-hidden", offset === 0 ? "false" : "true");\n      });\n    };\n\n    const goTo = (nextIndex) => {\n      activeIndex = (nextIndex + slides.length) % slides.length;\n      update();\n    };\n\n    const startAutoplay = () => {\n      clearInterval(autoplayId);\n      autoplayId = window.setInterval(() => {\n        goTo(activeIndex + 1);\n      }, 4200);\n    };\n\n    prevButton.addEventListener("click", () => {\n      goTo(activeIndex - 1);\n      startAutoplay();\n    });\n\n    nextButton.addEventListener("click", () => {\n      goTo(activeIndex + 1);\n      startAutoplay();\n    });\n\n    carousel.addEventListener("mouseenter", () => clearInterval(autoplayId));\n    carousel.addEventListener("mouseleave", startAutoplay);\n\n    update();\n    startAutoplay();\n  });\n<\/script> '])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Landing P\xE1ginas Webs | KitStation", "description": "Landing de p\xE1ginas web de KitStation para negocios que necesitan una plataforma digital \xFAnica, veloz y lista para convertir.", "data-astro-cid-pb76glpp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="landing-webs" data-astro-cid-pb76glpp> <section class="landing-webs__hero" id="iniciar" data-astro-cid-pb76glpp> <div class="landing-webs__hero-copy container" data-astro-cid-pb76glpp> <div class="landing-webs__hero-media" data-astro-cid-pb76glpp> <video class="landing-webs__hero-video" autoplay muted playsinline loop preload="metadata" data-astro-cid-pb76glpp> <source src="/wp-content/uploads/2026/03/PORTADA-LANDIG-WEB-12-reducid.mp4" type="video/mp4" data-astro-cid-pb76glpp> </video> </div> <h1 data-astro-cid-pb76glpp> <span data-astro-cid-pb76glpp>Creamos tu página web</span> <span data-astro-cid-pb76glpp>profesional</span> </h1> <div class="landing-webs__hero-actions" data-astro-cid-pb76glpp> <a class="landing-webs__hero-action landing-webs__hero-action--primary" href="/contactanos/" data-astro-cid-pb76glpp>
Hablar con un experto
</a> <button class="landing-webs__hero-action landing-webs__hero-action--secondary" type="button" data-hero-selector-toggle aria-controls="hero-selector" aria-expanded="false" data-astro-cid-pb76glpp> <span data-astro-cid-pb76glpp>Comenzar a crear</span> <span class="landing-webs__hero-action-caret" aria-hidden="true" data-astro-cid-pb76glpp></span> </button> </div> <div class="landing-webs__hero-selector" id="hero-selector" hidden data-astro-cid-pb76glpp> <p class="landing-webs__hero-question" data-astro-cid-pb76glpp>Qué tipo de <strong data-astro-cid-pb76glpp>sitio web</strong> te gustaría crear?</p> <div class="landing-webs__chips" aria-label="Tipos de sitio" data-astro-cid-pb76glpp> ${siteTypeLinks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} target="_blank" rel="noreferrer" data-astro-cid-pb76glpp>${item.label}</a>`)} </div> </div> </div> </section> <section class="landing-webs__benefits" data-astro-cid-pb76glpp> <div class="container" data-astro-cid-pb76glpp> <header class="landing-webs__section-head" data-astro-cid-pb76glpp> <h2 data-astro-cid-pb76glpp>El beneficio de trabajar con un equipo<br data-astro-cid-pb76glpp>que entiende tu negocio</h2> </header> <div class="landing-webs__benefit-panel" data-astro-cid-pb76glpp> ${benefitVisuals.map((card) => renderTemplate`<article class="landing-webs__benefit-node" data-astro-cid-pb76glpp> <img${addAttribute(card.image, "src")}${addAttribute(card.title, "alt")} loading="lazy" data-astro-cid-pb76glpp> <div class="landing-webs__benefit-hover" data-astro-cid-pb76glpp> <h3 data-astro-cid-pb76glpp>${card.title}</h3> </div> </article>`)} </div> </div> </section> <section class="landing-webs__statement" data-astro-cid-pb76glpp> <div class="container landing-webs__statement-shell" data-astro-cid-pb76glpp> <header class="landing-webs__section-head" data-astro-cid-pb76glpp> <h2 data-astro-cid-pb76glpp>Diseñamos sin límites la web exacta que necesitas.</h2> <p data-astro-cid-pb76glpp>
Eleva tu marca con una web estratégica de alto nivel. Ya sea para vender online o escalar tu
            negocio, en KitStation lo hacemos realidad. Sin plantillas: construimos la plataforma exacta
            que necesitas para diferenciarte.
</p> </header> <a class="landing-webs__cta-link" href="/contactanos/" data-astro-cid-pb76glpp>Empezar</a> <div class="landing-webs__statement-viewer" aria-label="Visor 3D de iPhone" data-astro-cid-pb76glpp> ${renderComponent($$result2, "model-viewer", "model-viewer", { "class": "landing-webs__model-viewer", "src": "/apple_iphone_17_pro_max.glb", "alt": "Modelo 3D de iPhone", "camera-controls": true, "touch-action": "pan-y", "interaction-prompt": "auto", "shadow-intensity": "0.9", "camera-orbit": "30deg 75deg auto", "min-camera-orbit": "auto 55deg auto", "max-camera-orbit": "auto 120deg auto", "field-of-view": "26deg", "exposure": "1.08", "data-astro-cid-pb76glpp": true })} </div> </div> </section> <section class="landing-webs__interactive" data-astro-cid-pb76glpp> <div class="container landing-webs__interactive-shell" data-astro-cid-pb76glpp> <div class="landing-webs__interactive-copy" data-astro-cid-pb76glpp> <p class="landing-webs__section-kicker" data-astro-cid-pb76glpp>Experiencia de Producto Interactiva</p> <h2 data-astro-cid-pb76glpp>Transformamos la observación pasiva en una experiencia táctil digital.</h2> <a class="landing-webs__cta-link landing-webs__cta-link--dark" href="/contactanos/" data-astro-cid-pb76glpp>
Personalizar mi experiencia
</a> </div> <div class="landing-webs__interactive-visual" data-astro-cid-pb76glpp> <div class="landing-webs__web-carousel" data-web-carousel aria-label="Carrusel 3D de proyectos web" data-astro-cid-pb76glpp> <button class="landing-webs__web-carousel-control landing-webs__web-carousel-control--prev" type="button" aria-label="Proyecto anterior" data-carousel-prev data-astro-cid-pb76glpp> <span aria-hidden="true" data-astro-cid-pb76glpp>&#8249;</span> </button> <div class="landing-webs__web-carousel-stage" data-carousel-stage data-astro-cid-pb76glpp> ${interactiveProjects.map((project, index) => renderTemplate`<article class="landing-webs__web-slide" data-carousel-slide${addAttribute(index, "data-index")}${addAttribute(project.title, "aria-label")} data-astro-cid-pb76glpp> <a${addAttribute(project.href, "href")} target="_blank" rel="noreferrer"${addAttribute(`Abrir ${project.title}`, "aria-label")} data-astro-cid-pb76glpp> <img${addAttribute(project.image, "src")}${addAttribute(project.alt, "alt")} loading="lazy" data-astro-cid-pb76glpp> <div class="landing-webs__web-slide-meta" data-astro-cid-pb76glpp> <p data-astro-cid-pb76glpp>${project.title}</p> </div> </a> </article>`)} </div> <button class="landing-webs__web-carousel-control landing-webs__web-carousel-control--next" type="button" aria-label="Proyecto siguiente" data-carousel-next data-astro-cid-pb76glpp> <span aria-hidden="true" data-astro-cid-pb76glpp>&#8250;</span> </button> </div> </div> </div> </section> <section class="landing-webs__chat" data-astro-cid-pb76glpp> <div class="container landing-webs__chat-shell" data-astro-cid-pb76glpp> <div class="landing-webs__chat-copy" data-astro-cid-pb76glpp> <p class="landing-webs__section-kicker" data-astro-cid-pb76glpp>Chat Inteligente IA</p> <h2 data-astro-cid-pb76glpp>Sistemas de asistencia inteligente para responder dentro de tu web.</h2> <a class="landing-webs__cta-link" href="/contactanos/" data-astro-cid-pb76glpp>Empezar ahora</a> </div> <div class="landing-webs__chat-widget" data-sales-chat data-astro-cid-pb76glpp> <div class="landing-webs__chat-header" data-astro-cid-pb76glpp>Prueba nuestra IA para ventas!</div> <div class="landing-webs__chat-messages" data-chat-messages data-astro-cid-pb76glpp> <div class="landing-webs__chat-bubble landing-webs__chat-bubble--user" data-astro-cid-pb76glpp>Hola</div> <div class="landing-webs__chat-bubble landing-webs__chat-bubble--bot" data-astro-cid-pb76glpp>
Hola. Si, podemos ayudarte a crear una web que venda, informe o automatice procesos.
</div> </div> <div class="landing-webs__chat-actions" data-astro-cid-pb76glpp> <button type="button" data-chat-prompt="Hola" data-astro-cid-pb76glpp>Hola</button> <button type="button" data-astro-cid-pb76glpp>Cómo funciona este chat?</button> </div> <div class="landing-webs__chat-input" data-astro-cid-pb76glpp> <input type="text" placeholder="Escribe tu mensaje..." data-astro-cid-pb76glpp> <button type="button" data-astro-cid-pb76glpp>Enviar</button> </div> </div> </div> </section> <section class="landing-webs__principles" data-astro-cid-pb76glpp> <div class="container landing-webs__principles-shell" data-astro-cid-pb76glpp> <div class="landing-webs__principles-copy" data-astro-cid-pb76glpp> <h2 data-astro-cid-pb76glpp>Tu marca, convertida en experiencia digital.</h2> <p data-astro-cid-pb76glpp>
Diseño estratégico y desarrollo técnico sin ataduras. Construimos plataformas web que fusionan
            estética inmersiva con funcionalidad de alto rendimiento.
</p> <div class="landing-webs__principles-grid" data-astro-cid-pb76glpp> ${principles.map((item) => renderTemplate`<article data-astro-cid-pb76glpp> <h3 data-astro-cid-pb76glpp>${item.title}</h3> <p data-astro-cid-pb76glpp>${item.text}</p> </article>`)} </div> </div> <div class="landing-webs__principles-image" data-astro-cid-pb76glpp> <img src="/wp-content/uploads/2026/01/img-diseno-web-1.webp" alt="Visual de diseño web" loading="lazy" data-astro-cid-pb76glpp> </div> </div> </section> <section class="landing-webs__features" data-astro-cid-pb76glpp> <div class="container" data-astro-cid-pb76glpp> <header class="landing-webs__section-head" data-astro-cid-pb76glpp> <h2 data-astro-cid-pb76glpp>Descubre todas las herramientas que ofrecemos para tu negocio</h2> </header> <div class="landing-webs__feature-grid" data-astro-cid-pb76glpp> ${featureCards.map((card) => renderTemplate`<article class="landing-webs__feature-card" data-astro-cid-pb76glpp> <img${addAttribute(card.image, "src")}${addAttribute(card.title, "alt")} loading="lazy" data-astro-cid-pb76glpp> <div class="landing-webs__feature-card-copy" data-astro-cid-pb76glpp> <h3 data-astro-cid-pb76glpp>${card.title}</h3> <p data-astro-cid-pb76glpp>${card.description}</p> </div> </article>`)} </div> </div> </section> <section class="landing-webs__closing" data-astro-cid-pb76glpp> <div class="container landing-webs__closing-shell" data-astro-cid-pb76glpp> <h2 data-astro-cid-pb76glpp>Más resultados para tus proyectos</h2> <a class="landing-webs__cta-link" href="/contactanos/" data-astro-cid-pb76glpp>Empezar ahora</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-pb76glpp": true })} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-pb76glpp": true })} ` }));
}, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/landing-paginas-webs.astro", void 0);

const $$file = "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/landing-paginas-webs.astro";
const $$url = "/landing-paginas-webs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LandingPaginasWebs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
