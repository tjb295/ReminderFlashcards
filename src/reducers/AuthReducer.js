import {

} from '../actions/types';

//set the initial state to be held by reducer
/* 
    email and password are input entries to be sent to firebaselogin
    user will be held once login, 
    error used to return auth error
    loading will toggle the button animation
*/
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

//reducer for auth
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case EMAIL_CHANGED:
            //update state object with the action type
            //state.email = action.payload will not register change, will just 
            //make a new object take all properties from existing state property and put into new "state"
            //then make new object, email, with property payload, and add in a new email property
            //we made a new object in memory, with same properties, 
            //must produce brand new object, or else nothing new will come out of this
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
            
        default:
            return state;
    }
}