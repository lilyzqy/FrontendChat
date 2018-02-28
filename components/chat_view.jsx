import React from 'react';

class ChatView extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props);
    return (
      <div className="chat-view">
       {this.props.currentUser}
      </div>
    );
  }
}

export default ChatView;
