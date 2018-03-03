import React from 'react';

import MessageListItemsContainer from './message_list_items_container';

class MessageList extends React.Component{
  render(){
    let messages = this.props.messages;
    let items = messages.map((message,idx)=>(
        <MessageListItemsContainer
          key={idx}
          message={message}
          currentUserId={this.props.currentUserId}
          users={this.props.users}
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
