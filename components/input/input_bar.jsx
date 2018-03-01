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
    return(e)=>{
      this.props.createMessage(this.state);
      console.log(e.currentTarget);
      e.currentTarget.parentElement.reset();
    };
  }

  returnSend(){
    return(e)=>{
      let that = this;
      if(e.code === "Enter"){
        console.log("?");
        that.handleSubmit();
      }
    };
  }

  waitForEnter(e){
    if(e.code === "Enter"){
      this.myInput.parentElement.reset();
    }
  }

  onFocus(){
    return()=>{
      console.log(this.myInput);
      this.myInput.addEventListener("keyup",this.waitForEnter.bind(this));
    };
  }

  onBlur(){
    return()=>{
      console.log(this.myInput);
      this.myInput.removeEventListener("keyup",this.waitForEnter.bind(this));
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
