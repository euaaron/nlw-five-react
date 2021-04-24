import { useState } from "react";

import Header from "../shared/components/Header";
import Player from "../shared/components/Player";
import { PlayerContext } from "../shared/contexts/PlayerContext";

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
  }
  
  function togglePlay(state?:boolean) {
    state 
    ? setIsPlaying(state) 
    : setIsPlaying(!isPlaying)
  }
  
  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play, isPlaying, togglePlay }}>
      <GlobalStyles />
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </PlayerContext.Provider>
  );
}

export default MyApp;
