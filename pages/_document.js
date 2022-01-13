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
          <script src='https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js'></script>
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
