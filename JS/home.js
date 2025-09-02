
let userName=document.getElementById("name");

window.addEventListener("load", function(){
displayUseName();

})

function displayUseName(){
    if(localStorage.getItem("userName")!=null){
        userName.innerHTML=`${localStorage.getItem("userName")}`
    }else{
        window.innerHTML=""
    
    }}
