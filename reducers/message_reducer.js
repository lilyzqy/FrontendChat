import { RECEIVE_MESSAGE } from '../actions/message_actions';

const INITIALSTATE = [
  {
    authorId:"1",
    body:"Welcome to ChatChat! Let's chat!",
    createdAt:"03-01-2018 12:02"
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
