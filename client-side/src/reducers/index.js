import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import postReducer from './postReducer';



export default combineReducers({
    form: formReducer,
    users: userReducer,
    posts: postReducer
});