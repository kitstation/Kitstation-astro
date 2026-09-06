/* empty css                                             */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_QwZ4hMVt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$WhatsAppButton } from '../chunks/WhatsAppButton_Bu1RdmaY.mjs';
/* empty css                                  */
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Websites = createComponent(($$result, $$props, $$slots) => {
  const websites = [
    {
      title: "Bodega Olcese",
      href: "https://bodegaolcese.pe/",
      image: "/wp-content/uploads/2025/07/Captura-de-pantalla-2025-0sssss7-08-074800.png",
      tags: ["Ecommerce", "Catalogo", "Comida"]
    },
    {
      title: "Exiven",
      href: "https://www.exiven.com/",
      image: "/wp-content/uploads/2025/07/Captura-de-pantalla-2025-07-08-074717.png",
      tags: ["Ecommerce", "Merchandising", "Catalogo"]
    },
    {
      title: "Pulsera Tyvek",
      href: "https://pulserastyvek.pe/",
      image: "/wp-content/uploads/2025/07/Captura-de-pantalla-2025-07-08-074736.png",
      tags: ["Ecommerce", "Market", "Catalogo"]
    },
    {
      title: "Uncult Culture",
      href: "https://uncultculture.com/",
      image: "/wp-content/uploads/2025/07/uncultculture.png",
      tags: ["Ecommerce", "Shop", "Animation"]
    },
    {
      title: "J y R Agro",
      href: "https://jyragrotech.com/",
      image: "/wp-content/uploads/2026/01/Captura-1300x652.png",
      tags: ["Ecommerce", "Catalogo", "Frutas"]
    },
    {
      title: "Evil World",
      href: "https://evilworld.pe/",
      image: "/wp-content/uploads/2026/04/Captur1a-1-1-1300x655.webp",
      tags: ["Ecommerce", "Tienda", "Ropa"]
    },
    {
      title: "Versounited",
      href: "https://versounited.com/",
      image: "/wp-content/uploads/2026/04/versounited-1300x648.webp",
      tags: ["Animated", "Theere,js", "3D"]
    },
    {
      title: "Kitstation",
      href: "https://kitstation.pe/",
      image: "/wp-content/uploads/2026/04/KIT-1300x625.png",
      tags: ["AgencIA", "Theere,js", "Animaci\xF3n DG"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "P\xE1ginas web | KitStation", "description": "Galeria de p\xE1ginas web creadas por KitStation.", "data-astro-cid-j2qn7zet": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="websites-page" data-astro-cid-j2qn7zet> <section class="websites-page__section" data-astro-cid-j2qn7zet> <div class="websites-page__shell" data-astro-cid-j2qn7zet> <h1 data-astro-cid-j2qn7zet>Páginas web</h1> <div class="websites-page__grid" data-astro-cid-j2qn7zet> ${websites.map((website) => renderTemplate`<article class="website-card" data-astro-cid-j2qn7zet> <a class="website-card__image"${addAttribute(website.href, "href")} target="_blank" rel="noreferrer" data-astro-cid-j2qn7zet> <img${addAttribute(website.image, "src")}${addAttribute(website.title, "alt")} loading="lazy" data-astro-cid-j2qn7zet> </a> <h2 data-astro-cid-j2qn7zet>${website.title}</h2> <div class="website-card__tags" data-astro-cid-j2qn7zet> ${website.tags.map((tag) => renderTemplate`<span data-astro-cid-j2qn7zet>${tag}</span>`)} </div> </article>`)} </div> </div> </section> </main> ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-j2qn7zet": true })} ` })} `;
}, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/websites.astro", void 0);

const $$file = "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/websites.astro";
const $$url = "/websites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Websites,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
