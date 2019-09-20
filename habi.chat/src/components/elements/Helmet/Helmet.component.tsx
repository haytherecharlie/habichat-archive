import React from 'react'
import { Helmet as Head } from 'react-helmet'
import { HelmetProps } from 'interfaces'

const Helmet = ({ seo }: HelmetProps) => (
  <Head>
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta name="robots" content={seo.robots} />
  </Head>
)

export default Helmet
