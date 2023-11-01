export const getRandomCharacters = (maxNumber: number) => {
  const randomNumbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * maxNumber) + 1);
  return randomNumbers.join();
};
