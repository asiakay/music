/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffsett;
window.onscroll = function(){
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos){
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}