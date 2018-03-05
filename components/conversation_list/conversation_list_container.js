import { connect } from 'react-redux';

import ConversationList from './conversation_list';

const mapSTPs = ({entities}) => ({
  lastMessage:entities.messages[entities.messages.length - 1]
});

export default connect(mapSTPs)(ConversationList);
