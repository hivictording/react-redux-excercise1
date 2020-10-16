const COUNTER = {
  INCREASE: "INCREASE_COUNTER",
  DECREASE: "DECREASE_COUNTER",
  ADD_RANDOM: 'ADD_RANDOM',
  RESET: "RESET_COUNTER",
  SAVE: "SAVE"
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
const saveCounter = (value) => {
  return {type: COUNTER.SAVE, value: value}
}

export { COUNTER, increaseCounter, decreaseCounter, resetCounter, addRandom,saveCounter };
