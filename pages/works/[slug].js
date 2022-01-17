import PageHero from '../../components/layouts/body/PageHero';
import BlockManager from '../../components/shared/BlockManager';
import CustomHeader from '../../components/shared/CustomHeader';
// GET DATA
import {apolloCon} from '../../con/apolloCon';
import {GET_WORKS, GET_SINGLE_WORK} from '../../graphql/queries';

const SingleWork = ({data, loading}) => {
  if (loading) return <div>Loading...</div>;

  if (data) {
    const {seoContent, heroImage, pageContent} = data.attributes;

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

export const getStaticPaths = async () => {
  const {data, loading, error} = await apolloCon.query({
    query: GET_WORKS,
  });

  // Get the paths we want to pre-render based on posts
  const paths = data.works.data.map(post => ({
    params: {slug: post.attributes.slug},
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {paths, fallback: false};
};

export async function getStaticProps({params}) {
  // Get single work data for params.slug
  const {data, loading, error} = await apolloCon.query({
    query: GET_SINGLE_WORK,
    variables: {slug: params.slug},
  });
  // Pass post data to the page via props
  return {props: {data: data.works.data[0], loading}};
}

export default SingleWork;
