$(document).ready(function (){
    $("#view-top").click(function (){
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 500);
    });
});

$(document).ready(function (){
    $("#view-services").click(function (){
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 500);
    });
});

$(document).ready(function (){
    $("#view-about-us").click(function (){
        $('html, body').animate({
            scrollTop: $("#about-us").offset().top
        }, 500);
    });
});

$(document).ready(function (){
    $("#view-experiences").click(function (){
        $('html, body').animate({
            scrollTop: $("#experiences").offset().top
        }, 500);
    });
});

$(document).ready(function (){
    $("#view-footer").click(function (){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 500);
    });
});

//alert message for social media icons
function alertMessage(){
    alert("Sorry, icons aren't working because the company doesn't exist. :)")
}

//toggle method
$(document).ready(function(){
    $("#expbutton").click(function(){
      $("#more-exp").toggle(800);
    });
  });

function changeButtonName(){
    var btn = document.getElementById("expbutton");

    if (btn.value == "Show more") {
        btn.value = "Show less";
        btn.innerHTML = "Show less";
    }
    else {
        btn.value = "Show more";
        btn.innerHTML = "Show more";
    }
}