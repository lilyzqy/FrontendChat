import React from 'react';
import InputBarContainer from '../input/input_bar_container';
import MessageList from '../messages/message_list';

class ChatView extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <section className="chat-view">
        <header className="chat-header">
          <section className="chat-receiver">
            <p className="to">To:</p>
            <p className="conversation-title">{this.props.chattingTo}</p>
          </section>
        </header>
        <MessageList />
        <InputBarContainer currentUserId={this.props.currentUserId}/>
      </section>
    );
  }
}

export default ChatView;
