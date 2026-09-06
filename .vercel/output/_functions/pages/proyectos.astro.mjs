/* empty css                                             */
import { i as createAstro, c as createComponent, m as maybeRenderHead, b as renderScript, a as renderTemplate, r as renderComponent, d as addAttribute, u as unescapeHTML } from '../chunks/astro/server_QwZ4hMVt.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_pAJkpxBP.mjs';
import { $ as $$HeaderKit } from '../chunks/HeaderKit_yynNF4R5.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://kitstation.pe");
const $$IAChatDemo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IAChatDemo;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col items-center justify-center animate-fade-in relative z-20 pb-16" data-astro-cid-lgu3f46w> <!-- Headers --> <div class="text-center mb-10 space-y-4 max-w-3xl mx-auto" data-astro-cid-lgu3f46w> <h2 class="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-white" data-astro-cid-lgu3f46w>
No nos creas. Pon a prueba nuestra IA ahora mismo.
</h2> <p class="text-gray-300 text-sm md:text-base font-light px-4" data-astro-cid-lgu3f46w>
Cuéntanos cuál es el mayor problema en tus ventas hoy. Nuestra IA analizará tu caso y te dirá exactamente cómo LinkStation lo resolvería en menos de 10 segundos.
</p> <p class="text-white text-sm font-semibold pt-2" data-astro-cid-lgu3f46w>
Pensado para el mercado peruano.
</p> </div> <!-- Chat Container --> <div class="w-full max-w-[800px] h-[500px] bg-gradient-to-br from-[#223d68] via-[#121418] to-[#121418] backdrop-blur-md border border-white/5 rounded-[32px] flex flex-col overflow-hidden shadow-2xl relative mx-auto" data-astro-cid-lgu3f46w> <!-- Messages Area --> <div id="ia-chat-messages" class="flex-1 p-6 md:p-8 overflow-y-auto overflow-x-hidden flex flex-col gap-6 custom-scrollbar" data-astro-cid-lgu3f46w> <!-- Initial Bot Message --> <div class="flex items-start gap-2.5 self-start chat-msg-enter-bot" data-astro-cid-lgu3f46w> <div class="bg-[#0055ff] text-white rounded-[1.25rem] py-3 px-4 flex items-start gap-3 max-w-[85%] md:max-w-[60%] shadow-sm" data-astro-cid-lgu3f46w> <div class="w-6 h-6 rounded-full bg-white flex flex-shrink-0 items-center justify-center mt-0.5 p-0.5" data-astro-cid-lgu3f46w> <img src="/images/projects/ia/icono-ia.svg" alt="AgenteKIT" class="w-4 h-4 object-contain" data-astro-cid-lgu3f46w> </div> <p class="text-[15px] font-normal leading-relaxed break-words min-w-0" data-astro-cid-lgu3f46w>Hola soy AgenteKIT, cuentame tu problema :)</p> </div> </div> </div> <!-- Input Area --> <div class="p-6 mt-auto w-full flex flex-col gap-3" data-astro-cid-lgu3f46w> <!-- Suggestion Chips --> <div id="ia-chat-suggestions" class="flex flex-wrap gap-2 md:gap-2.5 w-full" data-astro-cid-lgu3f46w> <button class="ia-chat-chip bg-white/5 border border-white/10 text-white/80 font-semibold text-xs md:text-[13px] px-4 py-2 rounded-full hover:bg-white/10 transition-colors shadow-sm" data-astro-cid-lgu3f46w>Hola!</button> <button class="ia-chat-chip bg-white/5 border border-white/10 text-white/80 font-semibold text-xs md:text-[13px] px-4 py-2 rounded-full hover:bg-white/10 transition-colors shadow-sm" data-astro-cid-lgu3f46w>¿Cómo funciona esta IA?</button> <button class="ia-chat-chip bg-white/5 border border-white/10 text-white/80 font-semibold text-xs md:text-[13px] px-4 py-2 rounded-full hover:bg-white/10 transition-colors shadow-sm" data-astro-cid-lgu3f46w>Quiero agendar una llamada</button> </div> <form id="ia-chat-form" class="relative flex items-end bg-[#0a0a0a] rounded-[24px] shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10" data-astro-cid-lgu3f46w> <textarea id="ia-chat-input" rows="1" placeholder="Escribe tu problema..." class="w-full bg-transparent text-white text-[14px] md:text-[15px] rounded-[24px] pl-5 pr-24 py-4 leading-tight focus:outline-none placeholder-[#666] resize-none overflow-y-auto custom-scrollbar transition-all duration-300" style="min-height: 56px; max-height: 120px;" data-astro-cid-lgu3f46w></textarea> <button id="ia-chat-mic" type="button" class="absolute bottom-[8px] w-10 h-10 rounded-full bg-[#1a1a1a] text-gray-400 flex items-center justify-center hover:bg-[#2a2a2a] hover:text-gray-200 border border-white/5 z-10 transition-all duration-300" style="right: 56px;" title="Enviar audio de prueba" data-astro-cid-lgu3f46w> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill shrink-0" viewBox="0 0 16 16" data-astro-cid-lgu3f46w> <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" data-astro-cid-lgu3f46w></path> <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" data-astro-cid-lgu3f46w></path> </svg> </button> <button id="ia-chat-submit" type="submit" class="absolute bottom-[8px] right-[8px] w-10 h-10 rounded-full bg-[#0066ff] border border-[#0055ff] hover:bg-blue-600 flex items-center justify-center transition-all text-white shadow-[0_0_15px_rgba(0,102,255,0.3)] z-10 group" data-astro-cid-lgu3f46w> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right group-hover:scale-110 transition-transform" viewBox="0 0 16 16" data-astro-cid-lgu3f46w> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" data-astro-cid-lgu3f46w></path> </svg> </button> </form> </div> </div> </div>  ${renderScript($$result, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/components/IAChatDemo.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/components/IAChatDemo.astro", void 0);

const $$Astro = createAstro("https://kitstation.pe");
const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyectos;
  const services = [
    {
      id: "web",
      name: "Dise\xF1o y desarrollo web",
      formattedName: "Dise\xF1o y<br />desarrollo web",
      colorClass: "bg-[#c4a3f8]",
      textColor: "text-[#c4a3f8]",
      rgb: "196, 163, 248",
      circleImage: "/images/projects/web/circulo-web.jpg",
      projects: [
        { title: "Exiven", description: "Cat\xE1logo digital autogestionable en WordPress, optimizado para la exhibici\xF3n \xE1gil de productos.", media: "/videos/diseno-web/diseno-web-portafolio.mp4", poster: "/images/projects/web/1-Web-Exiven.jpg", type: "video", url: "https://www.exiven.com/" },
        { title: "Bodega Olcese", description: "E-commerce con log\xEDstica dual (entregas inmediatas o programadas) y c\xE1lculo de env\xEDo din\xE1mico por zonas.", media: "/videos/diseno-web/diseno-web-ecomerce-2.mp4", poster: "/images/projects/web/2-Web-bodegaolcese.jpg", type: "video", url: "https://bodegaolcese.pe/" },
        { title: "Versounited", description: "Portafolio 3D inmersivo desarrollado en Astro y Three.js, con f\xEDsicas de movimiento en tiempo real.", media: "/videos/diseno-web/diseno-web-3d.mp4", poster: "/images/projects/web/3-web-versounited.jpg", type: "video", url: "https://versounited.com/" },
        { title: "Alfra", description: "Landing page financiera orientada a la conversi\xF3n, con embudo integrado para segmentaci\xF3n de leads.", media: "/videos/diseno-web/diseno-web-corporativas.mp4", poster: "/images/projects/web/4-web-alfra.jpg", type: "video", url: "https://www.contadoresalfra.pe/" },
        { title: "Corfrut", description: "Cat\xE1logo corporativo biling\xFCe (ES/EN) estructurado para el posicionamiento de productos de exportaci\xF3n B2B.", media: "/videos/diseno-web/diseno-web-multilenguaje.mp4", poster: "/images/projects/web/5-web-corfrut.jpg", type: "video", url: "https://corfrutfresh.com/" },
        { title: "EvilWorld", description: "Tienda en l\xEDnea optimizada para conversiones con pasarelas de pago y gesti\xF3n de inventario.", media: "/videos/diseno-web/diseno-web-ecomerce.mp4", type: "video", url: "https://evilworld.pe/" },
        { title: "Smarticket", description: "Estructura de impacto orientada a m\xE1xima conversi\xF3n, dise\xF1ada para transformar clics en ventas reales.", media: "/videos/diseno-web/diseno-web-landing.mp4", type: "video", url: "https://www.smarticket.pe/" }
      ]
    },
    {
      id: "ia",
      name: "Automatizaciones con IA",
      formattedName: "Automatizaciones<br />con IA",
      colorClass: "bg-[#52a0ff]",
      textColor: "text-[#52a0ff]",
      rgb: "82, 160, 255",
      circleImage: "/images/projects/ia/circulo-ia.jpg",
      projects: []
      // Se muestra la interfaz del Chat
    },
    /*
    { 
      id: 'software', name: 'Desarrollo de software', formattedName: 'Desarrollo de<br />software', colorClass: 'bg-[#187ab0]', textColor: 'text-[#187ab0]', rgb: '24, 122, 176', 
      circleImage: '/images/projects/software/circulo-software.jpg',
      projects: [
        { title: 'Linkstation', description: 'Sistema de mensajería unificada, diseñado para centralizar y agilizar toda la comunicación en una sola plataforma.', media: '/images/projects/software/1-crm-linksation.jpg', type: 'image' }
      ]
    },
    */
    {
      id: "marca",
      name: "Identidad de marca",
      formattedName: "Identidad de<br />marca",
      colorClass: "bg-[#ff9768]",
      textColor: "text-[#ff9768]",
      rgb: "255, 151, 104",
      circleImage: "/images/projects/marca/circulo-marca.jpg",
      projects: [
        { title: "Animaci\xF3n 2D", description: "Pieza h\xEDbrida desarrollada con la suite Adobe (After Effects, Illustrator, Photoshop), que integra elementos 3D en secuencias clave para aportar profundidad y dinamismo visual.", media: "/images/projects/marca/2-2D.mp4", type: "video", startTime: 4.6 },
        { title: "Correcci\xF3n de color", description: "Etalonaje profesional en DaVinci Resolve para campa\xF1a de moda (fashion film), enfocado en potenciar la est\xE9tica y consolidar la identidad visual de la marca.", media: "/images/projects/marca/3-CORRECCION.mp4", type: "video", startTime: 148.26 },
        { title: "Efectos visuales (VFX)", description: "Integraci\xF3n de efectos digitales para una campa\xF1a estacional de Halloween (Ignacio Balad\xE1n), orientada a maximizar el engagement y la retenci\xF3n en redes sociales.", media: "/images/projects/marca/4-EFECTOS-V.mp4", type: "video" },
        { title: "Animaci\xF3n 3D", description: "Producci\xF3n y secuenciaci\xF3n visual (Blender, Cinema 4D, Premiere Pro) ejecutada por Kitstation, transformando el guion original del cliente en una pieza inmersiva de alto impacto.", media: "/images/projects/marca/1-3D.mp4", type: "video", isWide: true }
      ]
    }
  ];
  const allProjects = services.flatMap(
    (service) => service.projects.map((p) => ({
      category: service.id,
      title: p.title,
      description: p.description || "dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      linkText: p.url ? "Visitar web" : "Ver m\xE1s",
      url: p.url || "#",
      textColor: service.textColor,
      media: p.media,
      poster: p.poster,
      mediaType: p.type,
      isWide: p.isWide,
      startTime: p.startTime || 0
    }))
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos - KitStation", "bodyClass": "bg-[#000000] text-white relative overflow-x-hidden min-h-screen" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderKit", $$HeaderKit, {})} ${maybeRenderHead()}<main id="projects-container" class="relative z-10 pt-[140px] pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen"> <!-- Background Glows (Ahora con fixed para que no se vean afectados por el cambio de altura) --> <div class="interactive-orb fixed top-[5vh] left-[-5vw] w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none z-[-1]" style="background-color: rgba(196, 163, 248, 0.35); transition: background-color 0.8s ease;"></div> <div class="interactive-orb fixed bottom-[10vh] right-[5vw] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none z-[-1]" style="background-color: rgba(196, 163, 248, 0.35); transition: background-color 0.8s ease;"></div> <div class="interactive-orb fixed top-[50vh] left-[25vw] w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none z-[-1]" style="background-color: rgba(196, 163, 248, 0.25); transition: background-color 0.8s ease;"></div> <div class="interactive-orb fixed top-[20vh] right-[20vw] w-[400px] h-[400px] rounded-full blur-[130px] pointer-events-none z-[-1]" style="background-color: rgba(196, 163, 248, 0.30); transition: background-color 0.8s ease;"></div> <!-- Header Section --> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl lg:text-[56px] font-bold mb-5 tracking-tight text-white">Nuestros proyectos</h1> <p class="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light">
Descubre nuestros proyectos y como hemos ayudado a empresas a digitalizarse.
</p> </div> <!-- Category Circles (Fila única de 3 esferas en móvil con títulos en 2 líneas) --> <div class="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-20 px-2 justify-items-center"> ${services.filter((s) => s.id !== "software").map((service, index) => renderTemplate`<div${addAttribute(`group flex flex-col items-center cursor-pointer w-full ${index === 0 ? "is-active" : ""}`, "class")}> <div${addAttribute(`service-circle w-[72px] h-[72px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] rounded-full ${service.colorClass} cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden relative ${index === 0 ? "scale-110" : ""}`, "class")}${addAttribute(service.rgb, "data-rgb")}${addAttribute(service.id, "data-category")}${addAttribute(index === 0 ? `box-shadow: 0 0 0 4px rgb(${service.rgb})` : "", "style")}> ${service.circleImage && renderTemplate`<img${addAttribute(service.circleImage, "src")}${addAttribute(service.name, "alt")} class="w-full h-full object-cover absolute inset-0 z-10">`} </div> <span class="service-label text-[11px] sm:text-xs md:text-sm text-center font-medium leading-tight mt-3 text-white transition-opacity duration-300 pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 group-[.is-active]:opacity-100">${unescapeHTML(service.formattedName)}</span> </div>`)} </div> <!-- Content Area (Grid / Chat Stacker) --> <div class="grid grid-cols-1 grid-rows-1"> <!-- Projects Grid --> <div id="projects-grid" class="col-start-1 row-start-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 min-h-[500px] content-start transition-all duration-500 ease-in-out opacity-100 scale-100"> ${allProjects.map((project) => renderTemplate`<div${addAttribute(`project-card transition-all duration-500 ease-in-out bg-[#121212]/90 border border-[#222]/80 rounded-xl p-4 sm:p-5 flex flex-col gap-3 backdrop-blur-md hover:border-white/10 hover:bg-[#1a1a1a] shadow-lg transform origin-top ${project.category === "web" ? "opacity-100 scale-100" : "hidden opacity-0 scale-95"} ${project.category === "marca" && !project.isWide ? "max-w-[320px] mx-auto" : "w-full"}`, "class")}${addAttribute(project.category, "data-category")}> <div${addAttribute(`video-container w-full ${project.category === "marca" && !project.isWide ? "aspect-[9/16]" : "aspect-video"} bg-[#000] rounded-[10px] overflow-hidden relative group-hover:shadow-xl transition-all cursor-pointer`, "class")}> ${project.media ? project.mediaType === "video" ? renderTemplate`<video${addAttribute(`${project.media}${project.startTime ? `#t=${project.startTime}` : ""}`, "src")}${addAttribute(project.poster, "poster")}${addAttribute(project.startTime, "data-start-time")} preload="metadata" loop muted playsinline${addAttribute(`w-full h-full ${project.isWide ? "object-contain" : "object-cover"} border-0 focus:outline-none pointer-events-none`, "class")}></video>` : renderTemplate`<img${addAttribute(project.media, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover">` : renderTemplate`<div class="w-full h-full flex flex-col items-center justify-center text-[#444] bg-[#1a1a1a]"> <i class="bi bi-image text-3xl mb-2"></i> <span class="text-xs font-semibold">Próximamente</span> </div>`} </div> <div class="flex flex-col flex-grow"> <h3 class="text-white font-bold text-lg sm:text-xl mb-1.5 tracking-wide">${project.title}</h3> <p class="text-[#888] text-xs sm:text-sm leading-[1.6] mb-4 flex-grow"> ${project.description} </p> <div class="mt-auto"> ${project.category === "marca" ? renderTemplate`<div class="flex justify-end gap-2 md:hidden"> <button type="button"${addAttribute(`btn-play-action flex items-center gap-2 text-sm font-semibold ${project.textColor} hover:brightness-125 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 px-4 py-2.5 rounded-lg transition-all tracking-wider z-10`, "class")}> <i class="bi bi-play-fill text-lg"></i> Reproducir
</button> <button type="button"${addAttribute(`btn-expand-action flex items-center justify-center text-sm font-semibold ${project.textColor} hover:brightness-125 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 w-[42px] h-[42px] rounded-lg transition-all z-10`, "class")} title="Pantalla completa"> <i class="bi bi-arrows-fullscreen"></i> </button> </div>` : renderTemplate`<div class="flex justify-end gap-2"> <a${addAttribute(project.url, "href")}${addAttribute(project.url !== "#" ? "_blank" : "_self", "target")} rel="noopener noreferrer"${addAttribute(`text-sm font-semibold ${project.textColor} hover:brightness-125 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 px-6 py-2.5 rounded-lg transition-all tracking-wider`, "class")}> ${project.linkText} </a> </div>`} </div> </div> </div>`)} </div> <!-- IA Chat Section --> <div id="ia-chat-section" class="col-start-1 row-start-1 hidden transition-all duration-500 ease-in-out opacity-0 scale-95 z-20"> ${renderComponent($$result2, "IAChatDemo", $$IAChatDemo, {})} </div> <!-- Custom Video Lightbox --> <div id="custom-lightbox" class="fixed inset-0 z-[9999] flex flex-col bg-black/95 opacity-0 pointer-events-none transition-opacity duration-300 pt-[80px]"> <div id="lightbox-content" class="relative w-full flex-1 flex items-center justify-center overflow-hidden cursor-pointer"> <video id="lightbox-video" class="pointer-events-none rounded-[24px] shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-300 w-auto max-w-[82%] max-h-[78%] md:max-w-[90%] md:max-h-[90%]" style="height: 100%;" loop muted playsinline></video> </div> <div class="w-full pb-20 sm:pb-8 pt-4 px-6 flex items-center justify-center gap-4"> <button type="button" id="lightbox-play-btn" class="flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-3 rounded-lg transition-all tracking-wider shadow-lg"> <i class="bi bi-pause-fill text-xl" id="lightbox-play-icon"></i> <span id="lightbox-play-text">Pausar</span> </button> <button id="lightbox-close" type="button" class="flex items-center justify-center text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 w-[46px] h-[46px] rounded-lg transition-all shadow-lg" title="Cerrar"> <i class="bi bi-x-lg text-lg"></i> </button> </div> </div> </div> </main> ` })} ${renderScript($$result, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/proyectos.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/proyectos.astro", void 0);

const $$file = "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyectos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
