//!All Variables
let loginForm=document.getElementById('loginForm');
let loginEmailInput=document.getElementById('loginEmail');
let loginPasswordInput=document.getElementById('loginPassword');

let loginSuccessAlert=document.getElementById('successAlert');
let loginFailedAlert=document.getElementById('failedAlert');
let allUsers=[];
//!All Variables


if (localStorage.getItem('users') !==null) {
    allUsers=JSON.parse(localStorage.getItem('users'));
}
loginForm.addEventListener('submit',function(e){
e.preventDefault();

login();



});

function login(){

    let userData={

        email:loginEmailInput.value,
        password:loginPasswordInput.value

    }

if (isLoginValid(userData)==true){
    loginSuccessAlert.classList.replace('d-none','d-block');
    loginFailedAlert.classList.replace('d-block','d-none');

    setTimeout(function(){
        window.location.href="../home.html"
    },1000)

}else{
    loginSuccessAlert.classList.replace('d-block','d-none');
    loginFailedAlert.classList.replace('d-none','d-block');


}

}



function isLoginValid(userData) {
    for (let i = 0; i < allUsers.length; i++) {
        // إذا كان هناك تطابق كامل (الإيميل وكلمة المرور)
        if (allUsers[i].email.toLowerCase() === userData.email.toLowerCase() &&
            allUsers[i].password.toLowerCase() === userData.password.toLowerCase()) {

            // تخزين اسم المستخدم في localStorage
            localStorage.setItem('userName', allUsers[i].name);
            return true; // تم العثور على تطابق، وبالتالي نرجع true
        }
    }
    // إذا لم نجد تطابق بعد التحقق من جميع المستخدمين
    return false; // نرجع false
}
