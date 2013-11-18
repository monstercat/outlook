$(document).ready(function () {
  var sideBar_open = false;
  var frm = $('#gift-form');

  frm.submit(function (e) {
      console.log('submit form');    
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
    if(sideBar_open){
      $(".side-bar").animate({right:"-400px"})
    }else{
      $(".side-bar").animate({right:"0px"})
    }
    sideBar_open = !sideBar_open;
  });
});

