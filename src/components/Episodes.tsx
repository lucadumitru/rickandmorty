"use client";

import type { ChangeEvent } from "react";
import { useState } from "react";

import { Container, HeroImg, Input, LoadMoreBtn, SkeletonCards } from "@/components/ui";
import { useEpisodes } from "@/utils/api/client/swr";
import { useDebounce } from "@/utils/hooks";
import type { IEpisodes } from "@/utils/types";

import { EpisodesCards } from "./EpisodesCards";

let inputName = "" as string;

export const Episodes = () => {
  const [, setInputValue] = useState("");
  const debouncedName = useDebounce(inputName, 500);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { episodes, error, size, setSize, isValidating } = useEpisodes(debouncedName);
  const pages = episodes ? episodes[0].info.pages : null;
  const allEpisodes = episodes ? episodes.flatMap((arr: IEpisodes) => arr.results) : [];
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    inputName = inputValue;
  };
  return (
    <main>
      <Container className="flex flex-col items-center">
        <HeroImg />
        <Input
          className="mb-[25px] w-full max-w-[500px] md:mb-[60px]"
          placeholder="Filter by name..."
          value={inputName}
          onChange={handleInputChange}
        />
        <EpisodesCards allEpisodes={allEpisodes} />
        {isValidating && <SkeletonCards variants="episodes" />}
        {error && <div>Not found</div>}
        <LoadMoreBtn pages={pages as number} setSize={setSize} size={size} />
      </Container>
    </main>
  );
};
