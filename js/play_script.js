


$(function(){
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    pagination: {
          el: ".swiper-pagination",
          clickable: true,//아래점 클릭이동 가능
      },
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});