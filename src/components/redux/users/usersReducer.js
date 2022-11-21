import { SET_LIST_USERS } from "../constant";

const intialState = {
  data: [],
};

export const usersData = (state = intialState, action) => {
  switch (action.type) {
      case SET_LIST_USERS:
        return [...action.users];

    default:
      return state;
  }
};
