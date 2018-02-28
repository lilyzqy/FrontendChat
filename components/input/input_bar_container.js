import { connect } from 'react-redux';
import { createMessage } from '../../actions/message_actions';

import InputBar from './input_bar';

const mapDTPs = dispatch =>({
  createMessage: (message) => dispatch(createMessage(message))
});

export default connect(undefined, mapDTPs)(InputBar);
