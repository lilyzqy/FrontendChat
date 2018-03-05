import React from 'react';
import InputBarContainer from '../input/input_bar_container';
import MessageListContainer from '../messages/message_list_container';
import TypingIndicatorContainer from '../typing_indicator/typing_indicator_container';
import SideBar from '../side_bar';


class ChatView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className="screen">
        <SideBar conversation={this.props.conversation}/>
        <section className="screen-right">
          <header className="chat-header">
            <section className="chat-receiver">
              <p className="chat-to">To:</p>
              <p className="conversation-title">{this.props.conversation.title}</p>
            </section>
          </header>
          <MessageListContainer currentUserId={this.props.currentUserId}/>
          <TypingIndicatorContainer currentUserId={this.props.currentUserId}/>
          <InputBarContainer currentUserId={this.props.currentUserId}/>
        </section>
      </section>
    );
  }
}

export default ChatView;
