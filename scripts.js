
/* SCRIPTS.JS */

function changePic() {
    document.getElementById("profilePic").src = "images/code2.jpg";
  }
  
  function normalPic() {
    document.getElementById("profilePic").src = "images/code.jpg";
  }


$(".go-to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

