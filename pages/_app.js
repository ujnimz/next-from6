import {useState, useEffect} from 'react';
//import {useRouter} from 'next/router';
import '../styles/globals.css';
import MainLayout from '../components/layouts/MainLayout';
import Loading from '../components/layouts/body/Loading';

function MyApp({Component, pageProps}) {
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
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default MyApp;
