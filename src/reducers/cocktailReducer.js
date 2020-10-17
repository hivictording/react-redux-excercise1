import {COCKTAIL} from ".";
const initState = ['Arsenal'];

export const cocktailReducer = (state = initState, action) => {
    switch (action.type) {
        case (COCKTAIL.SET_COCKTAIL): {
            return action.value ? [...action.value]: []
        }
        default:
            return state;
    }
}