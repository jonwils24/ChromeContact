chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var activeTab = tabs[0];
  var tabId = activeTab.id;
  var tabUrl = activeTab.url;
  var tabName = activeTab.title;
  
  var regex = /www\.(.*)\.com/g;
  
  var domain = regex.exec(tabUrl);
  
  // $.getJSON("http://api.crunchbase.com/v/2/organization/apple?user_key=bd342b3149f49c9b71a146761bbe0604", function(data){
//          //CALLBACK
//          alert(data); //LIST DATAs
//          //Do Something over here
//   });
//
  // $.ajax({
//     url: "http://api.crunchbase.com/v/2/organization/apple?user_key=bd342b3149f49c9b71a146761bbe0604",
//     type: "GET",
//     datatype: "jsonp",
//     success: function (widgetData) {
//       alert(widgetData);
//     },
//     error: function (request, status_text, error) {
//       alert("hello");
//     }
//   });
  
  alert(domain[1]);
});


