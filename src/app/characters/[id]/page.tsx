import Image from "next/image";
import type { Metadata } from "next/types";

import { BackBtn, Container } from "@/components/ui";
import { getCharacter, getEpisode } from "@/utils/api";
import type { ICharacter, IEpisode } from "@/utils/types";

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const character = (await getCharacter(id)) as ICharacter;
  return {
    title: `Chatacter - ${character.name}`
  };
}

interface CharacterProps {
  params: {
    id: string;
  };
}

const Character: React.FC<CharacterProps> = async ({ params }) => {
  const character: ICharacter = (await getCharacter(params.id)) as ICharacter;
  const episodesIds = character.episode.map((url: string) => url.match(/\d+$/) ?? [0]).join(", ");
  const episodes = (await getEpisode(episodesIds)) as IEpisode[];
  const episode = (await getEpisode(episodesIds)) as IEpisode;
  const locationId = character.location.url.match(/\d+$/) ?? [0].join();
  return (
    <main>
      <Container className="flex flex-col items-center">
        <BackBtn className="top-[20px] mb-[17px] mr-auto sm:mb-0 md:top-[44px]" />
        <div className="mt-[16px] flex w-full max-w-[850px] flex-col items-center">
          <div className="flex flex-col content-center items-center gap-[16px] [&:not(:last-child)]:mb-[48px]">
            <Image
              alt={`${character.name} avatar`}
              className="max-w-[150px] rounded-full border-[5px] sm:max-w-[300px]"
              height={300}
              src={character.image}
              width={300}
            />
            <h1 className="text-center text-[32px] md:text-[48px]">{character.name}</h1>
          </div>
          <div className="flex w-full flex-col justify-between gap-x-[20px] gap-y-[50px] sm:flex-row">
            <div className="flex-auto pr-6 sm:w-[50%]">
              <div className="mb-5 text-[20px] font-medium text-[#8E8E93] sm:mb-[36px]">
                Information
              </div>
              <ul>
                <li className="border-b-[2px] border-lightGray  px-[16px] py-[10px]">
                  <div className="font-bold">Gender</div>
                  <div className="text-[14px] text-textGray">{character.gender}</div>
                </li>
                <li className="border-b-[2px] border-lightGray  px-[16px] py-[10px]">
                  <div className="font-bold">Status</div>
                  <div className="text-[14px] text-textGray">{character.status}</div>
                </li>
                <li className="border-b-[2px] border-lightGray  px-[16px] py-[10px]">
                  <div className="font-bold">Specie</div>
                  <div className="text-[14px] capitalize text-textGray">{character.species}</div>
                </li>
                <li className="border-b-[2px] border-lightGray  px-[16px] py-[10px]">
                  <div className="font-bold">Origin</div>
                  <div className="text-[14px] capitalize text-textGray">
                    {character.origin.name}
                  </div>
                </li>
                <li className="border-b-[2px] border-lightGray  px-[16px] py-[10px]">
                  <div className="font-bold">Type</div>
                  <div className="text-[14px] text-textGray">{character.type || "Unknown"}</div>
                </li>
                <li>
                  <a
                    className="arrow-right-icon group relative block border-b-[2px] border-lightGray  px-[16px] py-[10px]"
                    href={`/locations/${locationId as string}`}
                  >
                    <span className="font-bold group-hover:underline">Location</span>
                    <div className="text-[14px] text-textGray">{character.location.name}</div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-auto sm:w-[50%] ">
              <div className="mb-5 text-[20px] font-medium text-[#8E8E93] sm:mb-[36px]">
                Episodes
              </div>
              <ul className="max-h-[402px] overflow-y-scroll pr-4">
                {Array.isArray(episodes) ? (
                  episodes.map((episode) => (
                    <li key={episode.id}>
                      <a
                        className="arrow-right-icon group relative block border-b-[2px] px-[16px] py-[10px]"
                        href={`/episodes/${episode.id}`}
                      >
                        <div className="font-bold group-hover:underline">{episode.episode}</div>
                        <div className="text-[14px] text-textGray">{episode.name}</div>
                        <div className="text-[12px] uppercase tracking-[1.5px] text-textGray">
                          {episode.air_date}
                        </div>
                      </a>
                    </li>
                  ))
                ) : (
                  <li>
                    <a
                      className="arrow-right-icon group relative block border-b-[2px] px-[16px] py-[10px]"
                      href={`/episodes/${episode.id}`}
                    >
                      <div className="font-bold group-hover:underline">{episode.episode}</div>
                      <div className="text-[14px] text-textGray">{episode.name}</div>
                      <div className="text-[12px] uppercase tracking-[1.5px] text-textGray">
                        {episode.air_date}
                      </div>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Character;
