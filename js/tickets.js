/**
 * Created by yuxiao on 16/3/31.
 */
<!-- accessToken相关操作-->
function saveAccessToken(accessToken) {
    $.cookie("accessToken", accessToken);
}

function clearAccessToken() {
    $.cookie("accessToken", { expires: -1 });
}

function getAccessToken() {
   return  $.cookie("accessToken");
}
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}
