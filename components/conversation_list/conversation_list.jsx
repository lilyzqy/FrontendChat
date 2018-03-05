import React from 'react';
import moment from 'moment';

class ConversationList extends React.Component{
  render(){
    //in real app last message info will nested in conversation slice of state
    let { conversation, lastMessage} = this.props;
    let lastTime = lastMessage.createdAt;
    let showLastTime;
    if(moment().format("YYYYMMDD") === moment(lastTime).format("YYYYMMDD")){
      showLastTime = moment(lastTime).format("HH:mm");
    }else{
      showLastTime = moment(lastTime).format("MM/DD/YY");
    }
    return (
      <li className="conversation">
        <img className="conversation-pic" src={conversation.conversationPic}></img>
        <div className="conversation-info">
          <div className="conversation-info-top">
            <h5 className="conversation-to">{conversation.title}</h5>
            <h5 className="conversation-last-time">{showLastTime}</h5>
          </div>
          <p className="conversation-info-bottom">{lastMessage.body}</p>
        </div>
      </li>
    );
  }
}

export default ConversationList;
