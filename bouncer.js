/*
Log that we received the message.
Then display a notification. The notification contains the URL,
which we read from the message.
*/


/*
Assign `notify()` as a listener to messages from the content script.
*/

chrome.runtime.onMessage.addListener(function notify(message) {
  console.log("background script received message");
  setTimeout(function(){
  	chrome.notifications.create({
    "type": "basic",
    "title": "WolflineHelper",
    "message": message.waitingfor+" is arriving, Remainder!!",
    onclick: function(data){
		tabs.open("http://ncsu.tranloc.com");
    }
  });
  }, message.time*60*1000);
});