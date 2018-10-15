//引入css,less
require("../../css/lib/reset.css");
require("../../css/common/font.less");
require("../../css/common/global.less");
require("../../css/common/main.less");
require("../../css/common/grid.less");
require("../../css/common/header.less");
require("../../css/common/footer.less");
require("../../css/page/index.less");
import Swiper from "swiper";
require("swiper/dist/idangerous.swiper.css");
//引入 js
require("../components/jquery-confirm/jquery-confirm.js");
require("../components/jquery-confirm/jquery-confirm.less");
require("../../js/components/header.js");
// require("../../js/components/cookie.js");
require("jquery-countdown");

var queryString = require("query-string");
// import queryString from 'query-string'
// alert(navigator.userAgent);

$(document).ready(function() {

  const parsed = queryString.parse(location.search);
  var from = parsed.from;
  // #tokenregister
  //#tokenwhitelist

  if (from) {
    $("#tokenregister").attr(
      "href",
      "https://token.lambda.im/index.html?from=" + from + "#/register"
    );
    $("#tokenwhitelist").attr(
      "href",
      "https://token.lambda.im/index.html?from=" + from + "#/register"
    );
    $("#contribute").attr(
      "href",
      "https://token.lambda.im/index.html?from=" + from + "#/register"
    );
  }

  $(".trigger").click(function() {
    // $.alert('ICO is coming soon！')
    // console.log('asdasd')
  });

  $(".line").css("width", window.screen.width);

  $(".principle .item").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    var _index = $(this).index() - 1;
    $(".principle .tab-contents div")
      .eq(_index)
      .addClass("contents-active")
      .siblings()
      .removeClass("contents-active");
  });

  var mySwiper = new Swiper(".swiper-container", {
    pagination: ".swiper-pagination",
    paginationClickable: true,
    paginationElementClass: "my-bullet",
    paginationActiveClass: "my-bullet-active",
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    mode: "horizontal",
    loop: true
  });


  let lang = (navigator.language || navigator.browserLanguage).toLowerCase();
  alert(lang);
  if (lang !== "zh-cn") {
    // $(".in").css("display", "none");
    // $(".out").css("display", "block");
  }

  $(".ru").click(function() {
    $(".img").attr(
      "src",
      "https://cdn.wpml.org/wp-content/plugins/sitepress-multilingual-cms/res/flags/ru.png?x53954"
    );
    $(".title").html("Russia");
  });
  $(".en").click(function() {
    $(".img").attr(
      "src",
      "https://www.coinex8.com/static/media/02_02.language_english.67e1a74c.svg"
    );
    $(".title").html("English");
  });
});
