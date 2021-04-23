import { Head } from "next/document";
import Header from "../shared/components/Header";
import Player from "../shared/components/Player";
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </>
  )
}

export default MyApp
