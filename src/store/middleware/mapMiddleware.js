import { Observable } from 'rxjs'
import axios from 'axios'
import AuthActions from '../actions/authAction'

export default class MapEpic {

    //Epic middleware for login
    static Map(actions$) {
        return actions$.ofType(AuthActions.SEARCH)
            .switchMap(({ payload }) => {
                console.log("payload", payload)
                return axios.get(payload).then(({data})=>{
                    return AuthActions.SEARCH_SUCCESSFULL(data.results)
                }).catch((err)=>{
                    return {
                        type : AuthActions.SEARCH_FAIL,
                        payload : err
                    }
                })
            })
    }

}  