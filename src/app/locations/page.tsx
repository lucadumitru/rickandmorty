"use client";

import type { ChangeEvent } from "react";
import { useState } from "react";

import { LocationsCards } from "@/components";
import { Container, HeroImg, Input, LoadMoreBtn, Select, SkeletonCards } from "@/components/ui";
import { dimension, type } from "@/utils";
import { useLocations } from "@/utils/api";
import { useDebounce } from "@/utils/hooks/useDebounce";
import type { ILocations } from "@/utils/types";

let inputValue = "" as string;
let selectedType = "" as string;
let selectedDimension = "" as string;

const LocationsPage = () => {
  const [, setInputValue] = useState("");
  const [, setSelectedType] = useState("");
  const [, setSelectedDimension] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { locations, error, size, setSize, isValidating } = useLocations(
    debouncedValue,
    selectedType,
    selectedDimension
  );

  const pages = locations ? locations[0].info.pages : null;
  const allLocations = locations ? locations.flatMap((arr: ILocations) => arr.results) : [];
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    inputValue = e.target.value;
  };
  const handleTypeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
    selectedType = e.target.value;
  };
  const handleDimensionSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDimension(e.target.value);
    selectedDimension = e.target.value;
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
          <Select label="Type" options={type} value={selectedType} onChange={handleTypeSelect} />
          <Select
            label="Dimension"
            options={dimension}
            value={selectedDimension}
            onChange={handleDimensionSelect}
          />
        </div>
        <LocationsCards allLocations={allLocations} />
        {isValidating && <SkeletonCards variants="locations" />}
        {error && <div>Not found</div>}
        <LoadMoreBtn pages={pages as number} setSize={setSize} size={size} />
      </Container>
    </main>
  );
};

export default LocationsPage;
