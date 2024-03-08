
// section2_swiper
// var swiper = new Swiper(".mySwiper", {
//     direction: "vertical",
//     slidesPerView: 3,
//     spaceBetween: 30,
//     autoplay: {     //자동슬라이드 (false-비활성화)
//           delay: 1200, // 시간 설정
//           disableOnInteraction: false, // false-스와이프 후 자동 재생
//         },

//         loop : true,   // 슬라이드 반복 여부

//         loopAdditionalSlides : 1,
//   });


var swiper = new Swiper(".mySwiper", {
    // direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
                loop : true,   // 슬라이드 반복 여부
    },
    speed: 5000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper1", {
    // direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
                loop : true,   // 슬라이드 반복 여부
    },
    speed: 5000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
