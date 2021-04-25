import Header from "../shared/components/Header";
import Player from "../shared/components/Player";
import { PlayerContextProvider } from "../shared/contexts/PlayerContext";

import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <GlobalStyles />
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </PlayerContextProvider>
  );
}

export default MyApp;
