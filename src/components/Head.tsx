import { graphql, useStaticQuery } from 'gatsby'
import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

type MetaData = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      url: string
      image: string
    }
  }
}
const Head: FunctionComponent = () => {
  const {
    site: {
      siteMetadata: { title, description, author, url, image },
    },
  } = useStaticQuery<MetaData>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            image
          }
        }
      }
    `,
  )

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={author} />
      <meta name="twitter:creator" content={author} />
    </Helmet>
  )
}

export default Head
