
chrome.browserAction.onClicked.addListener(function(tab) {	
  chrome.tabs.executeScript(null,{
   file: "model.js"
  });
});
//chrome.browserAction.onClicked.addListener(runss);
