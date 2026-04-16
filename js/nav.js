$(function () {
  $("header nav ul li.icon i").on("click", function () {
    $("header nav").hide();
  });
  $("header .end .box a.menu").on("click", function () {
    $("header nav").show();
  });
});
