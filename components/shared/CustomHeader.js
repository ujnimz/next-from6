import Head from 'next/head';

const CustomHeader = ({seoMeta}) => {
  const {metaTitle = '', metaDescription = ''} = seoMeta;
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name='description' content={metaDescription} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  );
};

export default CustomHeader;
