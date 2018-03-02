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

  _getTimeStamp(){
    let timeStamp = moment().format("MM-DD-YYYY HH:mm");
    this.setState({createdAt: timeStamp});
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
      this._getTimeStamp();
      this.props.createMessage(this.state);
      e.currentTarget.parentElement.reset();
    };
  }

//eventlistener function
  _waitForEnter(e){
    if(e.code === "Enter"){
      let body = this.state.body;
      //remove the return note from the message body
      this.setState({body:body.slice(0, body.length - 1)});
      this._getTimeStamp();
      this.props.createMessage(this.state);
      this.myInput.parentElement.reset();
    }
  }

//listen to key when input bar is focused
  onFocus(){
    return()=>{
      //this.myInput is the ref of textarea,
      //using ref instead of id is for differentiate the reuseable components
      this.myInput.addEventListener("keyup",this._waitForEnter);
    };
  }

//remove listener to avoid fire both input bars
  onBlur(){
    return()=>{
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
