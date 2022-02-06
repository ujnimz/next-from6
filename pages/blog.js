import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import PageHero from '../components/layouts/body/PageHero';
import BlockManager from '../components/shared/BlockManager';
import CustomHeader from '../components/shared/CustomHeader';
import LoadingIcon from '../components/layouts/body/LoadingIcon';
import NoDataScreen from '../components/layouts/body/NoDataScreen';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_BLOG_PAGE} from '../graphql/queries';

const Blog = ({data, loading}) => {
  const variants = {
    hidden: {opacity: 0, x: 0, y: -200},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -200},
  };

  if (loading) return <LoadingIcon />;

  if (!data || !data.blogPage || !data.blogPage.data) return <NoDataScreen />;

  const {seoContent, heroImage, pageContent} = data.blogPage.data.attributes;

  return (
    <>
      <CustomHeader seoMeta={seoContent} />

      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{type: 'spring', duration: 1}}
      >
        <PageHero image={heroImage} />
        <BlockManager blocks={pageContent} />
      </motion.main>
    </>
  );
};

export const getStaticProps = async () => {
  const {data, loading, error} = await apolloCon.query({
    query: GET_BLOG_PAGE,
  });
  if (error) console.log(error);
  return {
    props: {
      data,
      loading,
    },
  };
};

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Blog;
