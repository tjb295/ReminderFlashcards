import React, {Component} from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';
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

export default App;
