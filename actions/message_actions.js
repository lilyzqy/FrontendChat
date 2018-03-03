//incase of type error, this will be caught instead of failing silently
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const createMessage = message => dispatch => {
  //this promise can change into API call when backend is available.
  new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 10);
}).then(()=>{
    dispatch(receiveMessage(message));
  });
};

const receiveMessage = message =>({
  type: RECEIVE_MESSAGE,
  message
});
