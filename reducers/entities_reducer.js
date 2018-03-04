import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import messageReducer from './message_reducer';
import conversationReducer from './conversation_reducer';
import typingIndicatorReducer from "./typing_indicator_reducer";

export default combineReducers({
  users: userReducer,
  messages: messageReducer,
  conversations:conversationReducer,
  typingIndicators:typingIndicatorReducer
});
