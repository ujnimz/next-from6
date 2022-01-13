import PageHero from '../../components/shared/BlockManager';
import BlockManager from '../../components/shared/BlockManager';
import CustomHeader from '../../components/shared/CustomHeader';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_ABOUT} from '../../graphql/queries';

const SingleWork = ({data, loading}) => {
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

// export const getStaticPaths = async () => {
//   const {data, loading, error} = await apolloCon.query({
//     query: GET_WORKS,
//   });
//   console.log(data);
//   const {works} = data;
//   return {
//     paths: works.map(item => ({
//       params: {
//         slug: item.slug,
//       },
//     })),
//     fallback: false,
//   };
// };

export const getStaticProps = async ({params}) => {
  const {data, loading, error} = await apolloCon.query({
    query: GET_ABOUT,
    variables: {slug: params.slug},
  });
  return {
    props: {
      data,
      loading,
    },
  };
};

export default SingleWork;
