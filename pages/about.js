import PageHero from '../components/layouts/body/PageHero';
import BlockManager from '../components/shared/BlockManager';
import CustomHeader from '../components/shared/CustomHeader';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_ABOUT} from '../graphql/queries';

const About = ({data, loading}) => {
  const {seoContent, heroImage, pageContent} = data.about.data.attributes;

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <CustomHeader seoMeta={seoContent} />

      <main>
        <PageHero image={heroImage} />
        <BlockManager blocks={pageContent} />
      </main>
    </>
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
