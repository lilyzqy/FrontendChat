import React from 'react';
import ChatView from './chat_view';

const App = () => {
  return(
    <div className="screen">
      <ChatView currentUserId="1" chattingTo="Rob"/>
      <ChatView currentUserId="2" chattingTo="Laura"/>
    </div>
  );
};

export default App;
