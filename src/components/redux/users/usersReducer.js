import { url } from "../../../utils/http";
import {ADD_USERS, EDIT_USER, DELETE_USER, SET_LIST_USERS } from "../constant";

const intialState = {
  data: [],
};

export const usersData = (state = intialState, action) => {
  switch (action.type) {
      case SET_LIST_USERS:
      console.log(action);
        return [...action.users];


    case ADD_USERS:
      console.log(action);
      return state

    case EDIT_USER:
      console.log(action);
      return ;
    case DELETE_USER:
      console.log(action);
      try {
        url.delete(`/users/${payload.payload}`);
      } catch (error) {
        
      }
      return state
    default:
      return state;
  }
};
