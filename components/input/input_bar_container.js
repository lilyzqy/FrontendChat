import { connect } from 'react-redux';
import { createMessage } from '../../actions/message_actions';
import { updateTypingIndicator } from '../../actions/typing_indicator_actions';

import InputBar from './input_bar';

const mapDTPs = dispatch =>({
  createMessage: (message) => dispatch(createMessage(message)),
  updateTypingIndicator: (indicator) => dispatch(updateTypingIndicator(indicator))
});

export default connect(undefined, mapDTPs)(InputBar);
