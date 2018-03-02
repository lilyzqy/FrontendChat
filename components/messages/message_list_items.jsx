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
      bubbleClass = "bubble right";
    }else{
      messageBoxClass = "message-box left";
      bubbleClass = "bubble left";
      profilePic = (<img src={author.profilePic} className="profile-pic"></img>);
    }
    return(
      <li className={messageBoxClass}>
        {profilePic}
        <p className={bubbleClass}>
          {body}
        </p>
      </li>
    );
  }
}

export default MessageListItems;
