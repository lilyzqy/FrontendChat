import React from 'react';

import ConversationListContainer from './conversation_list/conversation_list_container';

class SideBar extends React.Component {
  render(){
    return (
      <section className="screen-left">
        <header className="app-header">
          <h2 className="app-name">ChatChat</h2>
        </header>
        <ConversationListContainer conversation={this.props.conversation}/>
      </section>
    );
  }
}

export default SideBar;
