import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { LoginContainer, MapContainer } from './container/index'
// import { MapComponent } from './component/index'

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene key="auth">
                    <Scene key="login" component={LoginContainer} hideNavBar={true} />
                    <Scene key="map" component={MapContainer} hideNavBar={true} />
                </Scene>
            </Router>
        );
    }
}


export default RouterComponent;