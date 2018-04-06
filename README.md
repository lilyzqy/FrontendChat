## Preview
![alt text](https://github.com/lilyzqy/FrontendChat/blob/master/docs/ScreenShot.png)

## Highlights
* Real-time typing indicator
* Only show selective timestamp for better UX
* For consecutive messages from the same user, the profile picture is only shown once for better UX
* Sidebar showing all current conversations with preview
* Auto scrolling in input bar when typing multiple rows
* Send messages with either 'ENTER' or 'Send' button

```
//timestamp will only show when first message
if(lastMessage=== undefined
  //or when different day than last message
|| messageDate !== lastTimeStampDate
//or when today's message and more than 2 mins from last message
||(messageDate === today && messageTime >= (parseInt(lastTimeStampTime) + 2))){
  if(messageDate === today){
    return moment(time).format("HH:mm");
    //yesterday's message
  }else if((today - messageDate) === 1){
    let clock = moment(time).format("HH:mm");
    return "Yesterday " + clock;
    //same year message
  }else if(today.slice(0,5) === messageDate.slice(0,5)){
    return moment(time).format("MMM DD, HH:mm");
    //different year message
  }else{
    return moment(time).format("YYYY-MM-DD, HH:mm");
  }
}else{
  return "";
}
```

## Set up instruction
* Download this repo
* CLI:
  * `npm install ` --install node modules
  * `open index.html` -- open on browser
  * `npm run webpack` -- it's `webpack --watch` under the hood, any changes made in file will be up to date when refresh the browser

## Next steps
* handle group conversations
* handle different type of message(image, voice, Emoji, attachment)
* search bar
