require("../../../css/lib/reset.css");
require("../../../css/common/font.less");
require("../../../css/common/global.less");
require("../../../css/common/main.less");
require("../../../css/common/grid.less");
require("../../../css/common/header.less");
require("../../../css/common/footer.less");
require("../../../css/page/index.less");
require("../../../css/page/search.less");
require("../../../css/common/useful.less");
require("../../../js/components/header.js");
require("../../components/jquery-confirm/jquery-confirm.js");
require("../../components/jquery-confirm/jquery-confirm.less");
// require("../../js/components/header.js");
// require("../../js/components/cookie.js");
require("jquery-countdown");
// require('vue-sweetalert2');
// import log from 'vue-sweetalert2'
import axios from 'axios';
$(document).ready(function() {

    $(".search-button").click(function() {
        let val = $(".search-key").val();
        // console.log(val);
        if (val == '') {
            // log.$swal('Please enter your ETH address');
            $.alert('Please enter your ETH address');
        }
        axios.get('https://token.lambda.im/api/lambda/' + val)
            .then(res => {
                // console.log(res);
                let data = res.data.lambda;
                $('.search-result-wrapper').html(`Your balance have ${data} LAMB`);
                $.alert(`Your balance have ${data} LAMB`);
            })
            .catch(err => {
                console.log(err);
                // $.alert('Network err')
            })
    });
});