import Link from "next/link";
import { karla } from "public/fonts/fonts";

import { ROUTES } from "@/utils";

interface NavLinksProps {
  isOpen: boolean;
  variant: "desktop" | "mobile";
  closeMenu?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ isOpen, variant, closeMenu }) => (
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
          <Link className="hover:underline" href={ROUTES.CHARACTERS} onClick={closeMenu}>
            Characters
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href={ROUTES.LOCATIONS} onClick={closeMenu}>
            Locations
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href={ROUTES.EPISODES} onClick={closeMenu}>
            Episodes
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
