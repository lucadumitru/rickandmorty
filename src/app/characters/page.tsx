import type { Metadata } from "next/types";

import { Characters } from "@/components";

export const metadata: Metadata = {
  description: "Rick and morty webpage using Rick and Morty API, Next.js, React.js and TailwindCSS",
  title: "Rick and Morty - Characters"
};

const CharactersPage = () => <Characters />;
export default CharactersPage;
