import { combineReducers, applyMiddleware, createStore } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import AuthEpic from './middleware/epicMiddleware'
import MapReducer from './reducers/mapReducer'
import MapEpic from './middleware/mapMiddleware'


export const rootEpic = combineEpics(
    // AuthEpic.loginEpic,
    AuthEpic.signupEpic,
    AuthEpic.loginEpic,
    MapEpic.Map
);

export {
    AuthEpic,
    MapEpic
    // other Middlewares here
}

const epicMiddleware = createEpicMiddleware(rootEpic);

export const rootReducer = combineReducers({
    RootMap : MapReducer
    // more reducers go here
})

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(rootReducer)