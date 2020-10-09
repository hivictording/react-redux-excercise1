const COUNTER = {
  INCREASE: "INCREASE_COUNTER",
  DECREASE: "DECREASE_COUNTER",
  RESET: "RESET_COUNTER",
};

const increaseCounter = () => {
  return { type: COUNTER.INCREASE };
};
const decreaseCounter = () => {
  return { type: COUNTER.DECREASE };
};
const resetCounter = () => {
  return { type: COUNTER.RESET };
};

export { COUNTER, increaseCounter, decreaseCounter, resetCounter };
