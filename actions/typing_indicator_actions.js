export const RECEIVE_TYPING_INDICATOR = "UPDATE_TYPING_INDICATOR";


export const updateTypingIndicator = indicator => dispatch => {
  //this promise can change into API call when backend is available.
  new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 10);
}).then(()=>{
    dispatch(receiveTypingIndicator(indicator));
  });
};


const receiveTypingIndicator = indicator =>({
  type: RECEIVE_TYPING_INDICATOR,
  indicator
});
