import { UPDATE_TIME_STAMP } from "../actions/timestamp_actions";

const timeStampReducer = ( state="", action) =>{
  //keep the original state untouchable
  Object.freeze(state);
  switch (action.type){
    case UPDATE_TIME_STAMP:
      return action.timeStamp;
    default:
      return state;
  }
};

export default timeStampReducer;
