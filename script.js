console.log($);

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user_input = getCookie("user_input");
    if (user_input != "") {
        $("#content").val(user_input);
    } 
} 


$(document).ready(function() {

    $('#content').change(function(){
        var cname = "user_input"
        var cvalue = $("#content").val();
        setCookie(cname, cvalue);
        console.log('new cookie set');
    });

    function InputChangeListener()
    {
        previousVal = $('#content').val();

        if($('#content').val()!= previousVal){
            $('#content').change();  
        }
    }

    setInterval(InputChangeListener, 500);

});

