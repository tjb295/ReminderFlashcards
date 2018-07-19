//this file will create all the different routes to use
import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import LoginScreen from './components/LoginScreen';

const RouterComponent = () => {
    return(
        <Router
            style={{flex:1}}
            navigationBarStyle={styles.topBar}
            >
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={View} 
                    title="Login or Create an Account" 
                    sceneStyle={{paddingTop: 64}} 
                    initial />
                </Scene>
            </Scene>
        </Router>
    );
};

//to get rid of android problem with annoying navbar
const styles = {
    topBar: {
        marginTop: 10,
        marginBottom: 10
    }
}

export default RouterComponent;