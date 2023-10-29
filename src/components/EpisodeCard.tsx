import Link from "next/link";

import type { IEpisode } from "@/utils/types/types";

interface EpisodeCardProps {
  episode: IEpisode;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => (
  <div className="flex flex-col gap-2 rounded-[8px] px-[16px] py-[25px] text-center shadow-cardShadow">
    <Link className="grow hover:underline" href={`/episodes/${episode.id}`}>
      <h2 className="font-medium leading-6 tracking-[0.15px] sm:text-[20px]">{episode.name}</h2>
    </Link>
    <div className="text-myGray text-[14px]">{episode.air_date}</div>
    <div className="text-myGray text-[14px] font-bold">{episode.episode}</div>
  </div>
);
