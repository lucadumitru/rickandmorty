import { karla } from "public/fonts/fonts";

import { Container } from "@/components/ui";

export const Footer = () => (
  <footer
    className={`flex min-h-[60px] items-center bg-white shadow-headerShadow ${karla.className}`}
  >
    <Container className="text-center">
      <div className="text-[18px]">
        Made with <span className="mr-2">❤️</span> by{" "}
        <a
          className="hover:underline"
          href="https://lucadevelop.com"
          rel="noreferrer"
          target="_blank"
        >
          Luca Dumitru
        </a>
      </div>
    </Container>
  </footer>
);
