import { connect } from 'react-redux';

import MessageList from './message_list';

const mapSTPs = ({entities}) =>({
  messages: entities.messages
});

export default connect(mapSTPs,undefined)(MessageList);
