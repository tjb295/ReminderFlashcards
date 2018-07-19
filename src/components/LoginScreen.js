import React, { Component } from 'react';
import { CardSection, Card, Input, Button } from './common';
import { connect } from 'reat-redux';
import { } from '../actions';

class LoginScreen extends Component {
    //add event handlers for text entry change
    onEmailChange(text){
        //connect to redux with our props
    }

    onPasswordChange(text){
        //connect to redux 
    }


    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder=""
                        onChangeText={() => {}}
                        value={this.props.email}
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        label="password"
                        placeholder=""
                        onChangeText={() => {}}
                        value={this.props.password}
                        />
                </CardSection>
                <CardSection>
                    <Button
                        toPress={() => {}}
                        >
                        Login
                    </Button>
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

//connect to map props accordingly, and to pass in actions
export default connect(mapStateToProps, {})(LoginScreen);