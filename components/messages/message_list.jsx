import React from 'react';

import MessageListItemsContainer from './message_list_items_container';

class MessageList extends React.Component{
  componentDidUpdate(){
    this.messagesEnd.scrollIntoView({behaviour: 'smooth'});
  }

  render(){
    let messages = this.props.messages;
    let items = messages.map((message,idx)=>(
        <MessageListItemsContainer
          key={idx}
          message={message}
          currentUserId={this.props.currentUserId}
          />
      ));
    return (
      <ul className="messages-ul">
        {items}
        <div ref={el => { this.messagesEnd = el; }} />
      </ul>
    );
  }
}

export default MessageList;
