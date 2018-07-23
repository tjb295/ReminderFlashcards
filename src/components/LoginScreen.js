import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CardSection, Card, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/AuthActions';

class LoginScreen extends Component {

    //logic for switching to password on email submit
    state = { focusPasswordInput: false };

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

    handleEmailInputSubmit() {
        this.setState({focusPasswordInput: true});
    }




    render(){
        return(
            <Card>
                <CardSection>
                    <View style={styles.logoContainerStyle}>
                        <Image 
                            style={styles.logoStyle}
                            source={ require('../../resources/FlashReminderLogo.png')}
                            />
                    </View>
                </CardSection>
                <CardSection>
                    <Input 
                        label="Email:"
                        placeholder="New or Existing account"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        onSubmitEditing={this.handleEmailInputSubmit.bind(this)}
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password:"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        focus={this.state.focusPasswordInput}
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
    },
    logoStyle: {
        flex: 1,
    },
    logoContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
        marginRight: 10,
        height: 300,
		width: 375
	},
};

//connect to map props accordingly, and to pass in actions
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);