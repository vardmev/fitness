'use strict';

var tabLinks = document.querySelectorAll(".tab-link"),
    tabContents = document.querySelectorAll(".tab-content") ;

if(tabLinks) {
  tabLinks.forEach(function(link) {
    link.addEventListener('click', function () {

      var id = link.getAttribute("id").slice(-1);
      var content = document.querySelector("#tab-content-"+id);

      document.querySelector(".tab-link.active").classList.remove("active");
      link.classList.add("active");

      document.querySelector(".tab-content.active").classList.remove("active");
      content.classList.add("active");
    });
  });
}