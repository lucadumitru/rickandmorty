"use client";

import type { ChangeEvent } from "react";
import { useState } from "react";

import { EpisodesCards } from "@/components";
import { Container, HeroImg, Input, LoadMoreBtn, SkeletonCards } from "@/components/ui";
import { useEpisodes } from "@/utils/api/client/swr";
import { useDebounce } from "@/utils/hooks";
import type { IEpisodes } from "@/utils/types";

let inputValue = "" as string;

const EpisodesPage = () => {
  const [, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { episodes, error, size, setSize, isLoading, isValidating } = useEpisodes(debouncedValue);
  const pages = episodes ? episodes[0].info.pages : null;
  const allEpisodes = episodes ? episodes.flatMap((arr: IEpisodes) => arr.results) : [];
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    inputValue = e.target.value;
  };
  return (
    <main>
      <Container className="flex flex-col items-center">
        <HeroImg />
        <Input
          className="mb-[25px] w-full max-w-[500px] md:mb-[60px]"
          placeholder="Filter by name or episode (ex. S01 or S01E02)"
          value={inputValue}
          onChange={handleInputChange}
        />
        <EpisodesCards allEpisodes={allEpisodes} isLoading={isLoading} />
        {isValidating && <SkeletonCards variants="episodes" />}
        {error && <div>Not found</div>}
        <LoadMoreBtn pages={pages as number} setSize={setSize} size={size} />
      </Container>
    </main>
  );
};

export default EpisodesPage;
