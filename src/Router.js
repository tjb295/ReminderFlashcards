//this file will create all the different routes to use
import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import LoginScreen from './components/LoginScreen';
import TopMenu from './components/TopMenu';
import DeckForm from './components/DeckForm';

const RouterComponent = () => {
    return(
        <Router
            style={{flex:1}}
            navigationBarStyle={styles.topBar}
            >
            <Scene key="root" hideNavBar>

                <Scene key="auth">
                    <Scene key="login" component={LoginScreen} 
                    title="Login or Create an Account" 
                    sceneStyle={{paddingTop: 64}} 
                    initial />
                </Scene>
                <Scene key="mainApp">
                    <Scene key="topMenu" 
                           rightTitle="Create Deck"
                           onRight = {() => {Actions.deckCreate()}}
                           component={TopMenu} 
                           title="Main Menu" />
                    <Scene key="deckCreate" component={DeckForm} title="Create a new Deck" />
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