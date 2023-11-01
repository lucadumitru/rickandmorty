import type { IEpisode } from "@/utils/types/types";

import { EpisodeCard } from "./EpisodeCard";
import { Grid } from "./ui";

interface EpisodesCardsProps {
  allEpisodes: IEpisode[];
}

export const EpisodesCards: React.FC<EpisodesCardsProps> = ({ allEpisodes }) => (
  <Grid>
    {allEpisodes.map((episode) => (
      <EpisodeCard key={episode.id} episode={episode} />
    ))}
  </Grid>
);
