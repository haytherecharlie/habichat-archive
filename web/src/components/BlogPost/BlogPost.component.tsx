import React from 'react'
import { graphql } from 'gatsby'
import PageWrapper from 'src/components/PageWrapper'
import * as S from './BlogPost.style'

const BlogPost = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html }
  } = data

  return (
    <PageWrapper>
      <S.BlogTitle>{frontmatter.title}</S.BlogTitle>
      <S.BlogDate>{frontmatter.date}</S.BlogDate>
      <S.Content dangerouslySetInnerHTML={{ __html: html }} />
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
