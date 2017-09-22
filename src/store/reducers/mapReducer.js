import AuthActions from './../actions/authAction'

INITIAL_STATE = {
    pin: [],
    loadingMap: false,
}

function MapReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AuthActions.SEARCH:
            return { ...state, loadingMap: true }
            break;
        case AuthActions.searchData:
            return { ...state, loadingMap: false, pin: action.payload }
            break;
        default:
            return state;

    }
}

export default MapReducer;