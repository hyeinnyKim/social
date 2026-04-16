$(function () {
  let w = $(window).width();
  // console.log(w);
  if (w < 768) {
    let w = $(window).width();
    $(function () {
      let page1 = $(".con01").offset().top;
      let page2 = $(".con02").offset().top;
      base = -300;
      $(window).on("scroll", function () {
        let scroll = $(window).scrollTop();
        if (scroll >= page1 + base && scroll < page2 + base) {
          $(".con01 ul.bg-wrap li").css({
            transform: "translateY(0)",
          });
        } else {
          $(".con01 ul.bg-wrap li").css({
            transform: "translateY(0)",
          });
        }
      });
    });
  } else {
    // con01 스크롤했을때 홀수번째(even) 이미지는 올라오고, 짝수번째(nth-child(even)) 이미지는 내려가게함
    $(function () {
      let w = $(window).width();
      let page1 = $(".con01").offset().top;
      let page2 = $(".con02").offset().top;
      base = -300;
      $(window).on("scroll", function () {
        let scroll = $(window).scrollTop();
        if (scroll >= page1 + base && scroll < page2 + base) {
          $(".con01 ul.bg-wrap li:nth-child(2n)").css({
            transform: "translateY(-5rem)",
          });
        } else {
          $(".con01 ul.bg-wrap li:nth-child(2n)").css({
            transform: "translateY(0)",
          });
        }
      });
    });
  }
});
