"use client";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import useSWRInfinite from "swr/infinite";

import type { ICharacters, IEpisodes, ILocations } from "@/utils/types";

export const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  });

export const useCharacters = (name: string, status: string, gender: string) => {
  const { data, error, size, setSize, isLoading, isValidating } = useSWRInfinite(
    (pageIndex) =>
      `https://rickandmortyapi.com/api/character/?page=${
        pageIndex + 1
      }&name=${name}&status=${status}&gender=${gender}`,
    fetcher
  );
  return {
    characters: data as ICharacters[],
    error,
    isLoading,
    isValidating,
    setSize,
    size
  };
};

export const useEpisodes = (name: string) => {
  const { data, error, size, setSize, isLoading, isValidating } = useSWRInfinite(
    (pageIndex) => `https://rickandmortyapi.com/api/episode/?page=${pageIndex + 1}&name=${name}`,
    fetcher
  );
  return {
    episodes: data as IEpisodes[],
    error,
    isLoading,
    isValidating,
    setSize,
    size
  };
};

export const useLocations = (name: string, type: string, dimension: string) => {
  const { data, error, size, setSize, isLoading, isValidating } = useSWRInfinite(
    (pageIndex) =>
      `https://rickandmortyapi.com/api/location/?page=${
        pageIndex + 1
      }&name=${name}&type=${type}&dimension=${dimension}`,
    fetcher
  );
  return {
    locations: data as ILocations[],
    error,
    isLoading,
    isValidating,
    setSize,
    size
  };
};
