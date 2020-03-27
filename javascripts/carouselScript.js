var slideIndex = 0;
var x = document.getElementsByClassName("box");
carousel();

function carousel() {
  var i;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }
    
  slideIndex++;

  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 5000); 
}

function plusSlide(n){
    x[slideIndex].style.display = "none";
    slideIndex+=n;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block"; 
}