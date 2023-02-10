var nameerror = document.getElementById('nameerror')
var emailerror = document.getElementById("emailerror")
var phoneerror = document.getElementById('phoneerror')
var addresserror = document.getElementById('addresserror')
var messageerror = document.getElementById('messageerror') 
var submiterror = document.getElementById('submiterror') 

function validatename(){
   var name = document.getElementById("username").value;
   if(name.length == 0){
    nameerror.innerHTML = 'Name is required';
    return false;
   }
   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameerror.innerHTML = 'Write full name';
    return false;
   }
   nameerror.innerHTML = '<i class="fa-solid fa-circle-check scrii"></i>';
   return true;
}

function validatephone(){
    var phone = document.getElementById("phoneno").value;
    if(phone.length == 0){
        phoneerror.innerHTML = 'phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneerror.innerHTML = 'phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML = 'only digits please';
        return false;
    }
    phoneerror.innerHTML = '<i class="fa-solid fa-circle-check scrii"></i>';
    return true;
}

function validateemail(){
    var email = document.getElementById('email').value;
    if(email.length == 0){
        emailerror.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML = 'Email invalid.'
        return false;
    }
    emailerror.innerHTML = '<i class="fa-solid fa-circle-check scrii"></i>';
    return true;
}
function validateaddress(){
    var address = document.getElementById('address').value;
    if(address.length == 0){
        addresserror.innerHTML = 'Address is required';
        return false;
    }
    if(address.length > 70){
        addresserror.innerHTML = 'Address should be less than 70 characters';
        return false;
    }
    addresserror.innerHTML = '<i class="fa-solid fa-circle-check scrii"></i>';
    return true;
}
function validatemessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required-message.length;
    if(left > 0){
        messageerror.innerHTML = left + 'More characters required';
        return false;
    }
    messageerror.innerHTML = '<i class="fa-solid fa-circle-check scrii"></i>';
    return true;
}
function validateform(){
    if(!validatename() || !validatephone() || !validateemail() || !validateaddress() || !validatemessage()){
        submiterror.style = 'block';
        submiterror.innerHTML = 'Please fill all the fields to submit.';
        setTimeout(function(){submiterror.style.display = 'none';}, 3000);
        return false;
    }
}
