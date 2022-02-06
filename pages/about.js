import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import PageHero from '../components/layouts/body/PageHero';
import BlockManager from '../components/shared/BlockManager';
import CustomHeader from '../components/shared/CustomHeader';
import LoadingIcon from '../components/layouts/body/LoadingIcon';
import NoDataScreen from '../components/layouts/body/NoDataScreen';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_ABOUT_PAGE} from '../graphql/queries';

const About = ({data, loading}) => {
  const variants = {
    hidden: {opacity: 0, x: 0, y: -200},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -200},
  };

  if (loading) return <LoadingIcon />;

  if (!data || !data.aboutPage || !data.aboutPage.data) return <NoDataScreen />;

  const {seoContent, heroImage, pageContent} = data.aboutPage.data.attributes;

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
    query: GET_ABOUT_PAGE,
  });
  if (error) console.log(error);
  return {
    props: {
      data,
      loading,
    },
  };
};

About.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default About;
