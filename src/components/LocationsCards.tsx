import type { ILocation } from "@/utils/types/types";

import { LocationCard } from "./LocationCard";
import { Grid } from "./ui";

interface LocationsCardsProps {
  allLocations: ILocation[];
}

export const LocationsCards: React.FC<LocationsCardsProps> = ({ allLocations }) => (
  <Grid>
    {allLocations.map((location) => (
      <LocationCard key={location.id} location={location} />
    ))}
  </Grid>
);
