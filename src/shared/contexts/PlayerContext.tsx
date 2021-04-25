import { Context, createContext, ReactNode, useContext, useState } from "react";

type IEpisode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: IEpisode[];
  currentEpisodeIndex: number;
  clearPlayerState: () => void;
  isLooping: boolean;
  isPlaying: boolean;
  isShuffling: boolean;
  play: (episode: IEpisode) => void;
  playList: (list: IEpisode[], index: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  toggleLoop: () => void;
  togglePlay: (state?: boolean) => void;
  toggleShuffle: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
};

type PlayerContextProviderProps = {
  children: ReactNode;
}
export const PlayerContext = createContext({} as PlayerContextData);

export const PlayerContextProvider = ({children}: PlayerContextProviderProps) => {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  
  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    togglePlay(true);
  }

  function playList(list: IEpisode[], index: number) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  const hasPrevious = currentEpisodeIndex != 0;
  const hasNext = isShuffling || (currentEpisodeIndex + 1) < episodeList.length;

  function playNext() {
    const randomEpisode = Math.floor(Math.random() * episodeList.length);
    isShuffling 
    ? setCurrentEpisodeIndex(randomEpisode)
    : hasNext && setCurrentEpisodeIndex(currentEpisodeIndex + 1);
  }

  function playPrevious() {
    hasPrevious && setCurrentEpisodeIndex(currentEpisodeIndex - 1);
  }

  function togglePlay(state?: boolean) {
    state ? setIsPlaying(state) : setIsPlaying(!isPlaying)
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  function clearPlayerState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <PlayerContext.Provider
      value={{
      currentEpisodeIndex,
      clearPlayerState,
      episodeList,
      isLooping,
      isPlaying,
      isShuffling,
      hasNext,
      hasPrevious,
      play,
      playList,
      playNext,
      playPrevious,
      toggleLoop,
      togglePlay,
      toggleShuffle,
      }}>
      {children}
      </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
}