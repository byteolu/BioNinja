import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next Linkedin bio in seconds."
          />
          <meta property="og:site_name" content="Bioninja.io" />
          <meta
            property="og:description"
            content="Generate your next Linkedin bio in seconds."
          />
          <meta property="og:title" content="Linkedin Bio Generator" />
          <meta name="Linkedin:card" content="summary_large_image" />
          <meta name="Linkedin:title" content="Linkedin Bio Generator" />
          <meta
            name="Linkedin:description"
            content="Generate your next Linkedin bio in seconds."
          />
          <meta
            property="og:image"
            content="https://Bioninja.io/og-image.png"
          />
          <meta
            name="Linkedin:image"
            content="https://Bioninja.io/og-image.png"
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
