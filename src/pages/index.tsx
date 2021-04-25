import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { api } from '../services/api';
import { convertDurationToTimeString } from '../shared/utils/convertDurationToTimeString';

import { Container, Footer } from '../styles';
import { usePlayer } from '../shared/contexts/PlayerContext';

interface IEpisode {
  id: string;
  title: string,
  thumbnail: string,
  members: string,
  publishedAt: string,
  duration: number,
  durationAsString: string,
  url: string,
}

type EpisodesProps = {
  episodes: {
    latest: Array<IEpisode>,
    all: Array<IEpisode>
  };
}

export default function Home({ episodes }: EpisodesProps) {
  const { playList } = usePlayer();
  const episodeList = [...episodes.latest, ...episodes.all];

  return (
    <Container>
      <div>
        <h2>Latest Releases</h2>
        <ul>
          {episodes.latest.map((episode, index) => {
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
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <footer>
                    <span>{episode.publishedAt}</span>
                    <span>{episode.durationAsString}</span>
                  </footer>
                </div>

                <button onClick={() => playList(episodeList, index)}>
                  <img src="/play-green.svg" alt="Play Episode" />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2>All Episodes</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Cast</th>
              <th>Date</th>
              <th>Duration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {episodes.all.map((episode, index) => {
              return (
                <tr key={episode.id}>
                  <td>
                    <Image
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit="cover"
                    />
                  </td>
                  <td>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                  </td>
                  <td>{episode.members}</td>
                  <td>{episode.publishedAt}</td>
                  <td>{episode.durationAsString}</td>
                  <td>
                    <button type="button" onClick={() => playList(episodeList, index + episodes.latest.length)}>
                      <img src="/play-green.svg" alt="Play Episode" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Footer>
        <p>2021 - Made by <a href="http://github.com/euaaron">Aaron Carneiro</a> during <a href="https://nextlevelweek.com/">Next Level Week 5</a>.</p>
        <p>Color scheme based on <a href="https://draculatheme.com/">Dracula Classic</a> by Zeno Rocha.</p>
      </Footer>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const episodes: IEpisode[] = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'dd MMM yy', { locale: ptBR }),
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
      episodes: {
        latest: latestEpisodes,
        all: allEpisodes,
      }
    },
    revalidate: 60 * 60 * 8,
  }
}

