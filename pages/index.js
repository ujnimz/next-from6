import HomeSlider from '../components/layouts/body/HomeSlider';
import BlockManager from '../components/shared/BlockManager';
import CustomHeader from '../components/shared/CustomHeader';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_HOME_PAGE} from '../graphql/queries';

const Home = ({data, loading}) => {
  if (loading) return <div>Loading...</div>;

  if (data.homePage.data) {
    const {seoContent, pageContent, slider} = data.homePage.data.attributes;

    return (
      <>
        <CustomHeader seoMeta={seoContent} />

        <main>
          <HomeSlider data={slider} />
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
    query: GET_HOME_PAGE,
  });

  return {
    props: {
      data,
      loading,
    },
  };
};

export default Home;
