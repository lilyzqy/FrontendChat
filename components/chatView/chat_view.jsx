import React from 'react';
import InputBarContainer from '../input/input_bar_container';
import MessageListContainer from '../messages/message_list_container';

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
            <p className="conversation-title">{this.props.conversation.title}</p>
          </section>
        </header>
        <MessageListContainer currentUserId={this.props.currentUserId}/>
        <InputBarContainer currentUserId={this.props.currentUserId}/>
      </section>
    );
  }
}

export default ChatView;
