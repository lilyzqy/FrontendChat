import React from 'react';
import InputBar from './input_bar';
import MessageList from './messages/message_list';

class ChatView extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props);
    return (
      <div className="chat-view">
        <div>
          <p className="chat-title">To: {this.props.chattingTo}</p>
        </div>
      </div>
    );
  }
}

export default ChatView;
