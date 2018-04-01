//in real chat app, conversations would only contain what belongs to currentUser
const INITIALSTATE={
  1:{
    title:"Rob",
    conversationPic:"http://res.cloudinary.com/dreamhousesf/image/upload/v1519947436/IMG_9757_2_rimvrw.jpg",
    memberIds:[2]
  },
  2:{
    title:"Laura",
    conversationPic:"http://res.cloudinary.com/dreamhousesf/image/upload/v1519947536/224084626-girl-profile-picture_2_v5ypsg.jpg",
    memberIds:[1]
  },
  3:{
    title:"Lily",
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
