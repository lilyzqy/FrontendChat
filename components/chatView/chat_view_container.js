import { connect } from "react-redux";

import ChatView from "./chat_view";

const mapSTPs = ({entities}, ownProps) =>{
  return {
    conversation: entities.conversations[ownProps.conversationId]
  };
};

export default connect(mapSTPs,undefined)(ChatView);
