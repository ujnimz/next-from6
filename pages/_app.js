import '../styles/globals.css';
import MainLayout from '../components/layouts/MainLayout';
//import MainFooter from './footer/MainFooter';

function MyApp({Component, pageProps}) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
