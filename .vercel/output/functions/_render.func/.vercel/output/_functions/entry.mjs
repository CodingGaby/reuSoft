import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B0dD8ioG.mjs';
import { manifest } from './manifest_i0UBKdp1.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/confirm.astro.mjs');
const _page2 = () => import('./pages/success.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/confirm.astro", _page1],
    ["src/pages/success.astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "77d25822-13e3-489e-b2dc-add3e40a8c60",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
