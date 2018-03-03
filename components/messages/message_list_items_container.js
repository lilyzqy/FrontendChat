import { connect } from 'react-redux';

import MessageListItems from './message_list_items';

const mapSTPs = ({entities}) =>({
  users: entities.users,
  messages:entities.messages
});

export default connect(mapSTPs,undefined)(MessageListItems);
