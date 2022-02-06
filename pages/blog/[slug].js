import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import BlockManager from '../../components/shared/BlockManager';
import CustomHeader from '../../components/shared/CustomHeader';
import LoadingIcon from '../../components/layouts/body/LoadingIcon';
import NoDataScreen from '../../components/layouts/body/NoDataScreen';
// GET DATA
import {apolloCon} from '../../con/apolloCon';
import {GET_POSTS, GET_SINGLE_POST} from '../../graphql/queries';

const SinglePost = ({data, loading}) => {
  const variants = {
    hidden: {opacity: 0, x: 0, y: -200},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -200},
  };

  if (loading) return <LoadingIcon />;

  if (!data || !data.attributes) return <NoDataScreen />;

  const {seoContent, pageContent} = data.attributes;

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
        <BlockManager blocks={pageContent} />
      </motion.main>
    </>
  );
};

export const getStaticPaths = async () => {
  const {data, loading, error} = await apolloCon.query({
    query: GET_POSTS,
  });

  // Get the paths we want to pre-render based on posts
  const paths = data.posts.data.map(post => ({
    params: {slug: post.attributes.slug},
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {paths, fallback: false};
};

export async function getStaticProps({params}) {
  // Get single work data for params.slug
  const {data, loading, error} = await apolloCon.query({
    query: GET_SINGLE_POST,
    variables: {slug: params.slug},
  });
  // Pass post data to the page via props
  return {props: {data: data.posts.data[0], loading}};
}

SinglePost.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SinglePost;
