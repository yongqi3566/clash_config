/*
 *
 *

*******************************
[rewrite_local]
# > jh
^https:\/\/res\.yunbusiness\.ccb\.com\/jhshCouponWebConfig\.js.*$ url script-response-body https://raw.githubusercontent.com/yongqi3566/clash_config/main/qx/rewrite/script/shjh.js
[mitm]
hostname = res.yunbusiness.ccb.com
*
*
*/

console.info("获取js")
var body = $response.body;
console.info("body")

$done({ body });