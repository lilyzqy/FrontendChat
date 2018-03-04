import React from "react";

class TypingIndicator extends React.Component {
  render(){
    let { typingIndicators, memberIds, users } = this.props;
    let indicatorShowing = memberIds.map((id,idx)=>{
      if(typingIndicators[id]){
        return (<li className="indicator-showing"
                    key={idx}
                    >{users[id].username} is typing... </li>);
      }
    });
    return (
      <div className="typing-indicator">
        <ul>
          {indicatorShowing.slice(0,4)}
        </ul>
      </div>
    );
  }
}

export default TypingIndicator;
