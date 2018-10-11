require("../../../css/lib/reset.css");
require("../../../css/common/font.less");
require("../../../css/common/global.less");
require("../../../css/common/main.less");
require("../../../css/common/grid.less");
require("../../../css/common/header.less");
require("../../../css/common/footer.less");
require("../../../css/page/index.less");
require("../../../css/page/coin.less");
require("../../../css/common/useful.less");
//引入 js
require("../../components/jquery-confirm/jquery-confirm.js");
require("../../components/jquery-confirm/jquery-confirm.less");
require("../../../js/components/header.js");
import Clipboard from "clipboard";
$(document).ready(function() {

  var clipboard = new Clipboard("#btnCopy");
  clipboard.on("success", function(e) {
    $.alert("Content has copied");
    e.clearSelection();
  }); 
});
