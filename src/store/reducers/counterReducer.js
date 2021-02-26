import * as Types from "../types/Types";

const initialState = {
    countItem: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.INCREMENT_COUNTER:
            return {
                ...state,
                countItem: state.countItem + 1
            };
        case Types.DECREMENT_COUNTER:
            return {
                ...state,
                countItem: state.countItem - 1
            };
        default:
          return state;
      }
}

export default CounterReducer;