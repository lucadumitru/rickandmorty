import type { Metadata } from "next/types";

import { Episodes } from "@/components";

export const metadata: Metadata = {
  description: "Rick and morty webpage using Rick and Morty API, Next.js, React.js and TailwindCSS",
  title: "Rick and Morty - Episodes"
};

const EpisodesPage = () => <Episodes />;

export default EpisodesPage;
