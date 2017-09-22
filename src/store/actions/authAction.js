import { Actions } from 'react-native-router-flux'
export default class AuthActions {

    static LOGIN_USER = "LOGIN_USER";
    static LOGIN_USER_SUCCESSFULL = "LOGIN_USER_SUCCESSFULL";
    static LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

    static SIGNUP_USER = "SIGNUP_USER";
    static SIGNUP_USER_SUCCESSFULL = "SIGNUP_USER_SUCCESSFULL";
    static SIGNUP_USER_FAIL = "SIGNUP_USER_FAIL";

    static LOGOUT = 'LOGOUT';
    static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


    static SEARCH = "SEARCH";
    static SEARCH_SUCCESSFULL = "SEARCH_SUCCESSFULL";
    static SEARCH_FAIL = "SEARCH_FAIL";

    static loginUser(data) {
        return {
            type: AuthActions.LOGIN_USER,
            payload: data
        }
    }


    static signupUser(data) {
        return {
            type: AuthActions.SIGNUP_USER,
            payload: data
        }
    }
    static signupUserSucess(data) {
        return {
            type: AuthActions.SIGNUP_USER_SUCCESSFULL,
            payload: data
        }
    }
    static searchData(data) {
        return {
            type: AuthActions.SEARCH,
            payload: data
        }
    }




}