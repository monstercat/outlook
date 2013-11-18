
$(document).ready(function () {
  var sideBar_open = false;

  $('.gift-form').submit(function (e) {
      console.log('submit form');
      e.preventDefault()
      var data = { test:"test" };

      $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/gift',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(data),
            success: function(data) {
              alert('success');
            }, error: function (data) {
              return;
            }
      });
  });

  $(".gift").click(function(){
    if(!sideBar_open){
      $(".side-bar").animate({height:"80%"})
    }else{
      $(".side-bar").animate({height:"0"})
    }
    sideBar_open = !sideBar_open;
  });
});

