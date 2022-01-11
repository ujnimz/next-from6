import HomeSlider from '../components/layouts/body/HomeSlider';
import BlockManager from '../components/shared/BlockManager';
import CustomHeader from '../components/shared/CustomHeader';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_HOME} from '../graphql/queries';

const Home = ({data, loading}) => {
  const {seoContent, pageContent} = data.homePage.data.attributes;

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <CustomHeader seoMeta={seoContent} />

      <main className=''>
        <HomeSlider />
        <BlockManager blocks={pageContent} />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const {data, loading, error} = await apolloCon.query({
    query: GET_HOME,
  });
  return {
    props: {
      data,
      loading,
    },
  };
};

export default Home;
