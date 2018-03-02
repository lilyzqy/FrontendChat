import React from 'react';
import moment from 'moment';

class MessageListItems extends React.Component {
  render(){
    let message = this.props.message;
    let body = message.body;
    let timeStamp;
    let author = this.props.users[message.authorId];
    let className = this.props.currentUserId === message.authorId ?
      "message-box right" : "message-box left";
    let profilePic = (
      this.props.currentUserId === message.authorId ?
      undefined : <img src={author.profilePic} className="profile-pic"></img>);
    return(
      <li className={className}>
        {profilePic}
        <p className="message-bubble">
          {body}
        </p>
      </li>
    );
  }
}

export default MessageListItems;
