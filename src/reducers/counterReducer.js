import { COUNTER } from "./actions";

const initState = {
  counter: 0,
};

const counterReducer = function (state = initState, action) {
  switch (action.type) {
    case COUNTER.INCREASE:
      return { ...state, counter: state.counter + 1 };
    case COUNTER.DECREASE:
      return { ...state, counter: state.counter - 1 };
    case COUNTER.RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export { counterReducer };
