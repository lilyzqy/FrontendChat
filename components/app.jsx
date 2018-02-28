import React from 'react';
import ChatView from './chat_view';

const App = () => {
  return(
    <div className="screen">
      <ChatView chattingTo="Rob"/>
      <ChatView chattingTo="Laura"/>
    </div>
  );
};

export default App;
