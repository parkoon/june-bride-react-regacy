import { useStaticQuery, graphql } from 'gatsby'

type Meta = {
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
export const useSiteMetadata = () => {
  const { site } = useStaticQuery<Meta>(
    graphql`
      query SiteMetaData {
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
  return site.siteMetadata
}
