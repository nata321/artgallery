let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) 
        {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
        setTimeout(showSlides, 4000);
    }
    
$(document).ready(function() {

    $("#form").submit(function(){
      $.ajax ({
            url: "https://formspree.io/https.ka@gmail.com",
            method: "POST",
            dataType: "json",
            data:$(this).serialize()
      }).done(function(){
            $('form')[0].reset();
            $('#thanks').show();
      })
        return false;
        });
    });

   