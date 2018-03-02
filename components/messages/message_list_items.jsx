import React from 'react';
import moment from 'moment';

class MessageListItems extends React.Component {
  render(){
    let message = this.props.message;
    let body = message.body;
    let timeStamp;
    let author = this.props.users[message.authorId];
    let messageBoxClass;
    let profilePic;
    let bubbleClass;
    if(this.props.currentUserId === message.authorId){
      messageBoxClass = "message-box right";
      bubbleClass = "right-bubble";
    }else{
      messageBoxClass = "message-box left";
      bubbleClass = "left-bubble";
      profilePic = (<img src={author.profilePic} className="profile-pic"></img>);
    }
    return(
      <li className={messageBoxClass}>
        {profilePic}
        <div className={bubbleClass}>
          <p className="message-body">{body}</p>
        </div>
      </li>
    );
  }
}

export default MessageListItems;
