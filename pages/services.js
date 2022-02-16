import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import HeroImage from '../components/layouts/body/HeroImage';
import BlockManager from '../components/shared/BlockManager';
import CustomHeader from '../components/shared/CustomHeader';
import LoadingIcon from '../components/layouts/body/LoadingIcon';
import NoDataScreen from '../components/layouts/body/NoDataScreen';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_SERVICES_PAGE} from '../graphql/queries';

const Services = ({data, loading}) => {
  const variants = {
    hidden: {opacity: 0, x: 0, y: -200},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -200},
  };

  if (loading) return <LoadingIcon />;

  if (!data || !data.servicesPage || !data.servicesPage.data)
    return <NoDataScreen />;

  const {seoContent, heroImage, pageContent} =
    data.servicesPage.data.attributes;

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
        <HeroImage image={heroImage} />
        <BlockManager blocks={pageContent} />
      </motion.main>
    </>
  );
};

export const getStaticProps = async () => {
  const {data, loading, error} = await apolloCon.query({
    query: GET_SERVICES_PAGE,
  });
  if (error) console.log(error);
  return {
    props: {
      data,
      loading,
    },
  };
};

Services.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Services;
