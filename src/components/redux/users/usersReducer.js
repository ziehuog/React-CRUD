import {
  ADD_USER,
  DELETE_USER,
  SET_LIST_USERS,
  UPDATE_USER,
} from "../constant";

const intialState = {
  data: [],
};

export const usersData = (state = intialState, action) => {
  switch (action.type) {
    case SET_LIST_USERS:
      return [...action.users];
    case ADD_USER:
      return [...action.payload];
    case UPDATE_USER:
      return [...action.payload];
    case DELETE_USER:
      return [...action.payload];
    default:
      return state;
  }
};
