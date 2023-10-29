import Image from "next/image";
import Link from "next/link";

import { navLogo } from "@/assets";

export const Logo = () => (
  <Link className="relative z-50" href="/">
    <Image alt="Logo" src={navLogo} />
  </Link>
);
