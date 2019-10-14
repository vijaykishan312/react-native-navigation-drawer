import { takeLatest } from 'redux-saga/effects';

import * as types from '../Action/ActionConstants';
import * as userSaga from './userSaga';

export default function* rootSaga() {

    yield takeLatest(types.LOGIN_REQUEST, userSaga.loginRequest);

}