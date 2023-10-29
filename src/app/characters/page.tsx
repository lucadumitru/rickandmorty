"use client";

import type { ChangeEvent } from "react";
import { useState } from "react";
import useSWRInfinite from "swr/infinite";

import { CharactersCards } from "@/components";
import { Container, HeroImg, Input, LoadMoreBtn, Select, SkeletonCards } from "@/components/ui";
import { gender, status } from "@/utils";
import { fetcher } from "@/utils/api/api";
import { useDebounce } from "@/utils/hooks";

let inputValue = "" as string;
let selectedStatus = "" as string;
let selectedGender = "" as string;

const CharactersPage = () => {
  const [, setInputValue] = useState("");
  const [, setSelectedStatus] = useState("");
  const [, setSelectedGender] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  const { data, error, size, setSize, isLoading, isValidating } = useSWRInfinite(
    (pageIndex) =>
      `https://rickandmortyapi.com/api/character/?page=${
        pageIndex + 1
      }&name=${debouncedValue}&status=${selectedStatus}&gender=${selectedGender}`,
    fetcher
  );
  const pages = data ? data[0].info.pages : null;
  const allCharacters = data ? data.flatMap((arr) => arr.results) : [];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    inputValue = e.target.value;
  };
  const handleStatusSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
    selectedStatus = e.target.value;
  };
  const handleGenderSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(e.target.value);
    selectedGender = e.target.value;
  };
  return (
    <main>
      <Container className="flex flex-col items-center pb-[50px]">
        <HeroImg />
        <div className="mb-[25px] grid w-full gap-[20px]  sm:grid-cols-4 md:mb-[60px]">
          <Input
            className="col-start-1 col-end-3"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Select
            label="Status"
            options={status}
            value={selectedStatus}
            onChange={handleStatusSelect}
          />
          <Select
            label="Gender"
            options={gender}
            value={selectedGender}
            onChange={handleGenderSelect}
          />
        </div>
        <CharactersCards characters={allCharacters} isLoading={isLoading} />
        {isValidating && <SkeletonCards className="mt-[20px]" variants="characters" />}
        {error && <div>Not found</div>}
        <LoadMoreBtn pages={pages as number} setSize={setSize} size={size} />
      </Container>
    </main>
  );
};

export default CharactersPage;
