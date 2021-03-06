import Head from 'next/head';
import PropTypes from 'prop-types';

const CustomHeader = ({seoMeta}) => {
  let metaTitle = seoMeta ? seoMeta.metaTitle : '';
  let metaDescription = seoMeta ? seoMeta.metaTitle : '';

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name='description' content={metaDescription} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      {metaTitle && (
        <>
          <title>{metaTitle}</title>
          <meta property='og:title' content={metaTitle} />
          <meta name='twitter:title' content={metaTitle} />
        </>
      )}
      {metaDescription && (
        <>
          <meta name='description' content={metaDescription} />
          <meta property='og:description' content={metaDescription} />
          <meta name='twitter:description' content={metaDescription} />
        </>
      )}
      {/* {shareImage && (
        <>
          <meta property="og:image" content={shareImage} />
          <meta name="twitter:image" content={shareImage} />
          <meta name="image" content={shareImage} />
        </>
      )}
      {article && <meta property="og:type" content="article" />} */}
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  );
};

CustomHeader.propTypes = {
  seoMeta: PropTypes.object,
};

export default CustomHeader;
