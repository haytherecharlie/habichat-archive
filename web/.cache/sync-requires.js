const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-blogpost-tsx": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/src/pages/_blogpost.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/src/pages/404.tsx"))),
  "component---src-pages-community-tsx": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/src/pages/community.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/src/pages/index.tsx"))),
  "component---src-pages-testing-tsx": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/src/pages/testing.tsx")))
}

