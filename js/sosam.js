// container -> con03

$(window).on("scroll", function () {
  let scroll = $(this).scrollTop();
  let w = $(window).width();
  let con03 = $(".con03").offset().top - 700;

  // console.log(con3);

  if (scroll >= con03) {
    txt3_ani_on();
    $("#container .con03 .left")
      .stop()
      .css({ transform: "translateX(0)", opacity: "1" });
  } else {
    txt3_ani_off();
    $("#container .con03 .left")
      .stop()
      .css({ transform: "translateX(-10rem)", opacity: "0" });
  }

  // con03 오른쪽 사진

  if (w < 840) {
    if (scroll >= con03 + 300) {
      $("#container .con03 .right ul li")
        .stop()
        .css({ transform: "translateY(0rem)", opacity: "1" });

      $("#container .con03 .right ul li:nth-child(1) .pic_wrap").stop().css({
        transform: "translate(0px, 0px)",
        "box-shadow": "10px 10px 0px #fbac18",
      });
    } else {
      $("#container .con03 .right ul li:nth-child(odd)")
        .stop()
        .css({ transform: "translateY(3rem)", opacity: "0" });

      $("#container .con03 .right ul li:nth-child(1) .pic_wrap").stop().css({
        transform: "translate(10px, 10px)",
        "box-shadow": "0px 0px 0px #fbac18",
      });
    }
  } else {
    if (scroll >= con03 + 300) {
      $("#container .con03 .right ul li:nth-child(odd)")
        .stop()
        .css({ transform: "translateY(0)", opacity: "1" });
      $("#container .con03 .right ul li:nth-child(even)")
        .stop()
        .css({ transform: "translateY(10rem)", opacity: "1" });

      $("#container .con03 .right ul li:nth-child(1) .pic_wrap").stop().css({
        transform: "translate(0px, 0px)",
        "box-shadow": "10px 10px 0px #fbac18",
      });
    } else {
      $("#container .con03 .right ul li:nth-child(odd)")
        .stop()
        .css({ transform: "translateY(10rem)", opacity: "0" });
      $("#container .con03 .right ul li:nth-child(even)")
        .stop()
        .css({ transform: "translateY(20rem)", opacity: "0" });

      $("#container .con03 .right ul li:nth-child(1) .pic_wrap").stop().css({
        transform: "translate(10px, 10px)",
        "box-shadow": "0px 0px 0px #fbac18",
      });
    }
  }
});
