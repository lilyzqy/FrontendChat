import { connect } from 'react-redux';

import TypingIndicator from './typing_indicator';

const mapSTPs = ({entities},ownProps) =>({
  typingIndicators:entities.typingIndicators,
  memberIds:entities.conversations[ownProps.currentUserId].memberIds,
  users:entities.users
});

export default connect(mapSTPs,undefined)(TypingIndicator);
