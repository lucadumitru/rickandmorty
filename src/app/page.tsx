import "./globals.css";

import Image from "next/image";
import mainImage from "public/img/main-logo.svg";

import { CharacterCard, Container, Grid } from "@/components/ui";
import { getCharacter } from "@/utils/api";
import { getRandomCharacters } from "@/utils/helpers";
import type { ICharacter, ICharacters } from "@/utils/types";

const Home = async () => {
  const allCharacters = (await getCharacter("")) as ICharacters;
  const charactersMaxId = allCharacters.info.count;
  const randomCharactersIds = getRandomCharacters(charactersMaxId);
  const randomCharacters = (await getCharacter(randomCharactersIds)) as ICharacter[];
  return (
    <main>
      <Container className="flex flex-col items-center gap-y-12 pt-10">
        <Image alt="Rick and Morty" src={mainImage as string} />
        <Grid>
          {randomCharacters.map((character: ICharacter) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
