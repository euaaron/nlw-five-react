import { GetStaticProps } from 'next';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { api } from '../services/api';
import { convertDurationToTimeString } from '../shared/utils/convertDurationToTimeString';

import Container  from './style';

interface IEpisode {
  id: string;
  title: string,
  thumbnail: string,
  members: string,
  publishedAt: string,
  duration: number,
  durationAsString: string,
  description: string,
  url: string,
}

type HomeProps = {
  episodes: {
    latest: Array<IEpisode>,
    all: Array<IEpisode>
  };
}

export default function Home({ episodes }: HomeProps) {

  return (
    <Container>
      <div>
        <h2>Latest Releases</h2>
        <ul>
          { episodes.latest.map(episode => {
            return (
              <li key={episode.id}>
                <Image 
                  width={192} 
                  height={192} 
                  src={episode.thumbnail} 
                  alt={episode.title}
                  objectFit="cover"
                />

                <div>
                  <a href={episode.url}>{episode.title}</a>
                  <p>{episode.members}</p>
                  <footer>
                    <span>{episode.publishedAt}</span>
                    <span>{episode.durationAsString}</span>
                  </footer>
                </div>

                <button>
                  <img src="/play-green.svg" alt="Play Episode" />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2>All Episodes</h2>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const episodes: IEpisode[] = data.episodes.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration),),
      description: episode.description,
      url: episode.file.url
    }
  });

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      episodes : {
        latest: latestEpisodes,
        all: allEpisodes,
    }
    },
    revalidate: 60 * 60 * 8,
  }
}

