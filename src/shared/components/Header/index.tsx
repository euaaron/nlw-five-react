import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import Img from '../GrayImg';
import { Container } from './styles';

export default function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return(
    <Container>
      <Img src="/logo.svg" alt="Podcastr" />
      <p>O melhor para você ouvir, sempre</p>
      <span>{ currentDate }</span>
    </Container>
  )
}
