import React from 'react';
import ChatView from './chat_view';

const App = () => {
  return(
    <div className="screen">
      //currentUserId will be available at the state in realapp
      <ChatView currentUserId="1" conversationId="1"/>
      <ChatView currentUserId="2" conversationId="2"/>
    </div>
  );
};

export default App;
