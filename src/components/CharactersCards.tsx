import type { ICharacter } from "@/utils/types/types";

import { CharacterCard } from "./CharacterCard";
import { Grid, SkeletonCards } from "./ui";

interface CharacterCardsProps {
  characters: ICharacter[];
  isLoading?: boolean;
}
export const CharactersCards: React.FC<CharacterCardsProps> = ({ characters, isLoading }) => (
  <div className="w-full">
    {isLoading ? (
      <SkeletonCards variants="characters" />
    ) : (
      <Grid>
        {characters.map((character: ICharacter, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </Grid>
    )}
  </div>
);
