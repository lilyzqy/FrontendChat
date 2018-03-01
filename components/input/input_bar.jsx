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

  handleSubmit(){
    return(e)=>{
      this.props.createMessage(this.state);
      console.log(e);
    };
  }

  render(){
    return (
      <form className="input-bar-container" onSubmit={this.handleSubmit()}>
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
