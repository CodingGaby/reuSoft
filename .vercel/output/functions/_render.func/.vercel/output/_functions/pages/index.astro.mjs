/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, b as renderSlot } from '../chunks/astro/server_Dw-mytcb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Wwsaj4mp.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$LinkBtn } from '../chunks/LinkBtn_Ca_amuhd.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DxYHcSDw.mjs';
import { d as db, A as Assistant } from '../chunks/_astro_db_CBoAvz3p.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<span id="demo" class="text-white text-5xl" data-astro-cid-rice64zl></span> <div id="container" class="text-white grid auto-cols-max grid-flow-col gap-5 text-center" data-astro-cid-rice64zl> <div class="bg-neutral rounded-md text-neutral-content flex flex-col p-2 border border-[#f4427d] bg-black" data-astro-cid-rice64zl> <span class="text-5xl" data-astro-cid-rice64zl> <span id="days" data-astro-cid-rice64zl></span> </span>
D\xEDas
</div> <div class="bg-neutral rounded-md text-neutral-content flex flex-col p-2 border border-[#f4427d] bg-black" data-astro-cid-rice64zl> <span class="text-5xl" data-astro-cid-rice64zl> <span id="hours" data-astro-cid-rice64zl></span> </span>
Hrs
</div> <div class="bg-neutral rounded-md text-neutral-content flex flex-col p-2 border border-[#f4427d] bg-black" data-astro-cid-rice64zl> <span class="text-5xl" data-astro-cid-rice64zl> <span id="mins" data-astro-cid-rice64zl></span> </span>
Mins
</div> <div class="bg-neutral rounded-md text-neutral-content flex flex-col p-2 border border-[#f4427d] bg-black" data-astro-cid-rice64zl> <span class="text-5xl" data-astro-cid-rice64zl> <span id="secs" data-astro-cid-rice64zl></span> </span>
Secs
</div> </div>  <script type="module">
// Set the date we're counting down to
var countDownDate = new Date(2024, 7, 30, 13, 0, 0).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "\xA1Comienza!";

    document.getElementById("container").classList.add("hidden")
  }
}, 1000);
<\/script>`])), maybeRenderHead());
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/Countdown.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24 flex items-center min-h-screen justify-center"> <div class="mx-auto max-w-[43rem]"> <div class="text-center"> <p class="text-lg leading-relaxed text-slate-400">Reunión de</p> <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Ingeniería de Software</h1> <p class="mt-3 text-lg leading-relaxed text-slate-400">- Conoce a tus compañeros de carrera en la UMAD -</p> </div> <div class="mt-6 flex items-center flex-col sm:flex-row justify-center gap-4"> <!---Boton prim--> ${renderComponent($$result, "LinkBtn", $$LinkBtn, { "href": "/confirm" }, { "default": ($$result2) => renderTemplate`
Confirma tu asistencia
` })} <a href="#details" class="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-200 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 ease-in-out hover:scale-110"> Detalles </a> </div> <div class="flex justify-center items-center py-8 "> ${renderComponent($$result, "Countdown", $$Countdown, {})} </div> </div> </section>`;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/Hero.astro", void 0);

const $$LocationIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-location" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path> </svg>`;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/icons/LocationIcon.astro", void 0);

const $$DescItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="md:flex md:items-center md:-mx-4" data-astro-cid-tqalstiq> <span class="inline-block p-2 bg-black border border-[#f4427d] rounded-lg md:mx-4" data-astro-cid-tqalstiq> <!--Icon--> ${renderSlot($$result, $$slots["Icon"])} </span> <div class="mt-4 md:mx-4 md:mt-0" data-astro-cid-tqalstiq> <h1 class="text-2xl font-semibold text-white capitalize" data-astro-cid-tqalstiq> ${renderSlot($$result, $$slots["title"])} </h1> <p class="mt-3 text-gray-400" data-astro-cid-tqalstiq> ${renderSlot($$result, $$slots["default"])} </p> </div> </div> `;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/icons/DescItem.astro", void 0);

const $$Title = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <h1 class="text-3xl font-semibold lg:text-4xl text-white"> ${renderSlot($$result, $$slots["default"])} </h1> <div class="mt-2"> <span class="inline-block w-40 h-1 rounded-full bg-[#f4427d]"></span> <span class="inline-block w-16 h-1 ml-1 rounded-full bg-[#f4427d]"></span> <span class="inline-block w-7 h-1 ml-1 rounded-full bg-[#f4427d]"></span> </div> </div>`;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/Title.astro", void 0);

