import { createContext } from 'react';

type IEpisode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

type PlayerContextData = {
  episodeList: IEpisode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: IEpisode) => void;
  togglePlay: (state?: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerContextData);