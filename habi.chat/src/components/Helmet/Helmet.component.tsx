import React from 'react'
import { Helmet as Head } from 'react-helmet'

interface Props {
  seo: {
    title: string
    description: string
    robots: string
  }
}

const Helmet = ({ seo }: Props) => (
  <Head>
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta name="robots" content={seo.robots} />
  </Head>
)

export default Helmet
