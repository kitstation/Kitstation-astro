import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_A22-7F_n.mjs';
import { manifest } from './manifest_D_mPdyGn.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/animacion-digital.astro.mjs');
const _page3 = () => import('./pages/api/chat-web.astro.mjs');
const _page4 = () => import('./pages/api/enviar-formulario.astro.mjs');
const _page5 = () => import('./pages/automatizacion-con-ia.astro.mjs');
const _page6 = () => import('./pages/automatizaciones-con-ia.astro.mjs');
const _page7 = () => import('./pages/campanas-digitales.astro.mjs');
const _page8 = () => import('./pages/consultoria-y-soporte.astro.mjs');
const _page9 = () => import('./pages/contactanos.astro.mjs');
const _page10 = () => import('./pages/contacto.astro.mjs');
const _page11 = () => import('./pages/creacion-de-contenido.astro.mjs');
const _page12 = () => import('./pages/desarrollo-de-software.astro.mjs');
const _page13 = () => import('./pages/diseno-de-pagina-web.astro.mjs');
const _page14 = () => import('./pages/diseno-desarrollo-web.astro.mjs');
const _page15 = () => import('./pages/diseno-web.astro.mjs');
const _page16 = () => import('./pages/empezar.astro.mjs');
const _page17 = () => import('./pages/estrategias-y-campanas-digitales.astro.mjs');
const _page18 = () => import('./pages/faqs.astro.mjs');
const _page19 = () => import('./pages/identidad-de-marca-y-contenido-audiovisual.astro.mjs');
const _page20 = () => import('./pages/landing-paginas-webs.astro.mjs');
const _page21 = () => import('./pages/libro-de-reclamaciones.astro.mjs');
const _page22 = () => import('./pages/linkstation.astro.mjs');
const _page23 = () => import('./pages/nosotros.astro.mjs');
const _page24 = () => import('./pages/politicas-de-privacidad.astro.mjs');
const _page25 = () => import('./pages/politicas-y-privacidad.astro.mjs');
const _page26 = () => import('./pages/posicionamiento-seo.astro.mjs');
const _page27 = () => import('./pages/preguntas-frecuentes.astro.mjs');
const _page28 = () => import('./pages/proyectos.astro.mjs');
const _page29 = () => import('./pages/servicios/_slug_.astro.mjs');
const _page30 = () => import('./pages/sitemap.xml.astro.mjs');
const _page31 = () => import('./pages/sobre-kit.astro.mjs');
const _page32 = () => import('./pages/terminos-y-condiciones.astro.mjs');
const _page33 = () => import('./pages/websites.astro.mjs');
const _page34 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/animacion-digital.astro", _page2],
    ["src/pages/api/chat-web.ts", _page3],
    ["src/pages/api/enviar-formulario.ts", _page4],
    ["src/pages/automatizacion-con-ia.astro", _page5],
    ["src/pages/automatizaciones-con-ia.astro", _page6],
    ["src/pages/campanas-digitales.astro", _page7],
    ["src/pages/consultoria-y-soporte.astro", _page8],
    ["src/pages/contactanos.astro", _page9],
    ["src/pages/contacto.astro", _page10],
    ["src/pages/creacion-de-contenido.astro", _page11],
    ["src/pages/desarrollo-de-software.astro", _page12],
    ["src/pages/diseno-de-pagina-web.astro", _page13],
    ["src/pages/diseno-desarrollo-web.astro", _page14],
    ["src/pages/diseno-web.astro", _page15],
    ["src/pages/empezar.astro", _page16],
    ["src/pages/estrategias-y-campanas-digitales.astro", _page17],
    ["src/pages/faqs.astro", _page18],
    ["src/pages/identidad-de-marca-y-contenido-audiovisual.astro", _page19],
    ["src/pages/landing-paginas-webs.astro", _page20],
    ["src/pages/libro-de-reclamaciones.astro", _page21],
    ["src/pages/linkstation.astro", _page22],
    ["src/pages/nosotros.astro", _page23],
    ["src/pages/politicas-de-privacidad.astro", _page24],
    ["src/pages/politicas-y-privacidad.astro", _page25],
    ["src/pages/posicionamiento-seo.astro", _page26],
    ["src/pages/preguntas-frecuentes.astro", _page27],
    ["src/pages/proyectos.astro", _page28],
    ["src/pages/servicios/[slug].astro", _page29],
    ["src/pages/sitemap.xml.ts", _page30],
    ["src/pages/sobre-kit.astro", _page31],
    ["src/pages/terminos-y-condiciones.astro", _page32],
    ["src/pages/websites.astro", _page33],
    ["src/pages/index.astro", _page34]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c6273201-50a9-4671-a59f-e20fe3f303a6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
