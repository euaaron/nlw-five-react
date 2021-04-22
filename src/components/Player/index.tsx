import Img from '../shared/GrayImg';
import { Container } from './styles';

export default function Player() {
  return (
    <Container>
      <header>
        <Img src="/playing.svg" alt="Podcastr Player" />
        <strong>Now Playing</strong>
      </header>

      <div>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer>
        <div>
          <span>00:00</span>
          <div></div>
          <span>00:00</span>
        </div>
        <div>
          <button type="button">
            <img src="/shuffle.svg" alt="Random"></img>
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Play Previous"></img>
          </button>
          <button type="button">
            <img src="/play.svg" alt="Play"></img>
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="Play Next"></img>
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="Repeat"></img>
          </button>
        </div>
      </footer>
    </Container>
  );
}
