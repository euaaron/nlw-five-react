import { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { PlayerContext } from "../../contexts/PlayerContext";
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

export default function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { 
    episodeList, 
    currentEpisodeIndex, 
    isPlaying,
    togglePlay
  } = useContext(PlayerContext);

  useEffect(() => {
    audioRef.current && (
      isPlaying 
      ? audioRef.current.play() 
      : audioRef.current.pause() 
    );
  }, [isPlaying]);

  const episode = episodeList[currentEpisodeIndex];

  const theme = new Theme();

  return (
    <Container>
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
          <span>00:00</span>
          {episode ? (
            <Slider
              trackStyle={{ backgroundColor: theme.green }}
              railStyle={{ backgroundColor: theme.selectionBackground }}
              handleStyle={{ backgroundColor: theme.green, borderWidth: "4px" }}
            />
          ) : (
            <EmptySlider></EmptySlider>
          )}
          <span>00:00</span>
        </Progress>

        {episode && (
        <audio 
          src={episode.url} 
          ref={audioRef}
          autoPlay
          onPlay={() => togglePlay(true)}
          />
          )}

        <Controls>
          <Button type="button" disabled={!episode}>
            <img src="/shuffle.svg" alt="Random"></img>
          </Button>
          <Button type="button" disabled={!episode}>
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
          <Button type="button" disabled={!episode}>
            <img src="/play-next.svg" alt="Play Next"></img>
          </Button>
          <Button type="button" disabled={!episode}>
            <img src="/repeat.svg" alt="Repeat"></img>
          </Button>
        </Controls>
      </Footer>
    </Container>
  );
}
