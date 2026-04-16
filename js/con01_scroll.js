$(window).on("scroll", function () {
  let scroll = $(this).scrollTop();
  let w = $(window).width();
  let con01 = $(".con01").offset().top - 700;
  let con02 = $(".con02").offset().top - 700;
  
  if (w <= 768) { 
    $(window).on("scroll", function () {
     $(".con01 ul.bg-wrap li").css({
            transform: "translateY(0)",
          });
           });
  } else {
    // con01 스크롤했을때 홀수번째(even) 이미지는 올라오고, 짝수번째(nth-child(even)) 이미지는 내려가게함
      
      $(window).on("scroll", function () {
        let scroll = $(window).scrollTop();
        if (scroll >= con01 && scroll < con02) {
          $(".con01 ul.bg-wrap li:nth-child(2n)").css({
            transform: "translateY(-5rem)",            
          });
             $(".con01 ul.bg-wrap li:nth-child(odd)").css({
            transform: "translateY(0)",
          });
        } else {
             $(".con01 ul.bg-wrap li:nth-child(odd)").css({
            transform: "translateY(-5rem)",
          });
          $(".con01 ul.bg-wrap li:nth-child(2n)").css({
            transform: "translateY(0)",
          });
         
        }
      });
   
  }
});