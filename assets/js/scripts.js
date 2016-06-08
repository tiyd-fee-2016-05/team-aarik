




$(document).ready(function() {

$(".repositories").on("click",function(){
  //e.preventDefault();
  var x=0;
  console.log(x);
  $(".content-list").css("display","none");
  $(".repositories").addClass("repoAcitve");
  $(".repoTab").addClass("repoTabShow");
  $(".contributions").addClass("contributionsInactive");
  $(".contributionsInactive").removeClass("contributions");
});



$(".public-activity").click(function(){
  console.log("HIIIII");
  $(".content-list").css("display", "none");
  $(".repoTab").css("display", "none")

});
});


$(function () {

  var ghLogin;
  var json = $.getJSON("https://api.github.com/users/" + ghLogin + "/repos")
  $('.searchbar').submit(function (e) {
    e.preventDefault();
    // e.stopPropagation();
    console.log("Submit")

    ghLogin = $('input[name="gh-login"]').val();
    $.getJSON('https://api.github.com/users/' + ghLogin)
      .done(showUser, getJsonRepo);


  }); // end submit

  function getJsonRepo() {
    $.getJSON( "https://api.github.com/users/" + ghLogin + "/repos" )
      .done(showRepos);
  }

  function showUser(user) {
    show('gh-user-template', user);
  }

  function showError(req, status, err) {
    err = err || {};
    err.message = err.message || status;
    console.log(err);
    show('gh-error-template', { message: err });
  }

  function show(template, model) {
    var fn = _.template($('#' + template).html(), { variable: 'm' });
    $('.user-info').html(fn(model));
    // $('.user-info').html(fn(model));
  }

  function showRepos( repo ) {
  for( var index = 0; index < 4; index++ ) {

      show2( 'gh-repo-template', repo[index] );

    //  show2( 'gh-repo-template', repo[1] );


      //console.log( repo[index] );
      //$(".content-repo").text("<%- m.name%>"[index]) //trying to change repo names


    }
  }

  //This works!!!!!
  // function showRepos( repo ) {
  //   show2( 'gh-repo-template', repo[0] );
  //   console.log( repo[0] );
  // }

  function show2(template, model ) {
    var fn = _.template($('#' + template).html(), { variable: 'm' });
    for( var index = 0; index < 4; index++ ) //I really want this to do something but it doesn't
    $('.content-repo').html(fn(model));
    //$(".content-repo").text(json.responseJSON.name[index]); //thought this might work too....it dont

    //$('.content-repo').html(fn.sort());
    //$(".helloWorld").html()
    console.log(model)
    // $('.user-info').html(fn(model));
  }
  //computer why won't you do what I would like you to do. You almost work...
  //like a puppy who's only been kind of trained. Ugh. Computer. Ugh.

});






//
// var userName = _.template( "<%- m.name %>", {variable: "m"} );
// var userLogin = _.template( "<%- m.login %>", {variable: "m"} );
// console.log(userName);
// $(function () {
//
//
// // var newInfo= userName({id: "The Octocat"});
//
// // $(".user-actual-name").text(newInfo);
// // $(".searchbar").on("submit", function(e) {
// //   e.preventDefault();
// var json = $.getJSON("https://api.github.com/users/octocat")
//   .done(functionlog);
// //});
//
//     // $(".user-actual-name").text(json.responseJSON.name);
//     // // $userName.HTML(json.responseJSON.name);
//     // // console.log(json.responseJSON.name);
//     // $(".user-login-name").text(json.responseJSON.login);
//     // $(".employer").text(json.responseJSON.company);
//     //
//     // $.ajax({
//     //   dataType: "JSON",
//     //   url: 'https://api.github.com/users/octocat'
//     //   })
//     //   .done(function (data) {
//     //       console.log(data.name);
//     // });
//     //var actualName = $(".user-actual-name");
//
//     function functionlog(name){
//        show("actualName-template", name);
//     }
//
//     function show(template, model) {
//       var fn = _.template($("#" + template).html(), {variable:"m"});
//       $(".user-actual-name").html(fn(name));
//     }
//
//   });


// });
