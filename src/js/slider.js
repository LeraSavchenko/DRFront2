var slideIndex = 0;

window.addEventListener("load", function showSlides() {
    var i;
    var slides1 = document.getElementsByClassName("slide1");
    var dots = document.getElementsByClassName("listing-dots__item");
	
    for (i = 0; i < slides1.length; i++) {
       	slides1[i].style.display = "none";
    }
    slideIndex++;
	
    if (slideIndex> slides1.length) {slideIndex = 1} 
	
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
	
    slides1[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
});