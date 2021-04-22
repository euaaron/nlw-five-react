import Header from "../components/Header";
import Player from "../components/Player";
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
