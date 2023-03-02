var registerArr = [];
registerArr = JSON.parse(localStorage.getItem('data'));


var signEmail = document.getElementById("signEmail");
var signPassword = document.getElementById("signPassword");

document.getElementById("loginBtn").addEventListener('click',function(){
    if (signPassword.value == '' || signEmail.value == '') {
        document.getElementById("msg").innerHTML = `<p class="mt-4 text-danger text-center">All inputs required</p>`

    } else {
        check();
    }

})

// function login() {
//     if (signPassword.value == '' || signEmail.value == '') {
//         document.getElementById("msg").innerHTML = `<p class="mt-4 text-danger text-center">All inputs required</p>`

//     } else {
//         check();
//     }
// }

function check() {
    for (var i = 0; i < registerArr.length; i++) {
        if (signEmail.value == registerArr[i].email && signPassword.value == registerArr[i].password) {
            document.getElementById("msg").innerHTML = `<p class="mt-4 text-success text-center">success</p>`

        }
    }
}