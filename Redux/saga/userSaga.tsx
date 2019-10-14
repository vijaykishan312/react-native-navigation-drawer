import { call, put } from 'redux-saga/effects';
import { userService } from '../service/index';
import * as types from '../Action/ActionConstants';

// Log in service saga
export function* loginRequest(action:any) {
    console.log("this is saga"+JSON.stringify(action))
    try {
        yield put({ type: types.SHOW_LOADING, FormLoading: true });
        const data = yield call(userService.login, action.data);
        yield put({type:types.LOGIN_RESPONSE, data})
        
        yield put({ type: types.SHOW_LOADING, FormLoading: false });
    } catch (error) {
        console.log(" this is user loggin error in saga file . "+JSON.stringify(error))
        yield put({ type: types.SHOW_LOADING, FormLoading: false });
    }
}