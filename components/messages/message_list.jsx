import React from 'react';

import MessageListItem from './message_list_item';

class MessageList extends React.Component{
  render(){
    let items = this.props.messages.map((message,idx)=>(
        <MessageListItem
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
