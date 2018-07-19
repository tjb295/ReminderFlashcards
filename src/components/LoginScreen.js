import React, { Component } from 'react';
import { CardSection, Card, Input, Button } from './common';

class LoginScreen extends Component {

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

export default LoginScreen;