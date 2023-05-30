// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 300) {
//       document.getElementById("navbar_top").classList.add("fixed-top");
//       navbar_height = document.querySelector(".navbar").offsetHeight;
//       document.body.style.paddingTop = navbar_height + "px";
//       document.getElementById("navbar_top").style.backgroundColor = "white";
//       document.getElementById("navbar_top").style.zIndex = "1";
//       document.getElementById("navbar_top").style.border = "none";
//     } else {
//       document.getElementById("navbar_top").classList.remove("fixed-top");
//       document.body.style.paddingTop = "0";
//       document.getElementById("navbar_top").style.backgroundColor = "none";
//       document.getElementById("navbar_top").style.zIndex = "1";
//       document.getElementById("navbar_top").style.border = "1px solid #afafaf";
//     }
//   });
// });
$(document).ready(function () {
  $("#navbar_top .navbar-nav .nav-link").on("click", function () {
    $("#navbar_top .navbar-nav").find("li.active").removeClass("active");
    $(this).parent("li").addClass("active");
  });
});

$(function () {
  $("#datepicker-in").datepicker();
  $("#datepicker-out").datepicker();
});

// filter
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace("active1", "");
    this.className += " active";
  });
}
// testinomial

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    navigationText: true,
    autoPlay: true,
    responsive: true,
    items: 3,
    slideSpeed: 10,
    responsive: {
      0: {
        items: 1,
      },

      576: {
        items: 1,
      },
      768: {
        items: 3,
      },
    },
  });
});
