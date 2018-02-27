//incase of type error, this will be caught instead of failing silently
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

//will be a thunk action that send message to the backend and dispatch the action that receive the message
export const createMessage = message => dispatch => {
  //can add API call here if backend is available.
  return ()=>{
    dispatch(receiveMessage(message));
  };
};

const receiveMessage = message =>({
  type: RECEIVE_MESSAGE,
  message
});
