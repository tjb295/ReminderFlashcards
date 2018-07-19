//this file will create all the different routes to use
import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';


const RouterComponent = () => {
    return(
        <Routers
            style={{flex:1}}
            navigationBarStyle={styles.topBar}
            >
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