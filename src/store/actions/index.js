import * as Type from '../types/Types';

export const incrementCounter = () => {
    return {
        type: Type.INCREMENT_COUNTER
    }
}

export const decrementCounter = () => {
    return {
        type: Type.DECREMENT_COUNTER
    }
}