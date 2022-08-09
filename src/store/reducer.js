import { createStore } from "redux";

const initialState = {
  users: [],
  loginuser: null,
  product: [],
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "REGISTER":
      return { ...state, users: [...state.users, action.abc] };

    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "PRODUCT":
      return {
        ...state,
        product: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default createStore(reducer);
