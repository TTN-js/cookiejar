console.log($);

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
    console.log('firing');
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie;

    console.log(ca);

    // for(var i = 0; i < ca.length; i++) {
    //     var c = ca[i];
    //     while (c.charAt(0) == ' ') {
    //         c = c.substring(1);
    //     }
    //     if (c.indexOf(name) == 0) {
    //         return c.substring(name.length, c.length);
    //     }
    // }
    // return "";
}

function checkCookie() {
    var user_input = getCookie("user_input");
    if (user_input != "") {
        $("#content").val(user_input);
    } 
} 


$(document).ready(function() {

    checkCookie();

});


function settingNewCookie()
{
    // console.log('setting new cookie');

    var cvalue = $("#content").val();
    console.log(cvalue);
    var cname = "user_input";
    setCookie(cname, cvalue);
}

setInterval(settingNewCookie, 500);