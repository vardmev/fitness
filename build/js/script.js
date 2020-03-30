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

//предотвращаем прыжки вверх страницы при клике по ссылке-заглушке
document.querySelectorAll('a[href="#"]').forEach(function(el) {
  el.addEventListener("click", function(event) {
    event.preventDefault();
    return false;
  });
});

var mySwiper = new Swiper ('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})