import React from 'react';
import moment from 'moment';

class InputBar extends React.Component {
  constructor(){
    super();
    this.state = {
      body:""
    };
    this._waitForEnter = this._waitForEnter.bind(this);
  }

  componentDidMount(){
    this.setState({authorId:this.props.currentUserId});
  }

//handle updating typing indicator(also inside onBlur function)
  componentDidUpdate(){
    if(this.state.body.length !== 0
    && !this.props.typingIndicator
    && document.activeElement === this.myInput){
      this.toggleTypingIndicator(true);
    }else if(this.state.body.length === 0 && this.props.typingIndicator){
      this.toggleTypingIndicator(false);
    }
  }

  toggleTypingIndicator(boolean){
    this.props.updateTypingIndicator({[this.props.currentUserId]:boolean});
  }

//update the state (for message object) when typing in the input bar
  handleTyping(){
    return (e)=>{
      this.setState({body:e.currentTarget.value});
    };
  }

//send message when click on the send icon
  handleSubmit(){
    return(e)=>{
      //avoid empty message
      if(this.state.body.length !== 0){
        this.setState({createdAt:moment().format()});
        this.props.createMessage(this.state);
        e.currentTarget.parentElement.reset();
        this.setState({body:""});
      }
    };
  }

//eventlistener function, send message when "Enter" key is pressed
  _waitForEnter(e){
    if(e.code === "Enter"){
      let body = this.state.body;
      let returnNote = body.slice(body.length - 1);
      let removedReturnNoteBody = body.slice(0, body.length - 1);
      //avoid empty message
      if(body.length !== 1 && removedReturnNoteBody !== returnNote){
        //remove the return note from the message body
        this.setState({body:removedReturnNoteBody});
        this.setState({createdAt:moment().format()});
        this.props.createMessage(this.state);
        this.myInput.parentElement.reset();
        this.setState({body:""});
      }
    }
  }

//listen to key press when input bar is focused
  onFocus(){
    return()=>{
      //listen to every keypress
      this.myInput.addEventListener("keyup",this._waitForEnter);
    };
  }

//remove listener to avoid fire both input bar components
  onBlur(){
    return()=>{
      if(this.props.typingIndicator){
        this.toggleTypingIndicator(false);
      }
      this.myInput.removeEventListener("keyup",this._waitForEnter);
    };
  }

  render(){
    return (
      <form className="input-bar-container">
        <textarea
          className="input-bar"
          ref={textarea => {
            this.myInput = textarea;
          }}
          onFocus={this.onFocus()}
          onBlur={this.onBlur()}
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
