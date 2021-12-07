import type { AppProps } from 'next/app';
import Head from 'next/head';
import BaseStyles from '../source/base/BaseStyles';
import Footer from '../source/components/Footer';
import Header from '../source/components/Header';
import SiteContainer from '../source/layouts/SiteContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseStyles />
      <Head>
        <title>mdrayer.github.io</title>
        <meta name="description" content="mdrayer.github.io" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
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
