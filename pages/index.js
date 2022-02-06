import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import HomeSlider from '../components/layouts/body/HomeSlider';
import BlockManager from '../components/shared/BlockManager';
import CustomHeader from '../components/shared/CustomHeader';
import LoadingIcon from '../components/layouts/body/LoadingIcon';
import NoDataScreen from '../components/layouts/body/NoDataScreen';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_HOME_PAGE} from '../graphql/queries';

const Home = ({data, loading}) => {
  const variants = {
    hidden: {opacity: 0},
    enter: {opacity: 1},
    exit: {opacity: 0},
  };

  if (loading) return <LoadingIcon />;

  if (!data || !data.homePage || !data.homePage.data) return <NoDataScreen />;

  const {seoContent, pageContent, slider} = data.homePage.data.attributes;

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
        <HomeSlider data={slider} />
        <BlockManager blocks={pageContent} />
      </motion.main>
    </>
  );
};

export const getStaticProps = async context => {
  const {data, loading, error} = await apolloCon.query({
    query: GET_HOME_PAGE,
  });
  if (error) console.log(error);
  return {
    props: {
      data,
      loading,
    },
  };
};

Home.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;
