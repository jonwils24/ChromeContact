chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    var parser = document.createElement('a');
    parser.href = tablink
    var domainName = parser.hostname

    var arr = domainName.split(".")
    if (arr[1] === ("com") | ("io") | ("org") | ("edu") | ("co") | ("us")) {
     var companyName = arr[0]
    }else{
     var companyName = arr[1]
    };
     $.ajax({
       url: 'http://api.crunchbase.com/v/2/organization/'+companyName+'?user_key=bd342b3149f49c9b71a146761bbe0604',
       data: {
          format: 'json'
       },
       error: function() {
          $('#popup').html('<p>An error has occurred</p>');
       },
       dataType: 'json',
       success: function(response) {
         $(".image").append("<image src=http://www.crunchbase.com/organization/" + companyName + "/primary-image/raw>"),
         response.data.relationships.founders.items.forEach(function(obj) { $("#popup").append("<li>"+obj.name+"</li>")}),
         $("#summary").append(response.data.properties.short_description),
         response.data.relationships.founders.items.forEach(function(obj){var nameArr = obj.name.split(" ");var email = nameArr[0][0] + nameArr[1]+"@"+companyName+".com"; $('#email').append("<li>"+email.toLowerCase()+"</li>") } )
       },
       type: 'GET'
    });
});
