import React, { Component } from 'react';
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Form, Item, Input, Left, Right, Button, Icon, Header, Body, Title, Text } from 'native-base'

class Login extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Form>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Header</Title>
                        </Body>
                    </Header>
                    <View style={{ marginTop: 30 }}>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item>
                            <Input placeholder="Password" />
                        </Item>
                    </View>
                    <View style={styles.view}>
                        <Button full light onPress={() => Actions.map()}><Text>Login</Text></Button>
                    </View>
                </Form>
            </Container>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20
    }
}

export default Login;