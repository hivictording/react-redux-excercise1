import {COUNTER} from '.';
const initState = [];

export const saveReducer = (state = initState,action) => {
    if (action.type === COUNTER.SAVE) {
        return [...state,action.value]
    }

    return state;
}