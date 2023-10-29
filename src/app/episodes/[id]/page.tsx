import { CharactersCards, Test } from "@/components";
import { Container } from "@/components/ui";
import { getCharacter, getEpisode } from "@/utils/api";
import type { ICharacter, IEpisode } from "@/utils/types/types";

interface EpisodePageParams {
  params: {
    id: number;
  };
}

const EpisodePage: React.FC<EpisodePageParams> = async ({ params }) => {
  const episode = (await getEpisode(params.id)) as IEpisode;
  const charactersIds = episode.characters.map((url: string) => url.match(/\d+$/)[0]).join(", ");
  const charactersCast = (await getCharacter(charactersIds)) as ICharacter[];

  return (
    <main>
      <Container>
        <div>
          <div className="pt-[30px] text-center [&:not(:last-child)]:mb-[25px] [&:not(:last-child)]:md:mb-[65px]">
            <h1 className="text-[25px] md:text-[36px] [&:not(:last-child)]:mb-[24px]">
              {episode.name}
            </h1>
            <div className="mx-auto flex max-w-md justify-between text-left ">
              <div>
                <div className="font-bold">Episode</div>
                <div className="text-textGray text-[14px] tracking-[0.25px]">{episode.episode}</div>
              </div>
              <div>
                <div className="font-bold">Date</div>
                <div className="text-textGray text-[14px] uppercase tracking-[0.25px]">
                  {episode.air_date}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-textGray text-[20px] font-medium [&:not(:last-child)]:mb-[20px]">
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
