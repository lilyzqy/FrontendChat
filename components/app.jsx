import React from 'react';
import ChatViewContainer from './chatView/chat_view_container';

const App = () => {
  //currentUserId will be available at the state in realapp
  return(
    <main className="app">
      <ChatViewContainer currentUserId="1" conversationId="1"/>
      <ChatViewContainer currentUserId="2" conversationId="2"/>
    </main>
  );
};

export default App;
