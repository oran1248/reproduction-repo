
import { all } from 'redux-saga/effects';
import { watchLoginRequest } from './auth/loginSaga';

export default function* rootSaga() {
    yield all([
        watchLoginRequest(),
    ])
}

