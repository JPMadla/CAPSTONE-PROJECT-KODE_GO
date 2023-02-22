
const LOGIN_API = "../../api/login.php?";


function login() {
   let loginCredentials = {

    username : $("#username").val(),
    password :  $("#password").val(),
   }

$.ajax( {
    "url" : LOGIN_API + "?auth=" + JSON.stringify(loginCredentials),
    "success" : function(response) {
        alert(response)
    }
})
}