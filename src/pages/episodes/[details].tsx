import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { api } from "../../services/api";
import { convertDurationToTimeString } from "../../shared/utils/convertDurationToTimeString";

import { Container, Header, Body } from "./styles";

interface IEpisode {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  duration: number;
  durationAsString: string;
  description: string;
  url: string;
}

type EpisodeProps = {
  episode: IEpisode;
};

export default function Episode({ episode }: EpisodeProps) {
  const router = useRouter();

  return (
    <Container>
      <div>
        <Link href="/">
          <button type="button">
            <img src="/arrow-left.svg" alt="Previous" />
          </button>
        </Link>
        <Image
          width={700}
          height={240}
          src={episode.thumbnail}
          objectFit="cover"
        />
        <button type="button">
          <img src="/play.svg" alt="Play Podcast" />
        </button>
      </div>
      <Header>
        <h1>{episode.title}</h1>
        <div>
          <span>{episode.members}</span>
          <span>{episode.publishedAt}</span>
          <span>{episode.durationAsString}</span>
        </div>
      </Header>
      <Body dangerouslySetInnerHTML={{ __html: episode.description }} />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { details } = ctx.params;

  const { data } = await api.get(`/episodes/${details}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), "dd MMM yy", {
      locale: ptBR,
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url,
  };

  return {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24,
  };
};
