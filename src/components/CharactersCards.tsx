import type { ICharacter } from "@/utils/types/types";

import { CharacterCard } from "./CharacterCard";
import { Grid } from "./ui";

interface CharacterCardsProps {
  characters: ICharacter[];
}
export const CharactersCards: React.FC<CharacterCardsProps> = ({ characters }) => (
  <Grid>
    {characters.map((character: ICharacter, index) => (
      <CharacterCard key={index} character={character} />
    ))}
  </Grid>
);
