/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, f as renderComponent, a as addAttribute, d as createAstro } from '../chunks/astro/server_Dw-mytcb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Wwsaj4mp.mjs';
import 'clsx';
/* empty css                                   */
import { d as db, A as Assistant } from '../chunks/_astro_db_CBoAvz3p.mjs';
import { isDbError } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$SubmitBtn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button type="submit" class="group relative inline-flex h-12 items-center justify-center rounded-md bg-[#f4427d] px-5 py-3 font-medium text-white hover:bg-[#e41e56] transition-all duration-200 ease-in-out hover:scale-105 w-full"> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/buttons/SubmitBtn.astro", void 0);

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col" data-astro-cid-4xpkk25o> <form method="POST" data-astro-cid-4xpkk25o> ${renderSlot($$result, $$slots["default"])} <!--Submit BTN --> ${renderComponent($$result, "SubmitBtn", $$SubmitBtn, { "data-astro-cid-4xpkk25o": true }, { "default": ($$result2) => renderTemplate`
Confirmar
` })} </form> </div> `;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/form/Form.astro", void 0);

const capitalizeFstLetter = function(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

const $$Astro$1 = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Input;
  let capitalizedTitle = "";
  const { title, type, placeholder, isRequired, name, value } = Astro2.props;
  if (title) {
    capitalizedTitle = capitalizeFstLetter(title);
  }
  return renderTemplate`${maybeRenderHead()}<div class="relative mb-6 max-w-[450px]" data-astro-cid-376wvddf> ${isRequired ? renderTemplate`<input${addAttribute(type, "type")}${addAttribute(name, "id")}${addAttribute(placeholder, "placeholder")}${addAttribute(name, "name")} required${addAttribute(value, "value")} class="min-w-[300px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-black rounded-lg border-gray-300 border appearance-none focus:outline-none focus:ring-0 focus:border-[#f4427d] peer" data-astro-cid-376wvddf>` : renderTemplate`<input${addAttribute(type, "type")}${addAttribute(name, "id")}${addAttribute(placeholder, "placeholder")}${addAttribute(name, "name")}${addAttribute(value, "value")} class="min-w-[350px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-black rounded-lg border-gray-300 border appearance-none focus:outline-none focus:ring-0 focus:border-[#f4427d] peer" data-astro-cid-376wvddf>`} <label${addAttribute(name, "for")} class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black px-2 peer-focus:px-2 peer-focus:text-[#f4427d] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" data-astro-cid-376wvddf> ${capitalizedTitle.length > 0 ? capitalizedTitle : renderTemplate`${renderSlot($$result, $$slots["default"])}`} </label> </div> `;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/form/Input.astro", void 0);

const $$Astro = createAstro();
const $$Confirm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Confirm;
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const name = formData.get("name");
      const enrollment = formData.get("enrollment");
      const email = formData.get("email");
      const social = formData.get("social");
      const id = crypto.randomUUID();
      console.log({ name, enrollment, email, social });
      let enrollmentNumber;
      if (typeof enrollment === "string") {
        enrollmentNumber = parseInt(enrollment, 10);
      }
      if (typeof name === "string" && typeof email === "string" && typeof social === "string" && typeof enrollmentNumber === "number" && typeof id === "string") {
        try {
          await db.insert(Assistant).values({
            id,
            name,
            enrollment: enrollmentNumber,
            email,
            social
          });
          return Astro2.redirect(`success?name=${name}`);
        } catch (e) {
          if (isDbError(e)) {
            console.error(`No se puede insertar un usuario con nombre ${name}

${e.message}`);
          } else {
            console.error("Se ha producido un error inesperado");
          }
        }
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Confirmaci\xF3n | ReuSoft 2024" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center min-h-screen justify-center"> <h1 class="text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-100 mb-12 ">Confirma tu asistencia</h1> ${renderComponent($$result2, "Form", $$Form, {}, { "default": ($$result3) => renderTemplate`  ${renderComponent($$result3, "Input", $$Input, { "name": "name", "type": "text", "title": "Nombre", "isRequired": true, "placeholder": "" })}  ${renderComponent($$result3, "Input", $$Input, { "name": "enrollment", "type": "number", "title": "Matr\xEDcula", "isRequired": true, "placeholder": "" })}  ${renderComponent($$result3, "Input", $$Input, { "name": "email", "type": "email", "title": "Email", "isRequired": true, "placeholder": "" })}  ${renderComponent($$result3, "Input", $$Input, { "name": "social", "type": "text", "title": "Instagram (opcional)", "isRequired": false, "placeholder": "" })} ` })} </div> ` })}`;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/pages/confirm.astro", void 0);

const $$file = "/Users/blossdev/Developer/Astro/reuSoft2024/src/pages/confirm.astro";
const $$url = "/confirm";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Confirm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
