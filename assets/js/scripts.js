var userName = _.template( "<%- m.id %>" , {variable: 'm'});

var newInfo= userName({id: "The Octocat"});

$(".user-actual-name").text(newInfo);
