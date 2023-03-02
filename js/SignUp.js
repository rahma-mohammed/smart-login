var signName = document.getElementById("signName");
var signEmail = document.getElementById("signEmail");
var signPassword = document.getElementById("signPassword");

var registerArr =[];

if (localStorage.getItem('data')==!null){
    registerArr = JSON.parse(localStorage.getItem('data'))


}else{
    registerArr = [];
}

function makeRegister() {
    if (signName.value == '' || signPassword.value == '' || signEmail.value == '') {
        document.getElementById("msg").innerHTML = `<p class="mt-4 text-danger text-center">All inputs required</p>`

    } else {
        var required = {
            name: signName.value,
            email: signEmail.value,
            password: signPassword.value

        }
        registerArr.push(required)
        localStorage.setItem('data',JSON.stringify(required));
        document.getElementById("msg").innerHTML = `<p class="mt-4 text-danger text-center d-none">All inputs required</p>`
        location.href="../pages/SignIn.html";
    }
}
