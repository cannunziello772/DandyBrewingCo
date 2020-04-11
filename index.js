const date = document.querySelector("#date");
function getDate() {
    const currentYear = new Date().getFullYear();
    date.textContent = currentYear;
  }
getDate();

mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction(); myFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user scrolls the page, execute myFunction
//window.onscroll = function() {myFunction()};

//Get th main div
const main = document.getElementById("main");

const header = document.getElementById("header");

// Get the offset position of the main
let sticky = main.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset < sticky) {
    header.style.display = "none";
  } else {
    header.style.display = "block";
  }
}
