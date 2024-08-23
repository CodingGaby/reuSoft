/* empty css                                   */
import { c as createComponent, r as renderTemplate, f as renderComponent, d as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Dw-mytcb.mjs';
import 'kleur/colors';
import { $ as $$LinkBtn } from '../chunks/LinkBtn_Ca_amuhd.mjs';
import { $ as $$Layout } from '../chunks/Layout_Wwsaj4mp.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Success = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  const { searchParams } = new URL(Astro2.request.url);
  const name = searchParams.get("name");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Exito! | ReuSoft2024" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-24 flex flex-col items-center min-h-screen justify-center"> <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white mx-4 text-center">
¡Felicidades ${name}!
</h1> <p class="text-[2.5rem] font-medium leading-[4rem] tracking-tight text-white">Ya apartaste tu lugar</p> <p class="text-gray-400 mb-12 mx-12 text-center">Únete al <a href="https://chat.whatsapp.com/Cn7SIt1ZDIfGK3SrdXvlMC" class="text-[#f4427d] underline">grupo de WhatsApp</a> para estar al tanto del evento</p> ${renderComponent($$result2, "LinkBtn", $$LinkBtn, { "href": "/" }, { "default": ($$result3) => renderTemplate`
Regresar al inicio
` })} </section> ` })} `;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/pages/success.astro", void 0);

const $$file = "/Users/blossdev/Developer/Astro/reuSoft2024/src/pages/success.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
