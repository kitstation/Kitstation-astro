/* empty css                                             */
import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_QwZ4hMVt.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_pAJkpxBP.mjs';
import { $ as $$HeaderKit } from '../chunks/HeaderKit_yynNF4R5.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_BVL8tPPT.mjs';
export { renderers } from '../renderers.mjs';

const $$Faqs = createComponent(($$result, $$props, $$slots) => {
  const faqsData = [
    {
      question: "\xBFQu\xE9 servicios de marketing digital y desarrollo web ofrece KitStation en Per\xFA?",
      answer: "Dise\xF1amos ecosistemas digitales completos para escalar negocios. Nuestro enfoque incluye el desarrollo de p\xE1ginas y sistemas web a medida, gesti\xF3n estrat\xE9gica de pauta digital (Google Ads y Meta Ads), y optimizaci\xF3n de ventas mediante la automatizaci\xF3n de WhatsApp y sistemas CRM personalizados. Atendemos a empresas en Lima y todo el Per\xFA, adaptando cada soluci\xF3n a su etapa comercial."
    },
    {
      question: "\xBFEs mejor invertir en una p\xE1gina web profesional o en campa\xF1as de Ads?",
      answer: "Ambas herramientas cumplen roles distintos en un embudo de ventas exitoso. Una p\xE1gina web profesional o landing page es tu motor de conversi\xF3n (donde el cliente decide comprar), mientras que Google Ads y Meta Ads son el combustible que genera tr\xE1fico hacia ella. En KitStation desarrollamos tu plataforma web y activamos campa\xF1as publicitarias de alto rendimiento para asegurar un retorno de inversi\xF3n (ROI) medible."
    },
    {
      question: "\xBFQu\xE9 estrategia de publicidad digital necesita mi empresa: Google Ads o Meta Ads?",
      answer: "Depende de c\xF3mo compren tus clientes. Google Ads es ideal para capturar demanda activa (clientes que ya buscan tu servicio o producto exacto en el buscador). Meta Ads (Facebook e Instagram) es perfecto para generar demanda, interceptar a tu cliente ideal mediante segmentaci\xF3n avanzada y mostrar tu propuesta de valor. Analizamos tu modelo de negocio para ejecutar la plataforma que te brinde el costo por adquisici\xF3n (CPA) m\xE1s rentable."
    },
    {
      question: "\xBFC\xF3mo ayuda la automatizaci\xF3n de WhatsApp y un CRM a escalar mis ventas?",
      answer: "El principal problema de las empresas es perder clientes por respuestas lentas o falta de seguimiento. En KitStation automatizamos WhatsApp creando flujos inteligentes para calificar leads, responder consultas frecuentes 24/7 y asignar prospectos a tu equipo comercial. Toda esta informaci\xF3n se centraliza en un CRM personalizado que dise\xF1amos seg\xFAn la operaci\xF3n exacta de tu empresa, permiti\xE9ndote medir m\xE9tricas, controlar procesos y cerrar m\xE1s ventas sin fricciones."
    },
    {
      question: "\xBFEn cu\xE1nto tiempo empezar\xE9 a ver resultados o ventas de mis campa\xF1as?",
      answer: "El tiempo de retorno es relativo y depende directamente de tus objetivos comerciales y la plataforma publicitaria elegida. No prometemos ventas m\xE1gicas el primer d\xEDa. Las campa\xF1as requieren una fase inicial de testeo y aprendizaje donde el algoritmo recopila datos reales del mercado para optimizar la entrega de los anuncios. Generalmente, las primeras semanas sirven para afinar la estrategia y, en base a esa data, comenzamos a estabilizar y escalar el rendimiento para generar un retorno real."
    },
    {
      question: "\xBFCu\xE1nto tiempo toma el dise\xF1o y desarrollo de mi p\xE1gina web?",
      answer: "El plazo de ejecuci\xF3n depende de la complejidad t\xE9cnica de cada proyecto. Para una web con requerimientos est\xE1ndar, el tiempo de desarrollo es de aproximadamente 1 mes a partir de la finalizaci\xF3n del planteamiento inicial. Es importante destacar que este plazo se cumple siempre y cuando el cliente entregue a tiempo todo el material necesario (textos, branding, im\xE1genes) y apruebe las etapas de dise\xF1o sin demoras."
    },
    {
      question: "\xBFMi empresa necesita tener un equipo de ventas grande para usar el CRM y la automatizaci\xF3n?",
      answer: "No. De hecho, el objetivo de nuestras automatizaciones es multiplicar la capacidad operativa de tu equipo actual. Hemos comprobado que una sola persona puede gestionar el CRM de manera eficiente si aprovecha correctamente todas las herramientas y flujos autom\xE1ticos. Sin embargo, a medida que escalemos tus campa\xF1as y el volumen de leads (prospectos) aumente considerablemente, lo ideal ser\xE1 incorporar m\xE1s asesores para asegurar la calidad de atenci\xF3n y maximizar la tasa de cierre."
    },
    {
      question: "\xBFQu\xE9 pasa despu\xE9s de que la p\xE1gina web est\xE1 terminada? \xBFOfrecen soporte?",
      answer: "Totalmente. Entendemos que tu web es un activo comercial cr\xEDtico. Una vez que el sitio sale a producci\xF3n, incluimos 1 mes de mantenimiento gratuito. Adicionalmente, brindamos una garant\xEDa de soporte t\xE9cnico por 3 meses para cubrir cualquier fallo estructural o error de c\xF3digo (aunque nuestros est\xE1ndares de control de calidad hacen que esto sea sumamente improbable). Pasado este periodo inicial, ofrecemos planes de mantenimiento a medida seg\xFAn los requerimientos t\xE9cnicos de tu plataforma."
    },
    {
      question: "\xBFCu\xE1l es el proceso y la inversi\xF3n m\xEDnima para empezar a trabajar con KitStation?",
      answer: "Cada ecosistema digital que construimos es un proyecto a medida, por lo que el presupuesto var\xEDa seg\xFAn el alcance t\xE9cnico y estrat\xE9gico que tu negocio necesite (desarrollo web, automatizaci\xF3n, gesti\xF3n de pauta, etc.). Para asegurar los est\xE1ndares de calidad y el nivel de compromiso que exigimos en cada proyecto, trabajamos con implementaciones que parten desde una inversi\xF3n m\xEDnima de S/ 1,000 (o $300 USD). El primer paso es contactarnos para evaluar tu caso y estructurar una propuesta exacta."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Preguntas Frecuentes - KitStation", "bodyClass": "bg-white text-black relative overflow-x-hidden min-h-screen" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderKit", $$HeaderKit, {})} ${maybeRenderHead()}<main class="relative z-10 pt-[140px] pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen w-full flex flex-col items-center"> <div class="w-full text-center mb-16 px-4"> <h1 class="text-4xl md:text-[55px] leading-tight font-semibold text-[#0a0f18] tracking-tight mb-4 max-w-5xl mx-auto">
Respuestas claras antes de invertir<br class="hidden md:block"> <span class="md:hidden"></span>en tu ecosistema digital.
</h1> <p class="text-gray-600 text-[15px] font-light max-w-3xl mx-auto leading-relaxed">
Resuelve tus consultas sobre desarrollo web, campañas en Google/Meta y automatización de CRM antes de dar el siguiente paso con tu empresa.
</p> </div> <div class="max-w-4xl w-full flex flex-col"> ${faqsData.map((faq, index) => renderTemplate`<div class="border-b border-gray-200/60 group faq-page-item"> <button class="w-full py-6 flex justify-between items-center text-left focus:outline-none faq-page-button gap-4"> <span class="text-base md:text-lg font-semibold text-[#0a0f18]">${faq.question}</span> <span class="text-blue-700 text-2xl font-light transform transition-transform duration-300 faq-page-icon">
+
</span> </button> <div class="faq-page-answer max-h-0 overflow-hidden transition-all duration-300 ease-in-out"> <p class="pb-8 text-gray-500 font-light leading-relaxed text-sm md:text-base pr-8"> ${faq.answer} </p> </div> </div>`)} </div> </main> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "bgColor": "bg-white" })} ` })} ${renderScript($$result, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/faqs.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/faqs.astro", void 0);

const $$file = "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/faqs.astro";
const $$url = "/faqs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faqs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
