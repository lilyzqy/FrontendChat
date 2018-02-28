import React from 'react';

class InputBar extends React.Component {
  // constructor(){
  //
  // }

  render(){
    return (
      <section className="input-bar-container">
        <input className="input-bar"></input>
        <a className="send-button">
          <i className="fas fa-paper-plane"></i>
        </a>
      </section>
    );
  }
}

export default InputBar;
