import Head  from 'next/head';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { usePlayer } from "../../contexts/PlayerContext";
import Img from "../GrayImg";

import Theme from "../../../configs/Themes";

import {
  Container,
  Controls,
  PlayPause,
  Button,
  Idle,
  Playing,
  Header,
  Progress,
  EmptySlider,
  Footer,
} from "./styles";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";

export default function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const {
    currentEpisodeIndex,
    clearPlayerState,
    episodeList,
    hasNext,
    hasPrevious,
    isLooping,
    isPlaying,
    isShuffling,
    playNext,
    playPrevious,
    toggleLoop,
    togglePlay,
    toggleShuffle,
  } = usePlayer();

  useEffect(() => {
    audioRef.current &&
      (isPlaying ? audioRef.current.play() : audioRef.current.pause());
  }, [isPlaying]);

  const episode = episodeList[currentEpisodeIndex];

  const theme = new Theme();

  const progressListener = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  };

  function dragProgress(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEndOfEpisode() {
    hasNext ? playNext() : clearPlayerState();
  }

  return (
    <Container>
      <Head>
        <title>{ episode ? (isPlaying ? "Playing ● " : "Paused ● ") + episode.title : "Podcastr"}</title>
      </Head>
      <Header>
        <div>
          <Img src="/playing.svg" alt="Podcastr Player" />
          <strong>Now Playing</strong>
        </div>
      </Header>

      {episode ? (
        <Playing>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
            alt={episode.title}
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </Playing>
      ) : (
        <Idle>
          <strong>Selecione um podcast para ouvir</strong>
        </Idle>
      )}

      <Footer>
        <Progress>
          <span>{convertDurationToTimeString(progress)}</span>
          {episode ? (
            <Slider
              max={episode.duration}
              value={progress}
              onChange={dragProgress}
              trackStyle={{ backgroundColor: theme.green }}
              railStyle={{ backgroundColor: theme.selectionBackground }}
              handleStyle={{
                backgroundColor: theme.green,
                borderWidth: "4px",
              }}
            />
          ) : (
            <EmptySlider></EmptySlider>
          )}
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </Progress>

        {episode && (
          <audio
            autoPlay
            loop={isLooping}
            onLoadedMetadata={progressListener}
            onPlay={() => togglePlay(true)}
            onEnded={handleEndOfEpisode}
            ref={audioRef}
            src={episode.url}
          />
        )}

        <Controls>
          <Button
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={() => toggleShuffle()}
            isActive={isShuffling}
          >
            <img src="/shuffle.svg" alt="Random"></img>
          </Button>
          <Button
            type="button"
            disabled={!episode || !hasPrevious}
            onClick={playPrevious}
          >
            <img src="/play-previous.svg" alt="Play Previous"></img>
          </Button>
          <PlayPause
            type="button"
            disabled={!episode}
            onClick={() => togglePlay()}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="Pause"></img>
            ) : (
              <img src="/play.svg" alt="Play"></img>
            )}
          </PlayPause>
          <Button
            type="button"
            disabled={!episode || !hasNext}
            onClick={playNext}
          >
            <img src="/play-next.svg" alt="Play Next"></img>
          </Button>
          <Button
            type="button"
            disabled={!episode}
            onClick={() => toggleLoop()}
            isActive={isLooping}
          >
            <img src="/repeat.svg" alt="Repeat"></img>
          </Button>
        </Controls>
      </Footer>
    </Container>
  );
}
