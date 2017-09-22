import { Observable } from "rxjs"
import AuthActions from '../actions/authAction'
// import Path from '../../config/path'
// import { HttpService } from '../../service/http'
import { Actions } from 'react-native-router-flux'

export default class AuthEpic {

    //Epic middleware for login
    static signupEpic(actions$) {
        return actions$.ofType(AuthActions.SIGNUP_USER)
            .switchMap(({ payload }) => {
                console.log(payload)
                return HttpService.post(Path.SIGNUP, payload)
                    .map((arr) => {
                        Actions.login()
                        return { type: AuthActions.SIGNUP_USER_SUCCESSFULL }
                    })
                    .catch(err => {
                        return Observable.of({
                            type: AuthActions.SIGNUP_USER_FAIL
                        })
                    })
            })

    }
    static loginEpic(actions$) {
        return actions$.ofType(AuthActions.LOGIN_USER)
            .switchMap(({ payload }) => {
                console.log(payload)
                return HttpService.post(Path.LOGIN, payload)
                    .map((arr) => {
                        Actions.login()
                        Actions.dashboard()
                        return { type: AuthActions.LOGIN_USER_SUCCESSFULL }
                    })
                    .catch(err => {
                        return Observable.of({
                            type: AuthActions.SIGNUP_USER_FAIL
                        })
                    })
            })

    }
}   