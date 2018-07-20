//this file will create all the different routes to use
import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import LoginScreen from './components/LoginScreen';
import TopMenu from './components/TopMenu';
import DeckForm from './components/DeckForm';
import DeckDisplay from './components/DeckDisplay';
import GameScreen from './components/GameScreen';

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
                    initial 
                    hideNavBar/>
                </Scene>

                <Scene key="menus">
                    <Scene key="topMenu" 
                           rightTitle="Create Deck"
                           onRight = {() => {Actions.deckCreate()}}
                           component={TopMenu} 
                           title="Main Menu" />

                    <Scene key="deckCreate" component={DeckForm} title="Create a new Deck" />

                    <Scene key="showDecks" component={DeckDisplay} title="Your Flash Cards" />

                </Scene>
                <Scene key="game">

                    <Scene key="gameScreen" component={GameScreen} title="Challenge!" rightTitle="Exit" onRight={() => {Actions.pop()}}/>

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