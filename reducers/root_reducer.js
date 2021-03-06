import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorReducer from './error_reducer';


export default combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorReducer
});
