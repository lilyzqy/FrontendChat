export const UPDATE_TYPING_INDICATOR = "UPDATE_TYPING_INDICATOR";


export const patchTypingIndicator = boolean => dispatch => {
  //this promise can change into API call when backend is available.
  new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(()=>{
    dispatch(updateTypingIndicator(boolean));
  });
};


const updateTypingIndicator = boolean =>({
  type: UPDATE_TYPING_INDICATOR,
  boolean
});
