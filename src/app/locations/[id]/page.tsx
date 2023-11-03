import type { Metadata } from "next/types";

import { CharactersCards } from "@/components";
import { BackBtn, CharacterCard, Container, Grid } from "@/components/ui";
import { getCharacter, getLocation } from "@/utils/api";
import type { ICharacter, ILocation } from "@/utils/types/types";

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const location = (await getLocation(id)) as ILocation;
  return {
    title: `Locations - ${location.name}`
  };
}

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
        <BackBtn className="top-[20px] mb-[17px] mr-auto sm:mb-0 md:top-[44px]" />
        <div className="mx-auto pt-[30px] text-center md:max-w-[550px]  [&:not(:last-child)]:mb-[25px] [&:not(:last-child)]:md:mb-[65px]">
          <h1 className="text-[25px] md:text-[36px] [&:not(:last-child)]:mb-[24px]">
            {location.name}
          </h1>
          <div className="mx-auto flex max-w-md justify-between text-left ">
            <div>
              <div className="font-bold">Type</div>
              <div className="text-[14px] tracking-[0.25px] text-textGray">{location.type}</div>
            </div>
            <div>
              <div className="font-bold">Dimension</div>
              <div className="text-[14px] capitalize tracking-[0.25px] text-textGray">
                {location.dimension}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[20px] font-medium text-textGray [&:not(:last-child)]:mb-[20px]">
            {(Array.isArray(residents) && "Residents") ||
              (resident.id !== undefined ? "Resident" : "No Residents")}
          </div>
          {Array.isArray(residents) ? (
            <CharactersCards characters={residents} />
          ) : (
            <Grid>{resident.id !== undefined && <CharacterCard character={resident} />}</Grid>
          )}
        </div>
      </Container>
    </main>
  );
};
export default LocationPage;
