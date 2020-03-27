var slideIndex = 0;
var x;
carousel();

function carousel() {
  var i;
  x = document.getElementsByClassName("box");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }

  slideIndex++;

  if(slideIndex > x.length){ slideIndex = 1}

  x[slideIndex - 1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}

function plusSlide(n){
  slideIndex += n;
  if(slideIndex > x.length){ slideIndex = 1}
  else if(slideIndex < 1){ slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }

  x[slideIndex - 1].style.display = "block"
}
