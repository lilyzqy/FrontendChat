import { RECEIVE_MESSAGE } from '../actions/message_actions';

const messageReducer = (state = [], action) =>{
  //keep the original state untouchable
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
