import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection, Card, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/AuthActions';

class LoginScreen extends Component {
    //add event handlers for text entry change
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    attemptLogin(){
        const {email, password} = this.props;
        
        this.props.loginUser({ email, password});
    }


    renderError(){
        if (this.props.error) {
            return(
                <View style={{backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading){
            return(<Spinner />);
        }
        return <Button toPress={this.attemptLogin.bind(this)}>Login</Button>
    }




    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="your email"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="password"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        />
                </CardSection>
                <CardSection>
                    {this.renderError()}
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
};

//define our state mapping for the reducer
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

const styles = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

//connect to map props accordingly, and to pass in actions
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);