/* empty css                                             */
import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_QwZ4hMVt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$WhatsAppButton } from '../chunks/WhatsAppButton_Bu1RdmaY.mjs';
import { $ as $$Footer } from '../chunks/Footer_BXr2HzUB.mjs';
/* empty css                                  */
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Linkstation = createComponent(($$result, $$props, $$slots) => {
  const platformLogos = [
    { src: "/icons/facebook.png", alt: "Facebook" },
    { src: "/icons/tiktok.png", alt: "TikTok" },
    { src: "/icons/whatsapp.png", alt: "WhatsApp" },
    { src: "/icons/woocomerce.png", alt: "WooCommerce" },
    { src: "/icons/wordpress.png", alt: "WordPress" }
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LinkStation",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    description: "LinkStation centraliza conversaciones, agentes y ventas en un CRM visual para equipos comerciales."
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "LinkStation | CRM para centralizar conversaciones y ventas", "description": "LinkStation es una landing para presentar un CRM visual que organiza conversaciones, equipo y conversiones desde un solo tablero.", "image": "/images/linkstation-crm.png", "imageAlt": "Vista del dashboard de LinkStation CRM", "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="linkstation-page"> <section class="hero linkstation-hero" id="app-movil"> <div class="linkstation-hero__background" aria-hidden="true"></div> <header class="linkstation-nav"> <div class="container linkstation-nav__shell"> <a class="linkstation-nav__brand" href="/linkstation/" aria-label="Ir al inicio de LinkStation"> <img src="/images/LOGO-CRM@300x.png" alt="LinkStation" width="300" height="72" loading="eager" decoding="async"> </a> <nav class="linkstation-nav__menu" aria-label="Principal de LinkStation"> <a href="#app-movil">App Movil</a> <a href="#integraciones">Integraciones</a> <a href="#agente-kit">AgenteKIT</a> <a href="#precios">Precios</a> <a href="#como-funciona">¿Como funciona?</a> </nav> <a class="linkstation-nav__cta" href="/contactanos/">Iniciar sesion</a> </div> </header> <div class="container linkstation-hero__inner"> <div class="linkstation-copy reveal reveal-up" data-reveal="up"> <h1 aria-label="Centraliza tus ventas y responde 10x mas rapido"> <span>Centraliza tus ventas y</span> <span>responde <span class="linkstation-count" data-linkstation-count aria-hidden="true">10</span>x mas rapido</span> </h1> <p>
Un sistema que organiza a tu equipo, automatiza respuestas con IA y evita que
            pierdas clientes por demorar en responder. Nosotros nos encargamos de toda la
            integracion tecnica.
</p> <div class="linkstation-actions"> <a class="linkstation-button linkstation-button--ghost" href="#overview">
Habla con Ventas
</a> <a class="linkstation-button linkstation-button--primary" href="/contactanos/">
Agendar Demostracion Gratuita
</a> </div> </div> <div class="linkstation-stage reveal reveal-up" data-reveal="up" id="overview"> <figure class="linkstation-shot"> <img src="/images/linkstation-crm.png" alt="Dashboard principal de LinkStation CRM" width="1912" height="913" loading="eager" fetchpriority="high" decoding="async"> </figure> </div> </div> </section> <section class="linkstation-metrics" id="integraciones"> <div class="container linkstation-platforms"> <h2 class="reveal reveal-up" data-reveal="up">Conecta todas tus plataformas a un solo lugar</h2> <div class="linkstation-platforms__marquee" aria-label="Plataformas compatibles"> <div class="linkstation-platforms__track"> ${[...platformLogos, ...platformLogos].map((logo) => renderTemplate`<div class="linkstation-platforms__item"> <img${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")} width="220" height="72" loading="lazy" decoding="async"> </div>`)} </div> </div> <a class="linkstation-integrations-button" href="#agente-kit">
Conoce mas sobre nuestras integraciones
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"></path> </svg> </a> </div> </section> <section class="linkstation-overview" id="agente-kit"> <div class="container linkstation-problem__grid"> <div class="linkstation-problem__media reveal reveal-left" data-reveal="left"> <img src="/images/54.jpg" alt="Vendedora atendiendo conversaciones de clientes desde un CRM conectado a WhatsApp" loading="lazy" decoding="async"> </div> <div class="linkstation-problem__copy reveal reveal-right" data-reveal="right"> <h2>¿Tus vendedores pierden mensajes saltando de app en app?</h2> <p>
Mensajes perdidos, tiempos de respuesta lentos, sin control de metricas,
            dependencia de respuestas manuales repetitivas.
</p> <p>Pierdes dinero frente a competidores mas rapidos.</p> </div> </div> </section> <section class="linkstation-solution" id="como-funciona"> <div class="container linkstation-solution__inner"> <h2 class="reveal reveal-up" data-reveal="up"> <span>Esta es plataforma que pondra</span> <span>fin a tus mensajes perdidos ¿Como?</span> </h2> <div class="linkstation-solution__grid"> <div class="linkstation-solution__list reveal reveal-left" data-reveal="left" data-solution-accordion> <details class="linkstation-solution__item" open> <summary> <span>Control Total</span> <svg aria-hidden="true" viewBox="0 0 16 16" focusable="false"> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"></path> </svg> </summary> <p>
Deja de perder clientes porque un vendedor olvido revisar el Instagram o
                el TikTok. Centralizamos WhatsApp, Meta, LinkedIn y tu sitio web en un
                solo flujo de trabajo. Si te escriben por donde sea, lo respondes desde
                el mismo lugar, sin friccion y sin cambiar de pestana.
</p> </details> <details class="linkstation-solution__item"> <summary> <span>Automatizacion Inteligente</span> <svg aria-hidden="true" viewBox="0 0 16 16" focusable="false"> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"></path> </svg> </summary> <p>
Responde preguntas frecuentes, clasifica oportunidades y activa mensajes
                de seguimiento para que tu equipo no dependa de procesos manuales.
</p> </details> <details class="linkstation-solution__item"> <summary> <span>Asignacion y Colaboracion</span> <svg aria-hidden="true" viewBox="0 0 16 16" focusable="false"> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"></path> </svg> </summary> <p>
Deriva conversaciones al vendedor correcto, reparte tareas y mantiene el
                contexto visible para que todos sepan quien atiende cada oportunidad.
</p> </details> <details class="linkstation-solution__item"> <summary> <span>Supervision y Metricas</span> <svg aria-hidden="true" viewBox="0 0 16 16" focusable="false"> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"></path> </svg> </summary> <p>
Revisa tiempos de respuesta, canales con mas demanda, agentes activos y
                ventas cerradas desde un tablero claro para tomar decisiones rapidas.
</p> </details> <details class="linkstation-solution__item"> <summary> <span>Cero Friccion Tecnica</span> <svg aria-hidden="true" viewBox="0 0 16 16" focusable="false"> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"></path> </svg> </summary> <p>
Nosotros conectamos tus canales, configuramos el flujo comercial y dejamos
                el sistema listo para que tu equipo empiece a vender desde un solo lugar.
</p> </details> </div> <div class="linkstation-solution__media reveal reveal-right" data-reveal="right"> <img src="/images/linkstation-crm-workflow.png" alt="Flujo visual de CRM con bandeja, automatizacion, equipo, metricas y ventas conectadas" loading="lazy" decoding="async"> </div> </div> <div class="linkstation-solution__progress" aria-hidden="true"> <span></span> </div> </div> </section> <section class="linkstation-velocity" aria-label="Diseñado por vendedores para vendedores"> <div class="linkstation-velocity__viewport"> <div class="linkstation-velocity__track" data-linkstation-velocity-track> ${Array.from({ length: 8 }).map(() => renderTemplate`<span>Diseñado por vendedores para vendedores.</span>`)} </div> </div> </section> <section class="linkstation-cta" id="precios"> <div class="container"> <div class="linkstation-cta__panel reveal reveal-up" data-reveal="up"> <h2> <span>Deja de perder ventas por desorden. Descubre cómo</span> <span>LinkStation puede escalar tu operación.</span> </h2> <div class="linkstation-cta__actions"> <a class="linkstation-button linkstation-button--ghost" href="/contactanos/">
Habla con Ventas
</a> <a class="linkstation-button linkstation-button--primary" href="/contactanos/">
Agendar Demostración Gratuita
</a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, {})} ` })} ${renderScript($$result, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/linkstation.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/linkstation.astro", void 0);

const $$file = "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/linkstation.astro";
const $$url = "/linkstation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Linkstation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
