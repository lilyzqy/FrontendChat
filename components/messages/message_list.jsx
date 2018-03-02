import React from 'react';

import MessageListItems from './message_list_items';

class MessageList extends React.Component{
  constructor(){
    super();
    this.state = {
      lastTimeStamp: ""
    };
  }

  updateLastTimeStamp(timeStamp){
    this.setState({lastTimeStamp:timeStamp});
  }

  render(){
    let messages = this.props.messages;
    let items = messages.map((message,idx)=>(
        <MessageListItems
          key={idx}
          message={message}
          currentUserId={this.props.currentUserId}
          users={this.props.users}
          lastTimeStamp={this.state.lastTimeStamp}
          updateLastTimeStamp={this.updateLastTimeStamp.bind(this)}
          />
      ));
    return (
      <section className="message-list">
        <ul className="messages-ul">
          {items}
        </ul>
      </section>
    );
  }
}

export default MessageList;
