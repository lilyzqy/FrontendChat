import React from 'react';
import moment from 'moment';

class MessageListItems extends React.Component {
  render(){
    let message = this.props.message.body;
    let timeStamp;
    return(
      <li>
        {message}
      </li>
    );
  }
}

export default MessageListItems;
