
$(document).ready(function () {
  var sideBar_open = false;
  var frm = $('#gift-form');

  frm.submit(function (e) {
      console.log('submit form');
      //$('.submit-gift').attr('disabled','disabled');
      e.preventDefault()

      $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/gift',
            data: frm.serialize(),
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

  $('#gift-btn').tooltip();
});
