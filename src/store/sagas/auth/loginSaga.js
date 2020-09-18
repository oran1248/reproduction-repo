import { call, takeLatest } from 'redux-saga/effects';
import { sendLoginRequest } from '../../../utils/api/auth';

function* loginFlow() {
    yield call(sendLoginRequest, {});
}

export function* watchLoginRequest() {
    yield takeLatest("LOGIN_REQUEST", loginFlow)
}