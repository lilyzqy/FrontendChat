import React from 'react';

import MessageListItems from './message_list_items';

class MessageList extends React.Component{
  render(){
    let messages = this.props.messages;
    let lastMessage = messages[ messages.length - 1];
    console.log(lastMessage);
    let items = messages.map((message,idx)=>(
        <MessageListItems
          key={idx}
          message={message}
          currentUserId={this.props.currentUserId}
          users={this.props.users}
          lastMessage={lastMessage}
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
