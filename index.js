
$(document).ready(function () {
  var sideBar_open = false;
  var frm = $('#gift-form');
  var ids = ['#form-name','#form-email','#form-itunesNo','#form-friend','#form-friendEmail'];

  var validate_form = function(){
    for(var i =0; i<ids.length; i++){
      var ele = $(ids[i]);
      var v = ele.val();
      if(!v){ 
        $('.err-message').text('Please fill the empty field!');
        $('.err-section').show();
        return false;
      }
    };
    return true;
  };

  frm.submit(function (e) {
    var submit = validate_form();
    e.preventDefault();

    if(submit){  
      $('.submit-gift').attr('disabled','disabled');
      var form_data = frm.serialize();   

      $.ajax({
         type: 'POST',
         url: 'http://localhost:4593/outlook/gift',
         data: form_data,
         success: function(data) {
           if(data.err){
             $('.submit-gift').attr('disabled', false);
             $('.err-message').text(data.err);
             $('.err-section').show();
           }else{
             frm.find("input[type=text], textarea").val("");

             $(".side-bar").animate({height:"0"},'fast',function(){
               $('.submit-gift').attr('disabled', false);
               sideBar_open = false;
               $('.err-section').hide()
             });
           }
         }, error: function (data) {
           return;
         }
      });
    };

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
