import PropTypes from 'prop-types';
import PageHero from '../components/layouts/body/PageHero';
import BlockManager from '../components/shared/BlockManager';
import CustomHeader from '../components/shared/CustomHeader';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_SERVICES_PAGE} from '../graphql/queries';

const Services = ({data, loading}) => {
  if (loading) return <div>Loading...</div>;

  if (data.servicesPage.data) {
    const {seoContent, heroImage, pageContent} =
      data.servicesPage.data.attributes;

    return (
      <>
        <CustomHeader seoMeta={seoContent} />

        <main>
          <PageHero image={heroImage} />
          <BlockManager blocks={pageContent} />
        </main>
      </>
    );
  }

  return (
    <div className='flex justify-center py-12 lg:py-20 bg-accent'>
      <h1>No data. Please publish the page.</h1>
    </div>
  );
};

export const getStaticProps = async () => {
  const {data, loading, error} = await apolloCon.query({
    query: GET_SERVICES_PAGE,
  });
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
