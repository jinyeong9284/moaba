$('#sec7 .btn_con button').on('click',function(){
    console.log($(this).val());
    $('#sec7 .btn_con button').removeClass('on');
    $(this).addClass('on');
    $('#sec7 .tab_con').removeClass('on');
    $(`#sec7 .${$(this).val()}`).addClass('on');
});

const sec5Swiper = new Swiper ('.sec5_swiper',{
    loop:true,
    centred:true,
    navigation: {
        nextEl: "#sec5 .swiper-button-next",
        prevEl: "#sec5 .swiper-button-prev",
      },
})

// const sec8Swiper = new Swiper('.sec8_swiper',{
//     centred:true,
//     slidesPerView :2,
//     slidesPerGroup :1,
//     spaceBetween: 20,
//     loop : true,
//     auto : {
//         speed: 200
//     },
//     navigation: {
//         nextEl: ".swiper_btn.next_btn",
//         prevEl: ".swiper_btn.prev_btn",
//     },
// });

let swiper;

        function initializeSwiper() {
            if (swiper) {
                swiper.destroy(true, true);  // Destroy existing Swiper instance
            }
            // Create a new Swiper instance
            swiper = new Swiper(".sec8_swiper", {
                slidesPerView: window.innerWidth <= 1180 ? 1: 2,
                centred:true,
                slidesPerGroup :1,
                spaceBetween: 20,
                loop : true,
                auto : {
                    speed: 200
                },
                navigation: {
                    nextEl: ".swiper_btn.next_btn",
                    prevEl: ".swiper_btn.prev_btn",
                },
            });
        }

        // Initialize Swiper on page load
        initializeSwiper();

        lastWidth = window.innerWidth;
        $(window).resize(function () {
          if (window.innerWidth != lastWidth) {
            location.reload();
            scrollTrigger.refresh();
          }
          lastWidth = window.innerWidth;
        });
        


//플로팅배너
$('.flpop_a').click(function(){
        $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
        return false;
    });