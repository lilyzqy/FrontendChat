const INITIALSTATE={
  1:{
    title:"Rob",
    conversationPic:"",
    menberIds:[2]
  },
  2:{
    title:"Laura",
    conversationPic:"",
    memberId:[1]
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
