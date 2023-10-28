document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
form.addEventListener('submit', (e) =>{
    if(!validateInputs()){
        e.preventDefault();
    }
})


function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true
    if(usernameVal===''){
        success = false;
        SetError(username,'username is required')
    }
    else{
        SetSuccess(username)
    }  
    if(emailVal===''){
        success=false;
        SetError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        SetError(email,'please enter a valid email')
    }
    else{
        SetSuccess(email)
    }
    if (passwordVal ===''){
        success = false;
        SetError(password,'password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        SetError(password,'password must be atleast 8 characters long ')
    }
    else{
        SetSuccess(password)
    }
    if(cpasswordVal ===''){
        success  =false;
        SetError(cpassword,'confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        SetError(cpassword,'password does not match')
    }
    else{
        SetSuccess(cpassword)
    }
    return success;
}

//element - password,msg- pwd is reqd 
function SetError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function SetSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
  };
});


