import { SET_LIST_POSTS } from "../constant";

const intialState = {
  data: [],
};

export const postsData = (state = intialState, action) => {
  switch (action.type) {
      case SET_LIST_POSTS:
        console.log(action)
        return [...action.posts];

    default:
      return state;
  }
};
