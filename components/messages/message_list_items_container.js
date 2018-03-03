import { connect } from 'react-redux';
import { updateTimeStamp } from "../../actions/timestamp_actions";

import MessageListItems from './message_list_items';

const mapSTPs = ({entities}) =>({
  users: entities.users,
  messages:entities.messages
});

const mapDTPs = dispatch =>({
  updateTimeStamp: (newTimeStamp)=>dispatch(updateTimeStamp(newTimeStamp))
});

export default connect(mapSTPs,mapDTPs)(MessageListItems);
