import { i as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from './astro/server_QwZ4hMVt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$WhatsAppButton } from './WhatsAppButton_Bu1RdmaY.mjs';
/* empty css                          */
/* empty css                                     */

const $$Astro = createAstro("https://kitstation.pe");
const $$ServiceLanding = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceLanding;
  const {
    pageTitle,
    metaDescription,
    title,
    titleHtml = "",
    subtitle = "",
    accent,
    panelColor,
    videoSrc = "",
    videoFit = "cover",
    videoPadding = "0",
    contentWidth = "560px",
    titleWidth = "100%",
    titleSize = "clamp(1.9rem, 2.7vw, 2.9rem)",
    titleMobileSize = "clamp(1.8rem, 8vw, 2.45rem)",
    contentAlign = "center",
    formName = title
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": metaDescription, "data-astro-cid-n4oqbw2d": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="service-form-page"${addAttribute(`--service-accent:${accent}; --service-panel:${panelColor}; --service-video-fit:${videoFit}; --service-video-padding:${videoPadding};`, "style")} data-astro-cid-n4oqbw2d> <section class="service-form-page__split" data-astro-cid-n4oqbw2d> <div class="service-form-page__left" data-astro-cid-n4oqbw2d> <div class="service-form-page__content"${addAttribute(`--service-content-width:${contentWidth}; --service-title-size:${titleSize}; --service-title-mobile-size:${titleMobileSize}; --service-content-align:${contentAlign};`, "style")} data-astro-cid-n4oqbw2d> ${titleHtml ? renderTemplate`<h1${addAttribute(`--service-title-width:${titleWidth};`, "style")} data-astro-cid-n4oqbw2d>${unescapeHTML(titleHtml)}</h1>` : renderTemplate`<h1${addAttribute(`--service-title-width:${titleWidth};`, "style")} data-astro-cid-n4oqbw2d>${title}</h1>`} ${subtitle && renderTemplate`<p class="service-form-page__subtitle" data-astro-cid-n4oqbw2d>${subtitle}</p>`} <form class="service-form-page__form" method="POST" action="/api/enviar-formulario" data-mail-form data-astro-cid-n4oqbw2d> <input type="hidden" name="formulario"${addAttribute(formName, "value")} data-astro-cid-n4oqbw2d> <input type="hidden" name="pagina_origen" value="" data-astro-cid-n4oqbw2d> <input class="form-honeypot" type="text" name="website" autocomplete="off" tabindex="-1" aria-hidden="true" data-astro-cid-n4oqbw2d> <input type="text" name="company" placeholder="Nombre de empresa" required data-astro-cid-n4oqbw2d> <input type="email" name="email" placeholder="Correo" required data-astro-cid-n4oqbw2d> <input type="tel" name="phone" placeholder="Celular" required data-astro-cid-n4oqbw2d> <textarea name="message" placeholder="Mensaje" required data-astro-cid-n4oqbw2d></textarea> <button type="submit" data-astro-cid-n4oqbw2d>ENVIAR</button> <p class="form-feedback" role="status" aria-live="polite" data-astro-cid-n4oqbw2d></p> </form> <p class="service-form-page__privacy" data-astro-cid-n4oqbw2d>
Al avanzar, aceptas la <a href="/politicas-y-privacidad/" data-astro-cid-n4oqbw2d>Política de privacidad</a> </p> </div> </div> <div class="service-form-page__right" data-astro-cid-n4oqbw2d> <div class="service-form-page__video-slot"${addAttribute(videoSrc ? void 0 : "true", "aria-hidden")} data-astro-cid-n4oqbw2d> ${videoSrc && renderTemplate`<video class="service-form-page__video" autoplay muted playsinline loop preload="metadata" data-astro-cid-n4oqbw2d> <source${addAttribute(videoSrc, "src")} type="video/mp4" data-astro-cid-n4oqbw2d> </video>`} </div> </div> </section> </main> ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-n4oqbw2d": true })} ` })} `;
}, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/components/ServiceLanding.astro", void 0);

export { $$ServiceLanding as $ };
