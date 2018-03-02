import React from 'react';

import MessageListItems from './message_list_items';

class MessageList extends React.Component{
  render(){
    let messages = this.props.messages;
    let lastMessageTime = messages[messages.length -1];
    console.log(lastMessageTime);
    let items = messages.map((message,idx)=>(
        <MessageListItems
          key={idx}
          message={message}
          currentUserId={this.props.currentUserId}
          />
      ));
    return (
      <section className="message-list">
        <ul>
          {items}
        </ul>
      </section>
    );
  }
}

export default MessageList;
