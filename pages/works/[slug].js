import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import PageHero from '../../components/layouts/body/PageHero';
import BlockManager from '../../components/shared/BlockManager';
import CustomHeader from '../../components/shared/CustomHeader';
import LoadingIcon from '../../components/layouts/body/LoadingIcon';
import NoDataScreen from '../../components/layouts/body/NoDataScreen';
// GET DATA
import {apolloCon} from '../../con/apolloCon';
import {GET_WORKS, GET_SINGLE_WORK} from '../../graphql/queries';

const SingleWork = ({data, loading}) => {
  const variants = {
    hidden: {opacity: 0, x: 0, y: -200},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -200},
  };

  if (loading) return <LoadingIcon />;

  if (!data || !data.attributes) return <NoDataScreen />;

  const {seoContent, heroImage, pageContent, clientName, workCategories} =
    data.attributes;

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
        <div className='flex justify-center bg-accent'>
          <div className='container py-4 px-4 lg:px-0 flex flex-wrap justify-between'>
            <div className='flex w-full lg:w-1/2'>
              <p className='text-xl font-thin text-base-content'>
                Client: {clientName}
              </p>
            </div>
            <div className='flex'>
              <p className='text-xl font-thin text-base-content'>Elements:</p>
              <p className='text-xl font-thin text-base-content divide-inherit divide-x-2'>
                {workCategories.data.map((item, index) => (
                  <span className='px-2' key={index}>
                    {item.attributes.title}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <BlockManager blocks={pageContent} />
      </motion.main>
    </>
  );
};

export const getStaticPaths = async () => {
  const {data, loading, error} = await apolloCon.query({
    query: GET_WORKS,
  });
  if (error) console.log(error);
  // Get the paths we want to pre-render based on posts
  const paths = data.works.data.map(post => ({
    params: {slug: post.attributes.slug},
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {paths, fallback: false};
};

export async function getStaticProps({params}) {
  // Get single work data for params.slug
  const {data, loading, error} = await apolloCon.query({
    query: GET_SINGLE_WORK,
    variables: {slug: params.slug},
  });
  if (error) console.log(error);
  // Pass post data to the page via props
  return {props: {data: data.works.data[0], loading}};
}

SingleWork.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SingleWork;
