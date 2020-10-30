

// Return to top button function
homebutton = document.getElementById("homeBtn");


window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    homebutton.style.display = "block";
  } else {
    homebutton.style.display = "none";
  }
}

