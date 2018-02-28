const sessionReducer = (state = {}, action) =>{
  //keep the original state untouchable
  Object.freeze(state);
  switch (action.type){
    default:
      return state;
  }
};

export default sessionReducer;
