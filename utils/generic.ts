export const getRandomDuration = () =>
  Math.floor(Math.random() * (60 - 30 + 1) + 30) * 1000;

export const shouldFail = () => Math.random() < 0.3; // 30% chance of failure
