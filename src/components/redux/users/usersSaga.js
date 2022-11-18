import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { url } from "../../../utils/http";
import { LIST_USERS, ADD_USERS, EDIT_USER, SET_LIST_USERS, DELETE_USER } from "../constant";

function* getUsers(){
    let data = yield url.get('/users');
    let users = data.data
    yield put({type: SET_LIST_USERS, users})
}

// function* addUsers(payload){
//      yield url.post('/users', payload);
// }

// function* deleteUser(payload){
//     yield url.delete(`/users/${payload.payload}`);
// }


function* listUsersSaga()
{
    yield takeEvery(LIST_USERS, getUsers)
    // yield takeEvery(ADD_USERS, addUsers)
    // yield takeEvery(EDIT_USER, getUsers)
    // yield takeEvery(DELETE_USER, deleteUser)
}

export default listUsersSaga;