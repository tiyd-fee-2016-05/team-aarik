




$(document).ready(function() {

$(".repositories").on("click",function(){
  //e.preventDefault();
  var x=0;
  console.log(x);
  $(".content-list").css("display","none");
  $(".repositories").addClass("repoAcitve");
  $(".repoTab").addClass("repoTabShow");
  $(".repoTab").css("display","inline-block");
  $(".contributions").addClass("contributionsInactive");
  $(".contributionsInactive").removeClass("contributions");
});



$(".public-activity").click(function(){
  console.log("HIIIII");
  $(".content-list").css("display", "none");
  $(".repoTab").css("display", "none");
});

$(".contributions").click(function(){
  console.log("Hey");
  $(".content-list").css("display", "block")
  $(".repoTab").removeClass("repoTabShow");
  $(".repoTab").css("display", "none")
});


});


$(function () {

  var ghLogin;

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
    for( var index = 0; index < 5; index++ ) {
      show2( 'gh-repo-template', repo[index] );
      console.log( repo[index] );
    }
  }

  // This works!!!!!
  // function showRepos( repo ) {
  //   show2( 'gh-repo-template', repo[0] );
  //   console.log( repo[0] );
  // }

  function show2(template, model) {
    var fn = _.template($('#' + template).html(), { variable: 'm' });
    $('.content-repo').html(fn(model));
    // $('.user-info').html(fn(model));
  }

});

// $(function () {
//
//   var ghLogin;
//   var json = $.getJSON("https://api.github.com/users/" + ghLogin + "/repos")
//   $('.searchbar').submit(function (e) {
//     e.preventDefault();
//     $(".repoTab").removeClass("repoTabShow");
//     $(".repoTab").css("display", "none");
//     // e.stopPropagation();
//     console.log("Submit")
//     //console.log(json.responseJSON.name)
//     ghLogin = $('input[name="gh-login"]').val();
//     $.getJSON('https://api.github.com/users/' + ghLogin)
//       //.done(showUser, getJsonRepo);
//       .done(showUser)
//
//
//   }); // end submit
//
//   // function getJsonRepo() {
//   //   $.getJSON( "https://api.github.com/users/" + ghLogin + "/repos" )
//   //     .done(showRepos);
//   // }
//
//   function showUser(user) {
//     show('gh-user-template', user);
//   }
//
//   function showError(req, status, err) {
//     err = err || {};
//     err.message = err.message || status;
//     console.log(err);
//     show('gh-error-template', { message: err });
//   }
//
//   function show(template, model) {
//     var fn = _.template($('#' + template).html(), { variable: 'm' });
//     $('.user-info').html(fn(model)).sort(); //thought this might work. yields no different results.
//     // $('.user-info').html(fn(model));       but it also doesn't break it so I'm leaving it in.
//   }
//   var contentList = $(".content-list");
//
//   $.ajax({ //Felt like this would work. It appends things...not exactly what I wanted though...hmm.
//     type: "GET",
//     url: "https://api.github.com/users/" + ghLogin + "/repos", //inspired by https://www.youtube.com/watch?v=fEYx8dQr_cQ
//     success: function(repos){
//       $.each(repos, function(i, repo){
//         $(".content-list").append('<li>' +repo.name+'</li>');
//         console.log(repos);
//       });
//     }
//
//   });
//
//
//   //
//   // function showRepos( repo ) {
//   // for( var index = 0; index < 4; index++ ) {
//   //
//   //
//   //     show2( 'gh-repo-template', repo[index] );
//
//     //  show2( 'gh-repo-template', repo[1] );
//
//       //$(".content-repo").append(repo) //cant figure out how to append .name returns
//                                         // undefined. I am very lost.
//       // console.log( repo[index] );
//       // console.log(repo.sort())//this returns object 5 times. Not sure why, repo[index returns awesome things...]
//       // console.log([index].sort())
//       //$(".content-repo").text("<%- m.name%>"[index]) //trying to change repo names
//
//   //
//   //   }
//   // }
//
//   //This works!!!!!
//   // function showRepos( repo ) {
//   //   show2( 'gh-repo-template', repo[0] );
//   //   console.log( repo[0] );
//   // }
//
//   // function show2(template, model ) {
//   //   var fn = _.template($('#' + template).html(), { variable: 'm' });
//   //   for( var index = 0; index < 5; index++ ) //I really want this to do something but it doesn't
//   //   $('.content-repo').html(fn(model));
//   //   //$(".content-repo").text(json.responseJSON.name[index]); //thought this might work too....it dont
//   //
//   //   //$('.content-repo').html(fn.sort());
//   //   //$(".helloWorld").html()
//   //   console.log(model)
//   //   // $('.user-info').html(fn(model));
//   // }
//   //computer why won't you do what I would like you to do. You almost work...
//   //like a puppy who's only been kind of trained. Ugh. Computer. Ugh.
//
// });
//
//
//
//
//
//
// //
// // var userName = _.template( "<%- m.name %>", {variable: "m"} );
// // var userLogin = _.template( "<%- m.login %>", {variable: "m"} );
// // console.log(userName);
// // $(function () {
// //
// //
// // // var newInfo= userName({id: "The Octocat"});
// //
// // // $(".user-actual-name").text(newInfo);
// // // $(".searchbar").on("submit", function(e) {
// // //   e.preventDefault();
// // var json = $.getJSON("https://api.github.com/users/octocat")
// //   .done(functionlog);
// // //});
// //
// //     // $(".user-actual-name").text(json.responseJSON.name);
// //     // // $userName.HTML(json.responseJSON.name);
// //     // // console.log(json.responseJSON.name);
// //     // $(".user-login-name").text(json.responseJSON.login);
// //     // $(".employer").text(json.responseJSON.company);
// //     //
// //     // $.ajax({
// //     //   dataType: "JSON",
// //     //   url: 'https://api.github.com/users/octocat'
// //     //   })
// //     //   .done(function (data) {
// //     //       console.log(data.name);
// //     // });
// //     //var actualName = $(".user-actual-name");
// //
// //     function functionlog(name){
// //        show("actualName-template", name);
// //     }
// //
// //     function show(template, model) {
// //       var fn = _.template($("#" + template).html(), {variable:"m"});
// //       $(".user-actual-name").html(fn(name));
// //     }
// //
// //   });
//
//
// // });
