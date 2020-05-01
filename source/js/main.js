'use strict';

var tabLinks = document.querySelectorAll(".tab-link"),
    tabContents = document.querySelectorAll(".tab-content") ;

if(tabLinks) {
  tabLinks.forEach(function(link) {
    link.addEventListener('click', function () {

      var id = link.getAttribute("id").slice(-1);
      var content = document.querySelector("#tab-content-"+id);

      document.querySelector(".tab-link.active-tab").classList.remove("active-tab");
      link.classList.add("active-tab");

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

// слайдер для тренеров
var mySwiper = new Swiper ('.swiper-container.coaches-swiper', {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// слайдер для отзывов
var mySwiper = new Swiper ('.swiper-container.reviews-swiper', {
  spaceBetween: 80,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// jQuery плагин для маски телефона
$(function(){
  $("input[type=tel]").mask("+7(999) 999-9999");
});