const $$PizzaIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pizza" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z"></path> <path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479"></path> <path d="M13 11.01v-.01"></path> <path d="M11 14v-.01"></path> </svg>`;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/icons/PizzaIcon.astro", void 0);

const $$CupIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cup" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 11h14v-3h-14z"></path> <path d="M17.5 11l-1.5 10h-8l-1.5 -10"></path> <path d="M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"></path> <path d="M15 5v-2"></path> </svg>`;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/icons/CupIcon.astro", void 0);

const $$FriendIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-friends" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5"></path> <path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4"></path> </svg>`;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/icons/FriendIcon.astro", void 0);

const $$Details = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex items-center min-h-screen justify-center" id="details" data-astro-cid-4jmmo4cq> <div class="container px-6 py-10 mx-0 sm:mx-72" data-astro-cid-4jmmo4cq> <div class="lg:flex lg:items-center" data-astro-cid-4jmmo4cq> <div class="w-full sm:w-[600px] space-y-12 " data-astro-cid-4jmmo4cq> ${renderComponent($$result, "Title", $$Title, { "data-astro-cid-4jmmo4cq": true }, { "default": ($$result2) => renderTemplate`
Detalles <br data-astro-cid-4jmmo4cq>sobre la reunión
` })} ${renderComponent($$result, "DescItem", $$DescItem, { "data-astro-cid-4jmmo4cq": true }, { "Icon": ($$result2) => renderTemplate`${renderComponent($$result2, "LocationIcon", $$LocationIcon, { "slot": "Icon", "data-astro-cid-4jmmo4cq": true })}`, "default": ($$result2) => renderTemplate`  
Nos reuniremos en el Salón de Automatización. No faltes, ¡será una buena oportunidad para aprender en un ambiente relajado!
`, "title": ($$result2) => renderTemplate`<p data-astro-cid-4jmmo4cq>
Locación
</p>` })} ${renderComponent($$result, "DescItem", $$DescItem, { "data-astro-cid-4jmmo4cq": true }, { "Icon": ($$result2) => renderTemplate`${renderComponent($$result2, "PizzaIcon", $$PizzaIcon, { "slot": "Icon", "data-astro-cid-4jmmo4cq": true })}`, "default": ($$result2) => renderTemplate`  
Se pedirá pizza para todos los asistentes, según el dinero que se junte entre los participantes.
`, "title": ($$result2) => renderTemplate`<p data-astro-cid-4jmmo4cq>
Comida
</p>` })} ${renderComponent($$result, "DescItem", $$DescItem, { "data-astro-cid-4jmmo4cq": true }, { "Icon": ($$result2) => renderTemplate`${renderComponent($$result2, "CupIcon", $$CupIcon, { "slot": "Icon", "data-astro-cid-4jmmo4cq": true })}`, "default": ($$result2) => renderTemplate`  
Cada quien debe llevar sus propias bebidas (no alcohólicas). Recuerda mantenerte hidratado mientras disfrutamos.
`, "title": ($$result2) => renderTemplate`<p data-astro-cid-4jmmo4cq>
Bebidas
</p>` })} ${renderComponent($$result, "DescItem", $$DescItem, { "data-astro-cid-4jmmo4cq": true }, { "Icon": ($$result2) => renderTemplate`${renderComponent($$result2, "FriendIcon", $$FriendIcon, { "slot": "Icon", "data-astro-cid-4jmmo4cq": true })}`, "default": ($$result2) => renderTemplate`  
Conectarás con más gente de tu carrera, lo que siempre es útil para proyectos futuros, o simplemente hacer nuevas amistades.
`, "title": ($$result2) => renderTemplate`<p data-astro-cid-4jmmo4cq>
Conexión
</p>` })} </div> <div class="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center mt-32 ml-8" data-astro-cid-4jmmo4cq> ${renderComponent($$result, "Image", $$Image, { "class": "w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-lg border border-[#f4427d] p-2", "src": "https://firebasestorage.googleapis.com/v0/b/shop-e92d5.appspot.com/o/autophoto.jpeg?alt=media&token=93ad3036-a5fa-4603-846b-fa6f19400bda", "alt": "Automatizaci\xF3n", "loading": "lazy", "width": "448", "height": "448", "data-astro-cid-4jmmo4cq": true })} </div> </div> </div> </section> `;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/components/Details.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const comments = await db.select().from(Assistant);
  console.log(comments);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reuni\xF3n Software 2024 | UMAD" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Details", $$Details, {})} ` })}`;
}, "/Users/blossdev/Developer/Astro/reuSoft2024/src/pages/index.astro", void 0);

const $$file = "/Users/blossdev/Developer/Astro/reuSoft2024/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
