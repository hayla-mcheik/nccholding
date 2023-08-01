import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.2/css/bootstrap.min.css"
            integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh2tybCk5pZRYqLPrZDgN7YLd6B9M4I3TjQ1Z"
            crossorigin="anonymous"
          />
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
        
        </body>
      </Html>
    );
  }
}

export default MyDocument;
