import React, { Component } from 'react';
import { MapComponent } from './../../component/index';
import { connect } from 'react-redux'
import AuthActions from './../../store/actions/authAction'

class MapContainer extends Component {
    render() {
        return <MapComponent map={this.props.map} search={this.props.search}/>
    }
}

function mapStateToProps(state) {
    return {
        map: state.RootMap.pin
    };
}

function mapDispatchToProps(dispatch) {
    return {
        search: function (data) {
            ;
            return dispatch(AuthActions.searchData(data))
            console.log(data)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer) 