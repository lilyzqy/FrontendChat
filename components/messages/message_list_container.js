import { connect } from 'react-redux';

import MessageList from './message_list';

const mapSTPs = ({entities}) =>({
  messages: entities.messages,
  users: entities.users
});

export default connect(mapSTPs,undefined)(MessageList);
