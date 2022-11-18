// import usersSaga from './saga';
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import listUsersSaga from './users/usersSaga';

const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer: rootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(listUsersSaga);

export default store;