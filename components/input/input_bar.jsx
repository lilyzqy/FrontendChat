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
    // console.log(this.state);
    return (e)=>{
      this.setState({body:e.currentTarget.value});
    };
  }

  handleSubmit(){
    return()=>{
      this.props.createMessage(this.state);
      document.getElementById("form").reset();
    };
  }

  render(){
    return (
      <form className="input-bar-container" id="form" >
        <textarea
          className="input-bar"
          onChange={this.handleTyping()}
          placeholder="Type your message here...">
        </textarea>
        <a className="send-button" onClick={this.handleSubmit()}>
          <i className="fas fa-paper-plane"></i>
        </a>
      </form>
    );
  }
}

export default InputBar;
