import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };


    onButtonPress() {
        console.log('entered function');
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return (
            <Spinner />
            );
        }
        return (
            <Button onPress={() => this.onButtonPress()} buttonText='Login' />
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                    placeholder='user@abc.com'
                    label='E-mail'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                    passwordInput
                    placeholder='Enter password'                 
                    label='Password'
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                    <Text style={styles.errorStyle}>
                        {this.state.error}
                    </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20
    }
};

export default LoginForm;
