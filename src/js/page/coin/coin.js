require("../../../css/page/coin.less");
require("../../../css/common/useful.less");
import Clipboard from "clipboard";
require("../../components/jquery-confirm/jquery-confirm.js");
require("../../components/jquery-confirm/jquery-confirm.less");
$(document).ready(function() {
  var clipboard = new Clipboard("#btnCopy");
  clipboard.on("success", function(e) {
    $.alert("内容已复制到剪贴板！");
    e.clearSelection();
  });
});
