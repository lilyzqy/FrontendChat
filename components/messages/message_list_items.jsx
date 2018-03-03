import React from 'react';
import moment from 'moment';

class MessageListItems extends React.Component {
  handleTimeStamp(message){
    let time = message.createdAt;
    let today = moment().format("YYYYMMDD");
    let messageDate = moment(time).format("YYYYMMDD");
    let messageTime = moment(time).format("HHmm");
    let messages= this.props.messages;
    let lastTimeStamp = messages[messages.indexOf(message) - 1];
    let lastTimeStampDate;
    let lastTimeStampTime;
    if(lastTimeStamp !== undefined){
      lastTimeStampDate = moment(lastTimeStamp.createdAt).format("YYYYMMDD");
      lastTimeStampTime = moment(lastTimeStamp.createdAt).format("HHmm");
    }
    //show timeStamp
    if(lastTimeStamp === undefined
    || messageDate !== lastTimeStampDate
    ||(messageDate === today && messageTime > (parseInt(lastTimeStampTime) + 3))){
      if( messageDate === today){
        return moment(time).format("HH:mm");
      }else if((today - messageDate) === 1){
        let clock = moment(time).format("HH:mm");
        return "Yesterday " + clock;
      }else if(today.slice(0,5) === messageDate.slice(0,5)){
        return moment(time).format("MMM DD, HH:mm");
      }else{
        return moment(time).format("YYYY-MM-DD, HH:mm");
      }
    }else{
      return "";
    }
  }

  render(){
    let message = this.props.message;
    let body = message.body;
    let timeStamp = this.handleTimeStamp(message);
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
