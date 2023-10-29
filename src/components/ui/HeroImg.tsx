import Image from "next/image";
import { usePathname } from "next/navigation";
import charactersHeroImg from "public/img/characters-hero-img.svg";
import episodesHeroImg from "public/img/episodes-hero-img.svg";
import locationsHeroImg from "public/img/locations-hero-img.svg";

export const HeroImg = () => {
  const path = usePathname();
  const charactersPath = path.includes("characters");
  const episodesPath = path.includes("episodes");
  const locationsPath = path.includes("locations");
  return (
    <div className="mb-[16px] mt-[26px]">
      <Image
        alt="Hero image"
        src={
          ((charactersPath && charactersHeroImg) as string) ||
          ((episodesPath && episodesHeroImg) as string) ||
          ((locationsPath && locationsHeroImg) as string)
        }
      />
    </div>
  );
};
