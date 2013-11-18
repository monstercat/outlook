console.log('loade js file');

$(document).ready(function () {
  $('.gift-form').submit(function (e) {
      console.log('submit form');    
      e.preventDefault();
      var data = { test:"test" };
      $.ajax({
            type: 'POST', 
            data: data,
            url: 'http://localhost:8000/gift',
            success: function(data) {
              alert('success');
            }, error: function (data) {
              alert('failed');
            }
      });
  });

  $(".friend-email").click(function(){
    console.log('show click');
    $(".side-bar").css("right","-500px");
  });
});

