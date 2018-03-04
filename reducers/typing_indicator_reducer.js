import { RECEIVE_TYPING_INDICATOR } from '../actions/typing_indicator_actions';
import merge from 'lodash/merge';

const INITIAL_STATE = {1:false,2:false};

const typingIndicatorReducer = ( state = INITIAL_STATE, action) =>{
  //keep the original state untouchable
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_TYPING_INDICATOR:
      return merge({},state,action.indicator);
    default:
      return state;
  }
};

export default typingIndicatorReducer;
