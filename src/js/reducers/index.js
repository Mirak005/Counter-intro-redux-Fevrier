import { INCREMENT, DECREMENT, RESET } from "../const/actionTypes";

const initialState = {
  counter: 10
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT:
      return { ...state, counter: state.counter - action.payload };
    case RESET:
      return { ...state, counter: 0 };

    default:
      return state;
  }
}
