import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import messageReducer from './message_reducer';

export default combineReducers({
  users: userReducer,
  messages: messageReducer
});
