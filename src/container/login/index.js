import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Login } from './../../component'
import AuthActions from './../../store/actions/authAction'

class LoginContainer extends Component {
    render() {
        return <Login />
    }
}

function mapStateToProps(state) {
    return {
        authlogin: state.AuthReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginUsers: function (data) {
            ;
            return dispatch(AuthActions.loginUser(data))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);