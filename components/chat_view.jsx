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
      <section className="chat-view">
        <header className="chat-header">
          <section className="chat-receiver">
            <p className="to">To:</p>
            <p className="conversation-title">{this.props.chattingTo}</p>
          </section>
        </header>
        <MessageList />
        <InputBar />
      </section>
    );
  }
}

export default ChatView;
