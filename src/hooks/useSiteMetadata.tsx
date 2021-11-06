import { useStaticQuery, graphql } from 'gatsby'

type Meta = {
    site: {
        siteMetadata: {
            title: string
            description: string
            author: string
            siteUrl: string
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
                        siteUrl
                        image
                    }
                }
            }
        `
    )
    return site.siteMetadata
}
