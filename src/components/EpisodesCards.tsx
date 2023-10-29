import type { IEpisode } from "@/utils/types/types";

import { EpisodeCard } from "./EpisodeCard";
import { Grid, SkeletonCards } from "./ui";

interface EpisodeCardsProps {
  allEpisodes: IEpisode[];
  isLoading: boolean;
}

export const EpisodesCards: React.FC<EpisodeCardsProps> = ({ allEpisodes, isLoading }) =>
  isLoading ? (
    <SkeletonCards variants="episodes" />
  ) : (
    <Grid>
      {allEpisodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </Grid>
  );
