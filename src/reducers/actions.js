const COUNTER = {
  INCREASE: "INCREASE_COUNTER",
  DECREASE: "DECREASE_COUNTER",
  ADD_RANDOM: 'ADD_RANDOM',
  RESET: "RESET_COUNTER",
};

const increaseCounter = () => {
  return { type: COUNTER.INCREASE };
};
const decreaseCounter = () => {
  return { type: COUNTER.DECREASE };
};
const addRandom = (number) => {
  return { type: COUNTER.ADD_RANDOM, payload: number };
};
const resetCounter = () => {
  return { type: COUNTER.RESET };
};

export { COUNTER, increaseCounter, decreaseCounter, resetCounter, addRandom };
