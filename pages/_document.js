import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        className="text-gray-800 dark:bg-gray-800 dark:text-white"
      >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://use.typekit.net" />
          <link rel="preconnect" href="https://p.typekit.net" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,300;0,400;0,700;1,200;1,400;1,700&family=JetBrains+Mono:wght@200;400;700&display=swap"
          />
          <link rel="stylesheet" href="https://use.typekit.net/nwo0khc.css" />
        </Head>
        <body className="font-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
