import React from 'react';

class InputBar extends React.Component {
  constructor(){
    super();
    this.state = {
      body:""
    };
  }

  componentDidMount(){
    this.setState({authorId:this.props.currentUserId});
  }

  handleTyping(){
    console.log(this.state);
    return (e)=>{
      this.setState({body:e.currentTarget.value});
    };
  }


  render(){
    return (
      <section className="input-bar-container">
        <textarea
          className="input-bar"
          onChange={this.handleTyping()}
          placeholder="Type your message here...">
        </textarea>
        <a className="send-button" onClick={this.props.createMessage(this.state)}>
          <i className="fas fa-paper-plane"></i>
        </a>
      </section>
    );
  }
}

export default InputBar;
