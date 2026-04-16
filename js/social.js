$(function win() {
  let w = $(window).width();
  console.log(w);
  if (w <= 500) {
    // $("#visual .agency .item").on("mouseenter",function(){
    //   $(this).stop().animate({"width":"35%"});
    //    $(this).find(".txt").stop().animate({"opacity":"1"})
    // })
    // $("#visual .agency .item").on("mouseleave",function(){
    //   $(this).stop().animate({"flex":"0 0 calc(100% / 4)"});
    //     $(this).find(".txt").stop().animate({"opacity":"0"});
    // })
    // 작동안됨!
  } else if (w <= 768) {
    // 메뉴bar를 눌렀을때 nav가 오른쪽으로 보이고, 창닫기아이콘을 눌렀을때 nav가 안보이도록함
    // $("header nav ul li.icon i").on("click", function () {
    //   $("header nav").hide();
    // });
    // $("header .end .box a.menu").on("click", function () {
    //   $("header nav").show();
    // });
    // 작동안됨!

    $(window).on("scroll", function () {
      // header 스크롤효과
      let sc = $(this).scrollTop();
      if (sc >= 200) {
        $("header .logo .scroll").css({ opacity: "0" });
        $("header .not").css({ opacity: "1" });
        $("header nav").css({ display: "none" });
        $("header")
          .stop()
          .animate({ width: "50%", "border-radius": "50px", margin: "1rem 0" });
        $("header").css({ "background-color": "rgba(255,255,255,0.5)" });
        $("header .end .top li").css({ color: "#fff" });
      } else {
        $("header .not").css({ opacity: "0" });
        $("header .logo .scroll").css({ opacity: "1" });
        $("header nav").css({ display: "none" });
        $("header")
          .stop()
          .animate({ width: "100%", "border-radius": "0", margin: "0" });
        $("header").css({ "background-color": "#fff", border: "none" });
        $("header .end .top li").css({ color: "#151515" });
      }
    });
  } else {
  }
  $(window).on("scroll", function () {
    // header 스크롤효과
    let sc = $(this).scrollTop();
    if (sc >= 200) {
      $("header .not").css({ opacity: "0" });
      $("header nav").css({ display: "none" });
      $("header .logo .scroll").css({ opacity: "1" });
      $("header")
        .stop()
        .animate({ width: "50%", "border-radius": "50px", margin: "1rem 0" });
      $("header").css({
        "background-color": "rgba(255,255,255,0.7)",
        border: "1px solid #34742b",
      });
      $("header .end .top li").css({ color: "#34742b" });
      $("header .end .top .join").css({
        "border-left": "1px solid #34742b",
        "border-right": "1px solid #34742b",
      });
      $("header .end .bottom .box").css({
        "background-color": "#34742b",
      });
    } else {
      $("header .logo .scroll").css({ opacity: "0" });
      $("header .not").css({ opacity: "1" });
      $("header nav").css({ display: "block" });
      $("header")
        .stop()
        .animate({ width: "100%", "border-radius": "0", margin: "0" });
      $("header").css({
        "background-color": "#fff",
        border: "none",
      });
      $("header .end .top li").css({ color: "#151515" });
      $("header .end .top .join").css({
        "border-left": "1px solid #151515",
        "border-right": "1px solid #151515",
      });
      $("header .end .bottom .box").css({
        "background-color": "#e67422",
      });
    }

    // 비주얼 배경이미지 넘어가는 효과
    let i = 2;
    let total = $("#visual .bg-wrap li").length;
    console.log(total);
    $("#visual .arrow-wrap .prev").on("click", function () {
      if (i == 0) {
        i = 2;
      } else {
        i--;
      }
      $("#visual .bg-wrap li").fadeOut();
      $("#visual .bg-wrap li").eq(i).fadeIn();
    });

    $("#visual .arrow-wrap .next").on("click", function () {
      if (i == 2) {
        i = 0;
      } else {
        i++;
      }
      $("#visual .bg-wrap li").fadeOut();
      $("#visual .bg-wrap li").eq(i).fadeIn();
    });
    $(function () {
      let i = 0;
      let total = $("#visual .bg-wrap li").length;
      console.log(total);
      setInterval(function () {
        if (i == total - 1) {
          i = 0;
        } else {
          i++;
        }
        $("#visual .bg-wrap li").stop().fadeOut();
        $("#visual .bg-wrap li").eq(i).stop().fadeIn();
      }, 2000);
    });

    // 푸터 familysite 슬라이드펼치기효과
    $("footer .family-site .box").on("click", function () {
      $("footer .family-site .slide").stop().slideToggle();
    });

    // con02  support 호버효과
    $(function () {
      $(".con02 ul.support li").on("mouseenter", function () {
        $("con02 ul.support li").find("h3").css({ color: "#34742b" });
        $(this).find("h3").css({
          color: "#fff",
        });
        $(this).css({
          "background-color": "#34742b",
        });
        $(this).find(".green").css({ display: "none" });
        $(this).find(".white").css({ display: "block" });
      });
      $(".con02 ul.support li").on("mouseleave", function () {
        $(this).find("h3").css({ color: "#34742b" });
        $(this).css({
          "background-color": "#fff",
        });
        $(this).find(".white").css({ display: "none" });
        $(this).find(".green").css({ display: "block" });
      });
    });
    // con03 이미지 자동슬라이드 효과
    $(function () {
      let i = 0;
      let total = $(".con03 .bg-wrap li").length;
      console.log(total);

      setInterval(function () {
        if (i == total - 1) {
          i = 0;
        } else {
          i++;
        }
        $(".con03 .bg-wrap li").stop().fadeOut();
        $(".con03 .bg-wrap li").eq(i).stop().fadeIn();
      }, 2000);
    });

    // con01 스크롤했을때 홀수번째(even) 이미지는 올라오고, 짝수번째(nth-child(even)) 이미지는 내려가게함
    // $(function () {
    //   let page1 = $(".con01").offset().top;
    //   let page2 = $(".con02").offset().top;
    //   base = -300;

    //   $(window).on("scroll", function () {
    //     let scroll = $(window).scrollTop();
    //     if (scroll >= page1 + base && scroll < page2 + base) {
    //       $(".con01 ul.bg-wrap li:nth-child(2n)").css({
    //         transform: "translateY(-5rem)",
    //       });
    //     } else {
    //       $(".con01 ul.bg-wrap li:nth-child(2n)").css({
    //         transform: "translateY(0)",
    //       });
    //     }
    //   });
    // });
  });
});
