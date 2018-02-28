import React from 'react';

class ChatView extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props);
    return (
      <div className="chat-view">
        <p>{this.props.currentUser}</p>

      </div>
    );
  }
}

export default ChatView;
