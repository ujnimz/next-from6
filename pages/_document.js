import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html data-theme=''>
        <Head>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'></script>
        </Head>
        <body className='font-serif antialiased'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
