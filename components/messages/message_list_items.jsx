import React from 'react';
import moment from 'moment';

class MessageListItems extends React.Component {
  handleTimeStamp(time){
    let today = moment().format("YYYYMMDD");
    let messageDate = moment(time).format("YYYYMMDD");
    console.log(today-messageDate);
    if( messageDate === today){
      return moment(time).format("HH:mm");
    }else if((today - messageDate) === 1){
      let clock = moment(time).format("HH:mm");
      return "Yesterday " + clock;
    }
  }

  render(){
    let message = this.props.message;
    let body = message.body;
    let timeStamp = this.handleTimeStamp(message.createdAt);
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
      <li className="message-container">
        <p className="time-stamp">{timeStamp}</p>
        <div className={messageBoxClass}>
          {profilePic}
          <div className={bubbleClass}>
            <p className="message-body">{body}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default MessageListItems;
