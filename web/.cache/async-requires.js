// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-blogpost-tsx": () => import("../src/pages/_blogpost.tsx" /* webpackChunkName: "component---src-pages-blogpost-tsx" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-community-tsx": () => import("../src/pages/community.tsx" /* webpackChunkName: "component---src-pages-community-tsx" */),
  "component---src-pages-index-tsx": () => import("../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-testing-tsx": () => import("../src/pages/testing.tsx" /* webpackChunkName: "component---src-pages-testing-tsx" */)
}

