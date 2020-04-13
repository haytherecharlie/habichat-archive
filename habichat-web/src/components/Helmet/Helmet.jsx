import React from 'react'
import { Helmet as Head } from 'react-helmet'

const Helmet = ({ seo }) => (
  <Head>
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta name="robots" content={seo.robots} />
  </Head>
)

export default Helmet
