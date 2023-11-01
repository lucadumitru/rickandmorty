import { CharactersCards } from "@/components";
import { BackBtn, CharacterCard, Container, Grid } from "@/components/ui";
import { getCharacter, getLocation } from "@/utils/api";
import type { ICharacter, ILocation } from "@/utils/types/types";

interface LocationPageParams {
  params: {
    id: string;
  };
}

const LocationPage: React.FC<LocationPageParams> = async ({ params }) => {
  const location = (await getLocation(params.id)) as ILocation;
  const residentsIds = location.residents.map((url: string) => url.match(/\d+$/) ?? [0]).join(", ");
  const residents = (await getCharacter(residentsIds)) as ICharacter[];
  const resident = (await getCharacter(residentsIds)) as ICharacter;
  return (
    <main>
      <Container>
        <BackBtn className="top-[20px] mb-[17px] mr-auto sm:top-[44px] sm:mb-0" />
        <div className="pt-[30px] text-center [&:not(:last-child)]:mb-[25px] [&:not(:last-child)]:md:mb-[65px]">
          <h1 className="text-[25px] md:text-[36px] [&:not(:last-child)]:mb-[24px]">
            {location.name}
          </h1>
          <div className="mx-auto flex max-w-md justify-between text-left ">
            <div>
              <div className="font-bold">Type</div>
              <div className="text-textGray text-[14px] tracking-[0.25px]">{location.type}</div>
            </div>
            <div>
              <div className="font-bold">Dimension</div>
              <div className="text-textGray text-[14px] capitalize tracking-[0.25px]">
                {location.dimension}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-textGray text-[20px] font-medium [&:not(:last-child)]:mb-[20px]">
            {Array.isArray(residents) ? "Residents" : "Resident"}
          </div>
          {Array.isArray(residents) ? (
            <CharactersCards characters={residents} />
          ) : (
            <Grid>
              <CharacterCard character={resident} />
            </Grid>
          )}
        </div>
      </Container>
    </main>
  );
};
export default LocationPage;
