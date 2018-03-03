import { UPDATE_TYPING_INDICATOR } from "../actions/typing_indicator_actions";

const typingIndicatorReducer = ( state=false, action) =>{
  //keep the original state untouchable
  Object.freeze(state);
  switch (action.type){
    case UPDATE_TYPING_INDICATOR:
      return action.boolean;
    default:
      return state;
  }
};

export default typingIndicatorReducer;
