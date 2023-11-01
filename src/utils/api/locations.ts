export const getLocation = async (id: string) => {
  const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
