import Api from '../NetworkLib/api';
import { SERVICE_URL } from './ServiceConstants';

export const userService = {
    login,
};

var ApiFile = new Api()

// login Services
function login(params:any) {
    return ApiFile.postRequest(SERVICE_URL.LOGIN_URL, params, (result:any) => {
        return result;
    });
}



