import Actions from "./actions";

const initState = {
  counter: 0,
};

const counterReducer = function (state = initState, action) {
  switch (action.type) {
    case Actions.INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case Actions.DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case Actions.RESET_COUNTER:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export { counterReducer };
