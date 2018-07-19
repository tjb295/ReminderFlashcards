//import action types
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL

} from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

//now for the loginuser, will use dispatch as it is ajax request
export const loginUser = ({email, password}) => {
    //structure is to return a function with dispatch input
    return (dispatch) => {
        dispatch({ type: LOGIN_USER});

        firebase.auth().signInWithEmailAndPassword(email.trim(), password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch((error) => loginUserFail(dispatch, error));
            });
    };
};

//now define the dispatch callbacks
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });
}

const loginUserFail = (dispatch, error) => {
    dispatch({
        type: LOGIN_FAIL,
        payload: error.message
    });
};