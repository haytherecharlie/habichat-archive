import React from 'react'
import { graphql } from 'gatsby'
import PageWrapper from 'src/components/universal/PageWrapper'
import * as S from './BlogPost.style'

const BlogPost = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html }
  } = data

  return (
    <PageWrapper>
      <div>{frontmatter.title}</div>
      <div>{frontmatter.date}</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </PageWrapper>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default BlogPost
