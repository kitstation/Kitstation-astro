/* empty css                                             */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_QwZ4hMVt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$WhatsAppButton } from '../chunks/WhatsAppButton_Bu1RdmaY.mjs';
import { $ as $$Header } from '../chunks/Header_CICxs3aB.mjs';
import { $ as $$Footer } from '../chunks/Footer_BXr2HzUB.mjs';
/* empty css                                  */
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Contactanos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Cont\xE1ctanos | KitStation", "description": "Habla con el equipo de KitStation para descubrir la soluci\xF3n ideal para tu negocio.", "data-astro-cid-l27khc52": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-l27khc52": true })} ${maybeRenderHead()}<main class="contact-page" data-astro-cid-l27khc52> <section class="contact-page__section" data-astro-cid-l27khc52> <div class="container contact-page__grid" data-astro-cid-l27khc52> <div class="contact-page__copy" data-astro-cid-l27khc52> <h1 data-astro-cid-l27khc52> <span data-astro-cid-l27khc52>Habla con nuestro equipo</span> <span data-astro-cid-l27khc52>de ventas para descubrir</span> <span data-astro-cid-l27khc52>cómo KitStation se adapta</span> <span data-astro-cid-l27khc52>a tus necesidades</span> </h1> <ul class="contact-page__benefits" data-astro-cid-l27khc52> <li data-astro-cid-l27khc52>Encuentra la solución perfecta para impulsar el crecimiento de tu negocio.</li> <li data-astro-cid-l27khc52>Pide una cotización adaptada a tus necesidades.</li> <li data-astro-cid-l27khc52>Aceleramos el crecimiento digital de tu empresa desde el primer mes.</li> <li data-astro-cid-l27khc52>Creamos experiencias digitales que convierten visitantes en clientes.</li> </ul> <blockquote class="contact-page__quote" data-astro-cid-l27khc52>
“Despreocúpate del contenido digital. En KitStation nos encargamos de todo,<br data-astro-cid-l27khc52>
para que tú puedas enfocarte en hacer crecer tu negocio.”
</blockquote> </div> <div class="contact-page__panel" data-astro-cid-l27khc52> <form class="contact-page__form" method="POST" action="/api/enviar-formulario" data-mail-form data-astro-cid-l27khc52> <input type="hidden" name="formulario" value="Contacto" data-astro-cid-l27khc52> <input type="hidden" name="pagina_origen" value="" data-astro-cid-l27khc52> <input class="form-honeypot" type="text" name="website" autocomplete="off" tabindex="-1" aria-hidden="true" data-astro-cid-l27khc52> <input type="text" name="name" placeholder="Nombre" required data-astro-cid-l27khc52> <input type="tel" name="phone" placeholder="Celular" required data-astro-cid-l27khc52> <input type="email" name="email" placeholder="E-mail" required data-astro-cid-l27khc52> <label class="contact-page__label" for="service" data-astro-cid-l27khc52>¿Qué te gustaría hablar con nosotros?</label> <select id="service" name="service" required data-astro-cid-l27khc52> <option data-astro-cid-l27khc52>Página web</option> <option data-astro-cid-l27khc52>CRM para ventas</option> <option data-astro-cid-l27khc52>Animación digital</option> <option data-astro-cid-l27khc52>Automatización con IA</option> <option data-astro-cid-l27khc52>Campañas digitales</option> <option data-astro-cid-l27khc52>Posicionamiento SEO</option> <option data-astro-cid-l27khc52>Consultoría y soporte técnico</option> <option data-astro-cid-l27khc52>Creación de contenido</option> </select> <textarea name="message" placeholder="Déjanos tu consulta..." required data-astro-cid-l27khc52></textarea> <label class="contact-page__check" data-astro-cid-l27khc52> <input type="checkbox" name="privacy" required data-astro-cid-l27khc52> <span data-astro-cid-l27khc52>Acepto la Política de privacidad de kitstation.com.</span> </label> <button type="submit" data-astro-cid-l27khc52>ENVIAR CONSULTA</button> <p class="form-feedback" role="status" aria-live="polite" data-astro-cid-l27khc52></p> </form> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-l27khc52": true })} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-l27khc52": true })} ` })} `;
}, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/contactanos.astro", void 0);

const $$file = "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/contactanos.astro";
const $$url = "/contactanos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contactanos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
