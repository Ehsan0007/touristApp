import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native'
import MapView from 'react-native-maps'
import { Header, Item, Input, Icon, Button, Text } from 'native-base'
import GooglePlacesInput from './../autocomplete/index'

class MapComponent extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            position:
            {
                latitude: 24.8584049,
                latitudeDelta: 0.006607147806899755,
                longitude: 67.007501,
                longitudeDelta: 0.0063600431189364
            },
        }
    }
    onRegionChange = (position) => {
        this.setState({ position })
    }
    // componentDidMount() {
    //     console.log("Hanara data", this.props.location)
    // }
    getDate = () => {
        const key = 'AIzaSyDHjV0SCNU_LYCHiFPXooo5za7uk_xacS4';
        const query = this.state.search;
        let location = `${this.state.position.latitude},${this.state.position.longitude}`;
        let searchUri = `https://maps.googleapis.com/maps/api/place/textsearch/json?radius=100&key=${key}&query=${query}&location=${location}`;
        this.props.search(searchUri)
    }

    render() {
        const data = this.props.map;
        console.log("hamara data" ,data)
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    //userLocationAnnotationTitle={this.props.user.displayName + ' Your Loacation'}
                    maxZoomLevel={1}
                    loadingEnabled={true}
                    region={this.state.position}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: 24.8584049,
                        latitudeDelta: 0.006607147806899755,
                        longitude: 67.007501,
                        longitudeDelta: 0.0063600431189364
                    }}
                    onRegionChange={this.onRegionChange}
                >
                    {/*{this.props.pins.map((el, ind) => (
                        <View key={ind}>
                            <Pin el={el} index={ind} navigate={this.props.navigation.navigate} />
                        </View>
                    ))
                    }*/}
                </MapView>
                <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Search" onChangeText={(val) => this.setState({ search: val })} />
                            <Icon name="ios-people" onPress={() => this.getDate()} />
                        </Item>
                        <Button transparent >
                            <Text>Search</Text>
                        </Button>
                    </Header>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        backgroundColor: "#fff", borderRadius: 50,
        width: '90%',
        height: 40,
        justifyContent: 'center'
    }
});

export default MapComponent;