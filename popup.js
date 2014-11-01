chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var activeTab = tabs[0];
  var tabId = activeTab.id;
  var tabUrl = activeTab.url;
  var tabName = activeTab.title;

  alert(tabUrl);
});