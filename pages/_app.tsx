import type { AppProps } from 'next/app';
import Head from 'next/head';
import BaseStyles from '../source/base/BaseStyles';
import Footer from '../source/components/Footer';
import Header from '../source/components/Header';
import addBasePath from '../source/helpers/addBasePath';
import SiteContainer from '../source/layouts/SiteContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseStyles />
      <Head>
        <title>mdrayer.github.io</title>
        <meta name="description" content="mdrayer.github.io" />
        <link rel="icon" href={addBasePath('/favicon.ico')} />
      </Head>
      <SiteContainer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SiteContainer>
    </>
  );
}
export default MyApp;
