    

document.getElementById('submit-button').addEventListener('click' , function(){
    const gmail = document.getElementById('gmail-input').value;
    const password = document.getElementById('password-input').value;   
   
if ( gmail === 'suhad@gmail.com' && password === 's'){
    
    
    window.location.href = 'index.html';
}
else
{
    alert('you are not allowed.....');
}
});
    
// document.getElementById("loginBtn").addEventListener("click", function()  {
//     const inputEmail = document.getElementById("inputEmail").value;
//     const inputPassword = document.getElementById("inputPassword").value;
//     if (inputEmail === "bank@gmail.com" && inputPassword === "pribetbank") {
//       window.location.href = "index.html";
//     } else {
//       alert("Invalid password, please try again");
//     }
//   });