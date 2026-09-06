import { i as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_QwZ4hMVt.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://kitstation.pe");
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { bgColor = "bg-[#eeeeee]" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`w-full ${bgColor} py-8 md:py-20 flex flex-col items-center justify-center text-center px-4`, "class")}> <p class="text-lg md:text-[22px] text-gray-800 font-medium max-w-[600px] leading-snug">
Haz que tu negocio crezca <br class="hidden sm:block">
conectando tu presencia digital <br class="hidden sm:block">
con automatizaciones que cierran <br class="hidden sm:block">
ventas.
</p> <div class="mt-8 mb-4"> <!-- Contenedor para la imagen de los avatares superpuestos --> <div class="flex justify-center items-center"> <img src="/grupo-circulos/grupo-circulos.png" alt="Equipo de avatares" class="h-16 md:h-20 object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"> <!-- Fallback en caso de que la imagen no exista aún --> <div class="hidden justify-center items-center -space-x-4"> <div class="w-12 h-12 rounded-full bg-[#1b85ce] border-2 border-[#eeeeee] z-[1]"></div> <div class="w-12 h-12 rounded-full bg-[#9f7aea] border-2 border-[#eeeeee] z-[2]"></div> <div class="w-14 h-14 rounded-full bg-[#3b82f6] border-2 border-[#eeeeee] z-[3] shadow-md"></div> <div class="w-12 h-12 rounded-full bg-[#4ade80] border-2 border-[#eeeeee] z-[2]"></div> <div class="w-12 h-12 rounded-full bg-[#f97316] border-2 border-[#eeeeee] z-[1]"></div> </div> </div> </div> <a href="/contacto" class="mt-6 inline-block px-8 py-3 bg-transparent border-2 border-black rounded-lg text-black font-semibold text-sm hover:bg-black hover:text-white transition-colors duration-300 shadow-sm">
Empezar ahora
</a> </section>`;
}, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/components/CallToAction.astro", void 0);

export { $$CallToAction as $ };
