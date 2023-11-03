import type { Metadata } from "next/types";

import { CharactersCards } from "@/components";
import { BackBtn, Container } from "@/components/ui";
import { getCharacter, getEpisode } from "@/utils/api";
import type { ICharacter, IEpisode } from "@/utils/types/types";

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const episode = (await getEpisode(id)) as IEpisode;
  return {
    title: `Episode - ${episode.name}`
  };
}

interface EpisodePageParams {
  params: {
    id: string;
  };
}

const EpisodePage: React.FC<EpisodePageParams> = async ({ params }) => {
  const episode = (await getEpisode(params.id)) as IEpisode;
  const charactersIds = episode.characters
    .map((url: string) => url.match(/\d+$/) ?? [0])
    .join(", ");
  const charactersCast = (await getCharacter(charactersIds)) as ICharacter[];
  return (
    <main>
      <Container>
        <BackBtn className="top-[20px] mb-[17px] mr-auto sm:mb-0 md:top-[44px]" />
        <div>
          <div className="mx-auto pt-[30px] text-center md:max-w-[550px]  [&:not(:last-child)]:mb-[25px] [&:not(:last-child)]:md:mb-[65px]">
            <h1 className="text-[25px] md:text-[36px] [&:not(:last-child)]:mb-[24px]">
              {episode.name}
            </h1>
            <div className="mx-auto flex max-w-md justify-between gap-x-5 text-left ">
              <div>
                <div className="font-bold">Episode</div>
                <div className="text-[14px] tracking-[0.25px] text-textGray">{episode.episode}</div>
              </div>
              <div>
                <div className="font-bold">Date</div>
                <div className="text-[14px] uppercase tracking-[0.25px] text-textGray">
                  {episode.air_date}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-[20px] font-medium text-textGray [&:not(:last-child)]:mb-[20px]">
              Cast
            </div>
            <CharactersCards characters={charactersCast} />
          </div>
        </div>
      </Container>
    </main>
  );
};
export default EpisodePage;
