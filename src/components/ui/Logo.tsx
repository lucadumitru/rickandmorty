import Image from "next/image";
import Link from "next/link";
import navLogo from "public/icons/nav-logo.svg";

interface LogoProps {
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ onClick }) => (
  <Link className="relative z-50" href="/" onClick={onClick}>
    <Image alt="Logo" src={navLogo as string} />
  </Link>
);
