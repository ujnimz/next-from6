import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import MainLayout from '../components/layouts/MainLayout';
import Loading from '../components/layouts/body/Loading';
// GET DATA
import {apolloCon} from '../con/apolloCon';
import {GET_SETTINGS} from '../graphql/queries';

function MyApp({Component, pageProps, data, dataLoading}) {
  //const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  //console.log(dataLoading);
  return (
    <>
      {/* {!loading && !dataLoading ? ( */}
      <MainLayout data={data}>
        <Component {...pageProps} />
      </MainLayout>
      {/* ) : ( */}
      {/* <Loading /> */}
      {/* )} */}
    </>
  );
}

MyApp.getInitialProps = async ctx => {
  const {data, loading, error} = await apolloCon.query({
    query: GET_SETTINGS,
  });
  if (error) console.log(error);
  return {
    data,
    dataLoading: loading,
  };
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
  data: PropTypes.object.isRequired,
  dataLoading: PropTypes.bool.isRequired,
};

export default MyApp;
