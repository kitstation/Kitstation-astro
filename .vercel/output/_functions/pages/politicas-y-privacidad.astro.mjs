/* empty css                                             */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../chunks/astro/server_QwZ4hMVt.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$WhatsAppButton } from '../chunks/WhatsAppButton_Bu1RdmaY.mjs';
import { $ as $$Header } from '../chunks/Header_CICxs3aB.mjs';
import { $ as $$Footer } from '../chunks/Footer_BXr2HzUB.mjs';
/* empty css                                  */
/* empty css                                                  */
export { renderers } from '../renderers.mjs';

const $$PoliticasYPrivacidad = createComponent(($$result, $$props, $$slots) => {
  const sections = [
    {
      title: "1. IDENTIDAD DEL RESPONSABLE DEL TRATAMIENTO",
      content: `
      <ul>
        <li><strong>Raz\xF3n Social:</strong> KITSTATION PER\xDA S.A.C.</li>
        <li><strong>N\xFAmero de RUC:</strong> (en proceso de registro)</li>
        <li><strong>Representantes legales:</strong> Rodrigo Garc\xEDa Ram\xEDrez y Leonardo Abundo Rodr\xEDguez</li>
        <li><strong>Correo electr\xF3nico de contacto:</strong> contacto@kitstation.pe</li>
        <li><strong>Tel\xE9fono:</strong> 901 637 020</li>
      </ul>
      <p>La Empresa se encuentra en proceso de formalizaci\xF3n de su domicilio fiscal, el cual ser\xE1 actualizado oportunamente en esta pol\xEDtica.</p>
    `
    },
    {
      title: "2. DOMINIO Y SITIOS WEB CUBIERTOS POR ESTA POL\xCDTICA",
      content: `
      <p>Esta Pol\xEDtica de Privacidad aplica al sitio web oficial de la Empresa:</p>
      <ul>
        <li><a href="https://kitstation.pe"><strong>https://kitstation.pe</strong></a></li>
      </ul>
      <p>As\xED como a cualquier otro dominio o subdominio asociado que pueda implementarse en el futuro y que sea debidamente informado.</p>
    `
    },
    {
      title: "3. LEGISLACI\xD3N APLICABLE",
      content: `
      <p>Esta Pol\xEDtica de Privacidad se encuentra alineada con la <strong>Ley N\xC2\xB0 29733 \xE2\u20AC\u201C Ley de Protecci\xF3n de Datos Personales de Per\xFA</strong> y su Reglamento (Decreto Supremo N\xC2\xB0 003-2013-JUS), as\xED como con las mejores pr\xE1cticas internacionales de protecci\xF3n de datos.</p>
      <p>Actualmente, KitStation opera \xFAnicamente en el territorio de la Rep\xFAblica del Per\xFA.</p>
    `
    },
    {
      title: "4. PLATAFORMAS Y HERRAMIENTAS UTILIZADAS PARA GESTIONAR DATOS PERSONALES",
      content: `
      <p>Para la correcta prestaci\xF3n de nuestros servicios, utilizamos las siguientes plataform\xE1s y herramientas, donde eventualmente se almacenan y procesan datos personales:</p>
      <ul>
        <li><strong>Google Workspace</strong> (correos corporativos, almacenamiento en Google Drive y otros servicios asociados).</li>
        <li><strong>Hostgator</strong> (servicio de hosting y alojamiento web).</li>
        <li><strong>WordPress</strong> (gesti\xF3n de contenidos web y formularios).</li>
        <li><strong>WhatsApp Business</strong> (comunicaci\xF3n y atenci\xF3n al cliente).</li>
        <li><strong>Facebook Messenger</strong> (en caso de consultas o mensajes recibidos desde redes sociales).</li>
      </ul>
    `
    },
    {
      title: "5. FINALIDADES DEL TRATAMIENTO DE DATOS",
      content: `
      <p>Recopilamos, almacenamos y utilizamos sus datos personales con las siguientes finalidades:</p>
      <ul>
        <li><strong>Responder consultas y solicitudes</strong> enviadas a trav\xE9s de formularios web, WhatsApp o correo electr\xF3nico.</li>
        <li><strong>Gestionar ventas, cotizaci\xF3nes y procesos comerciales</strong>, tanto para clientes finales como para empresas.</li>
        <li><strong>Enviar promociones, ofertas y novedades</strong> relacionadas con nuestros productos o servicios.</li>
        <li><strong>Desarrollar campa\xF1as de marketing digital y publicidad personalizada.</strong></li>
        <li><strong>Realizar an\xE1lisis estad\xEDsticos, mediciones de tr\xE1fico y comportamiento de navegaci\xF3n</strong> con el fin de mejorar nuestros productos, servicios y experiencia digital.</li>
        <li><strong>Cumplir con obligaciones legales</strong>, regulatorias y fiscales aplicables a nuestra actividad comercial.</li>
        <li><strong>Env\xEDo de regalos, recursos o materiales promocionales</strong> a nuestros clientes y seguidores.</li>
      </ul>
      <p>En caso de que alguna finalidad adicional requiera su consentimiento espec\xEDfico, se lo solicitaremos de manera expresa antes de proceder.</p>
    `
    },
    {
      title: "6. DATOS PERSONALES QUE RECOPILAMOS",
      content: `
      <p>Dependiendo de la interacci\xF3n que tenga con KitStation, podemos recopilar las siguientes categor\xEDas de datos personales:</p>
      <ul>
        <li>Nombre y apellidos.</li>
        <li>N\xFAmero de Documento Nacional de Identidad (DNI) o RUC (si corresponde).</li>
        <li>N\xFAmero de tel\xE9fono y/o WhatsApp.</li>
        <li>Correo electr\xF3nico.</li>
        <li>Direcci\xF3n f\xEDsica (cuando sea necesario para entregas o facturaci\xF3n).</li>
        <li>Datos de pago (en caso de realizar transacciones comerciales).</li>
        <li>Informaci\xF3n de navegaci\xF3n (direcci\xF3n IP, tipo de dispositivo, sistema operativo, navegador, comportamiento de navegaci\xF3n, p\xE1ginas visitadas, etc.).</li>
        <li>Perfiles de redes sociales (en caso de interacci\xF3n por Facebook Messenger u otras plataform\xE1s sociales).</li>
      </ul>
    `
    },
    {
      title: "7. CANALES A TRAV\xC9S DE LOS CUALES RECOPILAMOS DATOS",
      content: `
      <p>Los datos personales pueden ser recopilados a trav\xE9s de los siguientes canales:</p>
      <ul>
        <li><strong>Formulario de contacto web:</strong> <a href="/contactanos/">/contactanos/</a></li>
        <li><strong>WhatsApp Business:</strong> 901 637 020</li>
        <li><strong>Correo electr\xF3nico:</strong> contacto@kitstation.pe</li>
        <li><strong>Interacciones en redes sociales</strong>, como Facebook Messenger o comentarios en publicaciones.</li>
        <li><strong>Cookies y tecnolog\xEDas de seguimiento</strong> cuando navega en nuestro sitio web.</li>
      </ul>
    `
    },
    {
      title: "8. POL\xCDTICA DE COOKIES Y TECNOLOG\xCDAS DE SEGUIMIENTO",
      content: `
      <p>KitStation utiliza <strong>cookies</strong> y tecnolog\xEDas similares para mejorar su experiencia de navegaci\xF3n, personalizar el contenido y analizar el tr\xE1fico de nuestro sitio web.</p>
      <p>Las cookies son peque\xF1os archivos de texto que se almacenan en su dispositivo y permiten identificar comportamientos, preferencias y tendencias. Utilizamos:</p>
      <ul>
        <li><strong>Cookies esenciales:</strong> necesarias para el correcto funcionamiento de la web.</li>
        <li><strong>Cookies anal\xEDticas:</strong> para recopilar informaci\xF3n de navegaci\xF3n y generar informes estad\xEDsticos (Google Analytics).</li>
        <li><strong>Cookies de publicidad:</strong> para mostrar anuncios relevantes en funci\xF3n de sus intereses (Meta Pixel).</li>
      </ul>
      <p>Usted puede gestionar las cookies directamente desde la configuraci\xF3n de su navegador.</p>
    `
    },
    {
      title: "9. COMPARTICI\xD3N DE DATOS PERSONALES",
      content: `
      <p>KitStation no comercializa, vende ni alquila sus datos personales. Solo compartimos informaci\xF3n cuando:</p>
      <ul>
        <li>Sea necesario para cumplir con obligaciones legales o requerimientos de autoridades.</li>
        <li>Exista un contrato con proveedores que brinden servicios tecnol\xF3gicos (por ejemplo, proveedores de hosting o plataform\xE1s de correo).</li>
        <li>Se requiera para la prestaci\xF3n de servicios solicitados por el usuario.</li>
      </ul>
      <p>Todos los terceros que accedan a datos personales lo har\xE1n en cumplimiento de la normativa vigente y bajo estrictas cl\xE1usulas de confidencialidad.</p>
    `
    },
    {
      title: "10. DERECHOS DE LOS TITULARES DE DATOS",
      content: `
      <p>Conforme a la Ley N\xC2\xB0 29733, usted tiene derecho a:</p>
      <ul>
        <li><strong>Acceso:</strong> Conocer qu\xE9 datos suyos est\xE1n siendo tratados.</li>
        <li><strong>Rectificaci\xF3n:</strong> Solicitar la actualizaci\xF3n o correcci\xF3n de datos inexactos.</li>
        <li><strong>Cancelaci\xF3n:</strong> Solicitar la eliminaci\xF3n de sus datos personales cuando ya no sean necesarios.</li>
        <li><strong>Oposici\xF3n:</strong> Oponerse al tratamiento de sus datos para determinadas finalidades.</li>
      </ul>
      <p>Puede ejercer estos derechos enviando un correo a <strong>contacto@kitstation.pe</strong>, indicando su nombre completo, DNI, el derecho que desea ejercer y cualquier informaci\xF3n adicional relevante. Atenderemos su solicitud en el plazo legal establecido.</p>
    `
    },
    {
      title: "11. PERIODO DE CONSERVACI\xD3N DE LOS DATOS",
      content: `
      <p>Los datos personales ser\xE1n conservados durante el tiempo necesario para cumplir con las finalidades indicadas, respetando los plazos legales aplicables. Cuando los datos ya no sean necesarios, ser\xE1n eliminados o anonimizados de manera segura.</p>
    `
    },
    {
      title: "12. ACTUALIZACI\xD3N Y VIGENCIA",
      content: `
      <p>Esta Pol\xEDtica de Privacidad ser\xE1 revisada y actualizada al menos una vez al a\xF1o o cuando existan cambios sustanciales en el tratamiento de datos personales. La versi\xF3n vigente siempre estar\xE1 publicada en nuestro sitio web.</p>
    `
    },
    {
      title: "13. CONTACTO",
      content: `
      <p>Para cualquier consulta relacionada con esta Pol\xEDtica de Privacidad o el tratamiento de sus datos personales, puede contactarnos a trav\xE9s de:</p>
      <ul>
        <li><strong>Correo electr\xF3nico:</strong> contacto@kitstation.pe</li>
        <li><strong>WhatsApp:</strong> 901 637 020</li>
      </ul>
    `
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pol\xEDtica de privacidad | KitStation", "description": "Pol\xEDtica de privacidad de KitStation.", "data-astro-cid-q2sabx5g": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-q2sabx5g": true })} ${maybeRenderHead()}<main class="privacy-page" data-astro-cid-q2sabx5g> <section class="privacy-page__section" data-astro-cid-q2sabx5g> <div class="container" data-astro-cid-q2sabx5g> <div class="privacy-page__content" data-astro-cid-q2sabx5g> <h1 data-astro-cid-q2sabx5g>Política de privacidad</h1> <div class="privacy-page__intro" data-astro-cid-q2sabx5g> <p data-astro-cid-q2sabx5g>
En <strong data-astro-cid-q2sabx5g>KITSTATION PERÚ S.A.C.</strong> (en adelante, Â«KitStationÂ» o Â«la EmpresaÂ»), respetamos y protegemos la privacidad de nuestros usuarios, clientes, proveedores y cualquier persona que interactúe con nosotros a través de nuestros canales digitales, plataformás y sitio web:
<a href="https://kitstation.pe" data-astro-cid-q2sabx5g><strong data-astro-cid-q2sabx5g>https://kitstation.pe</strong></a>.
</p> <p data-astro-cid-q2sabx5g>
Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos la información personal que usted nos proporciona. Le pedimos que lea atentamente esta política, ya que al utilizar nuestros servicios y proporcionar sus datos, usted manifiesta su conformidad con los términos aquí expuestos.
</p> </div> <div class="privacy-accordion" data-astro-cid-q2sabx5g> ${sections.map((section, index) => renderTemplate`<details class="privacy-accordion__item"${addAttribute(index === 0, "open")} data-astro-cid-q2sabx5g> <summary data-astro-cid-q2sabx5g>${section.title}</summary> <div class="privacy-accordion__body" data-astro-cid-q2sabx5g>${unescapeHTML(section.content)}</div> </details>`)} </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-q2sabx5g": true })} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-q2sabx5g": true })} ` })} `;
}, "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/politicas-y-privacidad.astro", void 0);

const $$file = "D:/web/Kitstation/kitstation-astro/Kitstation-astro2/Kitstation-astro/src/pages/politicas-y-privacidad.astro";
const $$url = "/politicas-y-privacidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PoliticasYPrivacidad,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
