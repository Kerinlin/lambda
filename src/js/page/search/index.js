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
// require("../../components/jquery-confirm/jquery-confirm.js");
// require("../../components/jquery-confirm/jquery-confirm.less");
import axios from 'axios';
$(document).ready(function() {

    // console.log(value);
    // console.log(val);
    $(".search-button").click(function() {
        let val = $(".search-key").val();
        // console.log(val);
        // if (val == '') {
        //     $.alert('Please enter your ETH addresses');
        // }
        axios.get('https://token.lambda.im/api/lambda/' + val)
            .then(res => {
                console.log(res);
                let data = res.data.lambda;
                $('.search-result-wrapper').html(`Your balance have ${data} LAMB`);
            })
            .catch(err => {
                console.log(err);
            })
    });
});