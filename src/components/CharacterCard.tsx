import Image from "next/image";
import Link from "next/link";

interface CharacterCardProps {
  character: {
    name: string;
    id: number;
    image: string;
    species: string;
  };
  isLoading?: boolean;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => (
  <article className="flex flex-col overflow-hidden rounded  shadow-cardShadow">
    <Link className="transition hover:scale-105" href={`/characters/${character.id}`}>
      <Image
        alt={`${character.name} avatar`}
        className="xsm:max-h-[170px] xsm:object-center max-h-[230px] w-full object-cover object-top"
        height={170}
        src={character.image}
        width={240}
      />
    </Link>
    <div className="flex grow flex-col gap-3 px-[16px] py-[12px]">
      <Link className="grow hover:underline" href={`/characters/${character.id}`}>
        <h2 className="text-[20px] font-medium leading-6">{character.name}</h2>
      </Link>
      <div className="text-[14px] capitalize text-gray">{character.species}</div>
    </div>
  </article>
);
