import React from 'react';
import ChatView from './chat_view';

const App = () => {
  return(
    <div>
      <ChatView currentUser="Rob"/>
      <ChatView currentUser="Laura"/>
    </div>
  );
};

export default App;
