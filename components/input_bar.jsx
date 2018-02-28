import React from 'react';

class InputBar extends React.Component {
  // constructor(){
  //
  // }

  render(){
    return (
      <section className="input-bar-container">
        <textarea
          className="input-bar"
          placeholder="Type your message here..."
          ></textarea>
        <a className="send-button">
          <i className="fas fa-paper-plane"></i>
        </a>
      </section>
    );
  }
}

export default InputBar;
