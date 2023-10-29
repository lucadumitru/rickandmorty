import Link from "next/link";

import { karla } from "@/assets/fonts/fonts";
import { ROUTES } from "@/utils";

interface NavLinksProps {
  isOpen: boolean;
  variant: "desktop" | "mobile";
}

export const NavLinks: React.FC<NavLinksProps> = ({ isOpen, variant }) => (
  <div
    className={` ${
      variant === "desktop"
        ? "relative z-50 hidden md:block"
        : `fixed top-0 h-screen w-full overflow-scroll bg-white  ${
            isOpen ? "left-0 transition-all" : "-left-[100%] "
          }`
    }`}
  >
    <nav className={karla.className}>
      <ul
        className={`flex flex-wrap gap-x-6 text-[18px] ${
          variant === "mobile" &&
          "flex-col gap-y-[48px] px-8 pb-8 pt-[100px] text-center text-[24px]"
        }`}
      >
        <li>
          <Link className="hover:underline" href={ROUTES.CHARACTERS}>
            Characters
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href={ROUTES.LOCATIONS}>
            Locations
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href={ROUTES.EPISODES}>
            Episodes
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
