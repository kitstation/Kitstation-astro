/* empty css                                             */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_QwZ4hMVt.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_pAJkpxBP.mjs';
import { $ as $$HeaderKit } from '../chunks/HeaderKit_yynNF4R5.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "P\xE1gina no encontrada - KitStation", "hideChat": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderKit", $$HeaderKit, {})} ${maybeRenderHead()}<section class="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-24"> <div class="max-w-2xl mx-auto flex flex-col items-center"> <!-- 404 Graphic or simple text --> <h1 class="text-6xl md:text-8xl font-black text-gray-900 mb-6 tracking-tight">404</h1> <h2 class="text-2xl md:text-4xl font-bold text-black mb-4">
Oops, parece que te perdiste.
</h2> <p class="text-base md:text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
La página que estás buscando no existe, ha sido movida o está temporalmente inactiva. 
        Pero no te preocupes, puedes volver al inicio.
</p> <a href="/" class="px-8 py-3 bg-black text-white rounded-lg font-semibold text-base md:text-lg hover:bg-gray-800 transition-colors duration-300 min-h-[44px] flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
Volver al inicio
</a> </div> </section> ` })}`;
}, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/404.astro", void 0);

const $$file = "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
