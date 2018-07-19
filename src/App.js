import React, {Component} from 'react';
import { Provider } from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Router from '.Router';
import { config } from '../firebaseConfig/config';
import firebase from 'firebase';

class App extends Component {

    componentWillMount(){
        firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}
