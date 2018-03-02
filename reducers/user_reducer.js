const INITIALSTATE ={
  1:{
    username:"Laura",
    profilePic:"http://res.cloudinary.com/dreamhousesf/image/upload/v1519947536/224084626-girl-profile-picture_2_v5ypsg.jpg",
  },
  2:{
    username:"Rob",
    profilePic:"http://res.cloudinary.com/dreamhousesf/image/upload/v1519947436/IMG_9757_2_rimvrw.jpg",
  }
};

const userReducer = (state = INITIALSTATE, action) =>{
  //keep the original state untouchable
  Object.freeze(state);
  switch (action.type){
    default:
      return state;
  }
};

export default userReducer;
