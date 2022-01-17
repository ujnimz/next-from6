import PageHero from '../components/layouts/body/PageHero';
import BlockManager from '../components/shared/BlockManager';
import CustomHeader from '../components/shared/CustomHeader';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_WORK_PAGE} from '../graphql/queries';

const Works = ({data, loading}) => {
  //console.log(data.workCategories.data);
  if (loading) return <div>Loading...</div>;

  if (data.workPage.data) {
    const {seoContent, heroImage, pageContent} = data.workPage.data.attributes;

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
    query: GET_WORK_PAGE,
  });
  return {
    props: {
      data,
      loading,
    },
  };
};

export default Works;
