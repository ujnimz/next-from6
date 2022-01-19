import {useState, useEffect} from 'react';
//import {useRouter} from 'next/router';
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
    // const handleStart = url => {
    //   url !== router.pathname ? setLoading(true) : setLoading(false);
    // };
    // const handleComplete = url => setLoading(false);

    // router.events.on('routeChangeStart', handleStart);
    // router.events.on('routeChangeComplete', handleComplete);
    // router.events.on('routeChangeError', handleComplete);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {!loading && !dataLoading ? (
        <MainLayout data={data}>
          <Component {...pageProps} />
        </MainLayout>
      ) : (
        <Loading />
      )}
    </>
  );
}

MyApp.getInitialProps = async ctx => {
  const {data, loading, error} = await apolloCon.query({
    query: GET_SETTINGS,
  });

  return {
    data,
    dataLoading: loading,
  };
};

export default MyApp;
