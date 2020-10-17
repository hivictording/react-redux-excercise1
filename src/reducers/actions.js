const COUNTER = {
  INCREASE: "INCREASE_COUNTER",
  DECREASE: "DECREASE_COUNTER",
  ADD_RANDOM: 'ADD_RANDOM',
  RESET: "RESET_COUNTER",
  SAVE: "SAVE"
};

const COCKTAIL = {
  GET_COCKTAIL: "GET_COCKTAIL",
  SET_COCKTAIL: "SET_COCKTAIL"
}

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

const getCocktail = (search) => {
  if (!search) {search='f'}
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`).then(response => response.json()).then(data => {
      dispatch(setCocktail(data.drinks))})
  }
}

const setCocktail = (value) => {
  return {type:COCKTAIL.SET_COCKTAIL,value:value}
}

export { COUNTER, COCKTAIL, increaseCounter, decreaseCounter, resetCounter, addRandom,saveCounter,getCocktail };
