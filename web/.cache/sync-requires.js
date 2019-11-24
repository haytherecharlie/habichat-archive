const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-blog-post-blog-post-component-tsx": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/src/components/BlogPost/BlogPost.component.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/.cache/dev-404-page.js"))),
  "component---src-pages-404-index-tsx": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/src/pages/404/index.tsx"))),
  "component---src-pages-home-home-component-tsx": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/src/pages/Home/Home.component.tsx"))),
  "component---src-pages-home-home-style-ts": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/src/pages/Home/Home.style.ts"))),
  "component---src-pages-home-index-tsx": hot(preferDefault(require("/Users/haytrix/Documents/haytherecharlie/habichat/web/src/pages/Home/index.tsx")))
}

