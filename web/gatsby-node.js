const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/BlogPost/BlogPost.component.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions
  return new Promise((resolve) => {
    if (page.componentPath === `${__dirname}/src/pages/Home/index.tsx`) {
      deletePage(page)
      createPage({
        ...page,
        path: '/'
      })
    }
    resolve()
  })
}
