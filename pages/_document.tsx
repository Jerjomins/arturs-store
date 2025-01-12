import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* SEO Meta Tags */}
                    <meta name="description" content="Arturs Store - Exclusive Products" />
                    <meta name="keywords" content="products, store, shopping, arturs store" />
                    <meta property="og:title" content="Arturs Store" />
                    <meta property="og:description" content="Discover exclusive products at Arturs Store!" />
                    <meta property="og:image" content="url_to_image" />
                    <meta property="og:url" content="http://store.arturs.club" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:creator" content="@yourhandle" />
                    <meta name="twitter:title" content="Arturs Store" />
                    <meta name="twitter:description" content="Discover exclusive products at Arturs Store!" />
                    <meta name="twitter:image" content="url_to_image" />

                    <link rel="icon" href="/favicon.ico" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
