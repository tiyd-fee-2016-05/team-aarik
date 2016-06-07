$(function () {
  $('.searchbar').submit(function (e) {
    e.preventDefault();
    console.log("Submit")

    var ghLogin = $('input[name="gh-login"]').val();
    $.getJSON('https://api.github.com/users/' + ghLogin)
      .done(showUser);
    // $.getJSON('https://api.github.com/users/'+ghLogin+'/repos')
    //    .done(showUser2)
    //    .fail(showError);
  });

  function showUser(user) {
    show('gh-user-template', user);
  }
  function showUser2(user) {
    show('gh-user-template2', user);
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
    $('.user-info2').html(fn(model));
  }

});




$(function () {
  $('.searchbar').submit(function (e) {
    e.preventDefault();
    console.log("Submit")

    var ghLogin = $('input[name="gh-login"]').val();
    // $.getJSON('https://api.github.com/users/' + ghLogin)
    //   .done(showUser);
    $.getJSON('https://api.github.com/users/'+ghLogin+'/repos')
       .done(showUser2)
       .fail(showError);
  });

  // function showUser(user) {
  //   show('gh-user-template', user);
  // }
  function showUser2(user) {
    console.log("Please")
    show2('gh-user-template2', user);
  }

  function showError(req, status, err) {
    err = err || {};
    err.message = err.message || status;
    console.log(err);
    show2('gh-error-template2', { message: err });
  }

  function show2(template, model) {
    console.log("prettyPlease")
    var fn2 = _.template($('#' + template).html(), { variable: 'm' });
    // $('.user-info').html(fn(model));
    $('.user-info2').html(fn2(model));
  }

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
