"use client";

import type { ChangeEvent } from "react";
import { useState } from "react";
import useSWRInfinite from "swr/infinite";

import { EpisodesCards } from "@/components";
import { Container, HeroImg, Input, LoadMoreBtn, SkeletonCards } from "@/components/ui";
import { fetcher } from "@/utils/api/api";
import { useDebounce } from "@/utils/hooks";

let inputValue = "" as string;

const EpisodesPage = () => {
  const [, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  const { data, error, size, setSize, isLoading, isValidating } = useSWRInfinite(
    (pageIndex) =>
      `https://rickandmortyapi.com/api/episode/?page=${pageIndex + 1}&name=${debouncedValue}`,
    fetcher
  );
  const pages = data ? data[0].info.pages : null;
  const allEpisodes = data ? data.flatMap((arr) => arr.results) : [];
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    return (inputValue = e.target.value);
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
