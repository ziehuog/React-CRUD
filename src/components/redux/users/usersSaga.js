import { put, takeEvery } from "redux-saga/effects";
import { url } from "../../../utils/http";
import { LIST_USERS,  SET_LIST_USERS} from "../constant";

function* getUsers(){
    let data = yield url.get('/users?page=1&per_page=20');
    let users = data.data
    yield put({type: SET_LIST_USERS, users})
}

function* listUsersSaga()
{
    yield takeEvery(LIST_USERS, getUsers)
}

export default listUsersSaga;