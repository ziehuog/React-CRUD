import { put, takeEvery } from "redux-saga/effects";
import { url } from "../../../utils/http";
import {LIST_POSTS,  SET_LIST_POSTS} from "../constant";

function* getPosts(){
    let data = yield url.get('/posts');
    let posts = data.data

    yield put({type: SET_LIST_POSTS, posts})
}

function* listPostsSaga()
{
    yield takeEvery(LIST_POSTS, getPosts)
}

export default listPostsSaga;