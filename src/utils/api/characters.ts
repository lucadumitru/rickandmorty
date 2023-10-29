export const getCharacters = async (page: number) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${page ? `?page=${page}` : ""}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getCharacter = async (id: string) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
