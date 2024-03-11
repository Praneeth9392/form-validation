
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const phn_number = document.getElementById('phn_number');
const pwsd = document.getElementById('pswd');
const cn_pwsd = document.getElementById('cn_pswd');
const form = document.getElementById('form');



const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const phn_error = document.getElementById('phn_error');
const pass_error = document.getElementById('pass_error');
const cn_pass_error = document.getElementById('cn_pass_error');

form.addEventListener('submit', (e) =>
{
   var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;   //email condition

   if(fname.value.length < 5)
   {
    e.preventDefault();
    name_error.innerHTML = 'Name must be at least 5 characters long';   //IF FULLNAME IS EMPTY AND CLICKED IS SHOW THE ERROR
   }
   else{
    name_error.innerHTML = '';
   }
   

   if(!email.value.match(email_check))
   {
    e.preventDefault();
    email_error.innerHTML = 'Enter a valid email address'; //IF EMAIL  IS  INVALID AND IF WE CLICKED ITS SHOW THE ERROR
   }
   else{
    email_error.innerHTML = '';
   }


   
   if(phn_number.value.length !== 10  || phn_number.value === '123456789')
   {
    e.preventDefault();
    phn_error.innerHTML = 'Enter a valid 10-digit phone number';   //IF FULLNAME IS EMPTY AND CLICKED IS SHOW THE ERROR
   }
   else{
    phn_error.innerHTML = '';
   }



   if(pwsd.value.length  < 8 || pwsd.value === 'password' || pwsd.value === fname.value)
   {
    e.preventDefault();
    pass_error.innerHTML = "Password must be at least 8 characters long and not be 'password' or your name";   //IF FULLNAME IS EMPTY AND CLICKED IS SHOW THE ERROR
   }
   else{
    pass_error.innerHTML = '';
   }
   

   if(cn_pwsd.value !== pwsd.value)
   {
    e.preventDefault();
    cn_pass_error.innerHTML = 'Passwords do not match';   
   }
   else{
    cn_pass_error.innerHTML = '';
   }


})

