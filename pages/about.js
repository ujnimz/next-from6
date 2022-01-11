import PageHero from '../components/layouts/body/PageHero';
import BlockManager from '../components/shared/BlockManager';
import CustomHeader from '../components/shared/CustomHeader';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_ABOUT} from '../graphql/queries';

const About = ({data, loading}) => {
  if (loading) return <div>Loading...</div>;

  if (data.aboutPage.data) {
    const {seoContent, heroImage, pageContent} = data.aboutPage.data.attributes;

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
    query: GET_ABOUT,
  });
  return {
    props: {
      data,
      loading,
    },
  };
};

export default About;
