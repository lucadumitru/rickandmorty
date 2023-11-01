"use client";

import type { ChangeEvent } from "react";
import { useState } from "react";

import { CharactersCards } from "@/components";
import { Container, HeroImg, Input, LoadMoreBtn, Select, SkeletonCards } from "@/components/ui";
import { gender, status } from "@/utils";
import { useCharacters } from "@/utils/api";
import { useDebounce } from "@/utils/hooks";

let inputValue = "" as string;
let selectedStatus = "" as string;
let selectedGender = "" as string;

const CharactersPage = () => {
  const [, setInputValue] = useState("");
  const [, setSelectedStatus] = useState("");
  const [, setSelectedGender] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { characters, error, size, setSize, isValidating } = useCharacters(
    debouncedValue,
    selectedStatus,
    selectedGender
  );
  const pages = characters ? characters[0].info.pages : null;
  const allCharacters = characters ? characters.flatMap((arr) => arr.results) : [];

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
      <Container className="flex flex-col items-center">
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
        <CharactersCards characters={allCharacters} />
        {isValidating && <SkeletonCards className="mt-[20px]" variants="characters" />}
        {error && <div>Not found</div>}
        <LoadMoreBtn pages={pages as number} setSize={setSize} size={size} />
      </Container>
    </main>
  );
};

export default CharactersPage;
