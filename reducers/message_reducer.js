import { RECEIVE_MESSAGE } from '../actions/message_actions';

const INITIALSTATE = [
  {
    authorId:"2",
    body:"Welcome to ChatChat! Let's begin!",
    createdAt:"2018-03-01T20:45:23-08:00"
  }
];

const messageReducer = (state = INITIALSTATE, action) =>{
  //keep the original state untouchable
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_MESSAGE:
      return state.concat(action.message);
    default:
      return state;
  }
};

export default messageReducer ;
