chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var activeTab = tabs[0];
  var tabId = activeTab.id;
  var tabUrl = activeTab.url;
  var tabName = activeTab.title;

  var regex = /www\.(.*)\.com/g;

  var domain = regex.exec(tabUrl);
  
  
  
  alert(domain[1]);
});


alert($);
