
window.addEventListener("DOMContentLoaded", function () {
  let signUpBtn = document.querySelector("#sign-up-btn");

  signUpBtn.addEventListener("click", function () {
   
    location.href = "sign-in.html";
  });

  let gotoPrdouctPageSignUp = document.querySelector(".signInBtn");
  gotoPrdouctPageSignUp.addEventListener('click', function (){
    location.href = "product.html";
  })
});
