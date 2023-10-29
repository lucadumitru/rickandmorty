export const getEpisode = async (id: string) => {
  const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
