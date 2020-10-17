import {COCKTAIL} from './actions';
const initState = ['Arsenal'];

export const cocktailReducer = (state = initState, action) => {
    switch (action.type) {
        case (COCKTAIL.SET_COCKTAIL): {
            return [...action.value]
        }
        default:
            return state;
    }
}