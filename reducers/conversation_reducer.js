//in real chat app, conversations would only contain what belongs to currentUser
const INITIALSTATE={
  1:{
    title:"Rob",
    conversationPic:"",
    memberIds:[2]
  },
  2:{
    title:"Laura",
    conversationPic:"",
    memberIds:[1]
  }
};

const conversationReducer = ( state=INITIALSTATE, action) =>{
  //keep the original state untouchable
  Object.freeze(state);
  switch (action.type){
    default:
      return state;
  }
};

export default conversationReducer;
