import {combineReducers} from 'redux';
import getUsers from '../reducers/users';

export default combineReducers({
  users: getUsers
});