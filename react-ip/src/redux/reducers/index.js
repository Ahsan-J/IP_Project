import {combineReducers} from 'redux';
import userReducer from './userReducer.js'
import productReducer from './productReducer.js'
import generalReducer from './generalReducer.js'
export default combineReducers({userReducer,productReducer,generalReducer});