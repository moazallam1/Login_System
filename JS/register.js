//!All Variables

let registerForm=document.getElementById("registerForm");

let signNameInput=document.getElementById("signName");
let signEmailInput=document.getElementById("signEmail");
let signPasswordInput=document.getElementById("signPassword");

let emailAlert=document.getElementById("emailAlert");
let nameAlert=document.getElementById("nameAlert");
let passwordAlert=document.getElementById("passwordAlert");
let existAlert=document.getElementById("existAlert");
let successAlert=document.getElementById("successAlert");


let nameRegex=/^[a-zA-Z]+$/;
let emailRegex=/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[a-zA-Z\d#?!@$%^&*-]{8,20}$/;

let usersList=[];
//!All Variables

if(localStorage.getItem("users")!==null){
usersList=JSON.parse(localStorage.getItem("users"));
}

registerForm.addEventListener("submit",function(e) {
e.preventDefault();

if (checkIfAllInputsAreValid()){
    addUser(); 
    successAlert.classList.replace( "d-none", "d-block")   
    clearForm();

    setTimeout(function() {
        window.location.href = '../index.html';
    }, 2000);

}
})

signNameInput.addEventListener("input", function() {
    validateAllInputs(nameRegex, signNameInput, nameAlert);
});
signEmailInput.addEventListener("input", function() {
    validateAllInputs(emailRegex, signEmailInput, emailAlert);
});
signPasswordInput.addEventListener("input", function() {
    validateAllInputs(passwordRegex, signPasswordInput, passwordAlert);
});




function clearForm() {
    signNameInput.value = ""; // مسح حقل الاسم
    signEmailInput.value = ""; // مسح حقل البريد الإلكتروني
    signPasswordInput.value = ""; // مسح حقل كلمة المرور

    // لا تقم بإخفاء successAlert هنا
    nameAlert.classList.replace("d-block", "d-none");
    emailAlert.classList.replace("d-block", "d-none");
    passwordAlert.classList.replace("d-block", "d-none");
    existAlert.classList.replace("d-block", "d-none");
}

function addUser(){
    let newUser ={
        name: signNameInput.value,
        email: signEmailInput.value,
        password: signPasswordInput.value
    }
if (ifExsit(newUser)==true) {
    existAlert.classList.replace("d-none","d-block");
    successAlert.classList.replace("d-block","d-none");
}else{
   

usersList.push(newUser);
localStorage.setItem("users", JSON.stringify(usersList));


existAlert.classList.replace("d-block","d-none");
successAlert.classList.replace("d-none","d-block");
setTimeout(function(){

    window.location.href = '../index.html';

},2000)

}


}
function ifExsit(newUser){

for (let i = 0; i < usersList.length; i++) {

    if (usersList[i].email.toLowerCase() == newUser.email.toLowerCase()) {
        existAlert.classList.replace( "d-none", "d-block")
       return true; 
    }else{
        return false;
    }


}
    
}


function validateAllInputs(regex,element,alertMsg ) {
    let pattern=regex;

    if (pattern.test(element.value)) {
        alertMsg.classList.replace( "d-block", "d-none")
        return true;  // true means the input is valid and will be sent to the server or stored in the database.
    }else{
        alertMsg.classList.replace( "d-none", "d-block")
        return false;  // false means the input is not valid and will not be sent to the server or stored in the database.
    }

}

function checkIfAllInputsAreValid() {
    existAlert.classList.replace("d-block", "d-none");

    return (
        validateAllInputs(nameRegex, signNameInput, nameAlert) &&
        validateAllInputs(emailRegex, signEmailInput, emailAlert) &&
        validateAllInputs(passwordRegex, signPasswordInput, passwordAlert)
    );
}
