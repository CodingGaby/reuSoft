import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_Cb2cCUUj.mjs';
import { g as decodeKey } from './chunks/astro/server_Dw-mytcb.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/blossdev/Developer/Astro/reuSoft2024/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/confirm.Bm6fZ3Mv.css"},{"type":"inline","content":"div[data-astro-cid-4xpkk25o]{font-family:Space Mono,monospace}input[data-astro-cid-376wvddf][type=number]::-webkit-inner-spin-button,input[data-astro-cid-376wvddf][type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[data-astro-cid-376wvddf][type=number]{-moz-appearance:textfield}\n"}],"routeData":{"route":"/confirm","isIndex":false,"type":"page","pattern":"^\\/confirm\\/?$","segments":[[{"content":"confirm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/confirm.astro","pathname":"/confirm","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.9jzGJDLO.js"}],"styles":[{"type":"external","src":"/_astro/confirm.Bm6fZ3Mv.css"}],"routeData":{"route":"/success","isIndex":false,"type":"page","pattern":"^\\/success\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/success.astro","pathname":"/success","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/confirm.Bm6fZ3Mv.css"},{"type":"inline","content":"@font-face{font-family:Space Mono;font-style:normal;font-display:swap;font-weight:700;src:url(/_astro/space-mono-vietnamese-700-normal.0hHzGqcB.woff2) format(\"woff2\"),url(/_astro/space-mono-vietnamese-700-normal.CkMttlPH.woff) format(\"woff\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Space Mono;font-style:normal;font-display:swap;font-weight:700;src:url(/_astro/space-mono-latin-ext-700-normal.DVvWKYIc.woff2) format(\"woff2\"),url(/_astro/space-mono-latin-ext-700-normal.rbeaugf4.woff) format(\"woff\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Space Mono;font-style:normal;font-display:swap;font-weight:700;src:url(/_astro/space-mono-latin-700-normal.DQ28t8ia.woff2) format(\"woff2\"),url(/_astro/space-mono-latin-700-normal.DVWAw1oV.woff) format(\"woff\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}div[data-astro-cid-rice64zl],span[data-astro-cid-rice64zl],h1[data-astro-cid-tqalstiq],h1[data-astro-cid-4jmmo4cq]{font-family:Space Mono,monospace}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/blossdev/Developer/Astro/reuSoft2024/src/pages/confirm.astro",{"propagation":"none","containsHead":true}],["/Users/blossdev/Developer/Astro/reuSoft2024/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/blossdev/Developer/Astro/reuSoft2024/src/pages/success.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/success@_@astro":"pages/success.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/confirm@_@astro":"pages/confirm.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/blossdev/Developer/Astro/reuSoft2024/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_i0UBKdp1.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.9jzGJDLO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/space-mono-latin-ext-700-normal.DVvWKYIc.woff2","/_astro/space-mono-latin-700-normal.DQ28t8ia.woff2","/_astro/space-mono-vietnamese-700-normal.0hHzGqcB.woff2","/_astro/space-mono-vietnamese-700-normal.CkMttlPH.woff","/_astro/space-mono-latin-ext-700-normal.rbeaugf4.woff","/_astro/space-mono-latin-700-normal.DVWAw1oV.woff","/_astro/confirm.Bm6fZ3Mv.css","/favicon.svg","/_astro/hoisted.9jzGJDLO.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"s68pR1/UHiDqh//0uWNi4hRwlbz996zX9Dw/ZMBsm34=","experimentalEnvGetSecretEnabled":false});

export { manifest };
