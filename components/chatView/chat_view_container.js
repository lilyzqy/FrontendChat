import { connect } from "react-redux";

import ChatView from "./chat_view";

const mapSTPs = ({entities}, ownProps) =>{
  console.log(ownProps);
  return {
    conversation: entities
  };
};

export default connect(mapSTPs,undefined)(ChatView);
