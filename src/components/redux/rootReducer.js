import { combineReducers } from 'redux';
import { usersData } from './users/usersReducer';
import { postsData } from './posts/postsReducer';


const rootReducer = combineReducers({
users: usersData,
posts: postsData,
});
export default rootReducer;