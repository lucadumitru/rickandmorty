import type { IEpisode } from "@/utils/types/types";

import { EpisodeCard } from "./EpisodeCard";
import { Grid } from "./ui";

interface EpisodeCardsProps {
  allEpisodes: IEpisode[];
}

export const EpisodesCards: React.FC<EpisodeCardsProps> = ({ allEpisodes }) => (
  <Grid>
    {allEpisodes.map((episode) => (
      <EpisodeCard key={episode.id} episode={episode} />
    ))}
  </Grid>
);
