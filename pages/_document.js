import Document, { Html, Head, Main, NextScript } from "next/document";

const metadata = {
  title: "Movie Search",
  description: "Generated movie searcher",
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <title>{metadata.title}</title>
       <meta name="description" content={metadata.description} />
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