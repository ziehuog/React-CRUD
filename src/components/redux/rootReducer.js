import { combineReducers } from 'redux';
import { usersData } from './users/usersReducer';

const rootReducer = combineReducers({
users: usersData,
});
export default rootReducer;