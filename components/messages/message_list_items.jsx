import React from 'react';
import moment from 'moment';

class MessageListItems extends React.Component {
  handleTimeStamp(message){
    let time = message.createdAt;
    let today = moment().format("YYYYMMDD");
    let messageDate = moment(time).format("YYYYMMDD");
    let messageTime = moment(time).format("HHmm");
    let messages= this.props.messages;
    let lastMessage= messages[messages.indexOf(message) - 1];
    let lastTimeStampDate;
    let lastTimeStampTime;
    if(lastMessage!== undefined){
      lastTimeStampDate = moment(lastMessage.createdAt).format("YYYYMMDD");
      lastTimeStampTime = moment(lastMessage.createdAt).format("HHmm");
    }
    //timestamp will only show when first message
    if(lastMessage=== undefined
      //or when different day than last message
    || messageDate !== lastTimeStampDate
    //or when today's message and more than 2 mins from last message
    ||(messageDate === today && messageTime >= (parseInt(lastTimeStampTime) + 2))){
      if(messageDate === today){
        return moment(time).format("HH:mm");
        //yesterday's message
      }else if((today - messageDate) === 1){
        let clock = moment(time).format("HH:mm");
        return "Yesterday " + clock;
        //same year message
      }else if(today.slice(0,5) === messageDate.slice(0,5)){
        return moment(time).format("MMM DD, HH:mm");
        //different year message
      }else{
        return moment(time).format("YYYY-MM-DD, HH:mm");
      }
    }else{
      return "";
    }
  }
  //hide duplicated profilePic
  handleProfilePic(message,timeStampBody){
    let messages= this.props.messages;
    let lastMessage= messages[messages.indexOf(message) - 1];
    let author = this.props.users[message.authorId];
    //only show profilePic when showing timeStamp or first message or switch conversation
    if(timeStampBody !== ""|| lastMessage === undefined ||lastMessage.authorId !== message.authorId){
      return (<img src={author.profilePic} className="profile-pic"></img>);
    }else{
      return undefined;
    }
  }

  render(){
    let message = this.props.message;
    let body = message.body;
    let timeStampBody = this.handleTimeStamp(message);
    let timeStamp;
    if(timeStampBody !== ""){
      timeStamp = (<p className="time-stamp">{timeStampBody}</p>);
    }
    let profilePic;
    let messageBoxClass;
    let bubbleClass;
    let messageArrow;
    //switch message bubble
    if(this.props.currentUserId === message.authorId){
      messageArrow = "left-arrow";
      messageBoxClass = "message-box right";
      bubbleClass = "clearfix right-bubble";
    }else{
      messageArrow = "right-arrow";
      messageBoxClass = "message-box left";
      bubbleClass = "clearfix left-bubble";
      profilePic = this.handleProfilePic(message,timeStampBody);
    }
    return(
      <li className="clearfix message-container">
        {timeStamp}
        <div className={messageBoxClass}>
          {profilePic}
          <div className={messageArrow}></div>
          <div className={bubbleClass}>
            <p className="message-body">{body}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default MessageListItems;
