import { Helmet } from 'react-helmet-async'

function Head() {
    return (
        <Helmet>
            <html lang="ko" />
            <title>title</title>
            <meta name="description" content="description" />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="title" />
            <meta property="og:description" content="description" />
            <meta property="og:image" content="image" />
            <meta property="og:url" content="siteUrl" />
            <meta property="og:site_name" content="title" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="title" />
            <meta name="twitter:description" content="description" />
            <meta name="twitter:image" content="image" />
            <meta name="twitter:site" content="author" />
            <meta name="twitter:creator" content="author" />
        </Helmet>
    )
}

export default Head
