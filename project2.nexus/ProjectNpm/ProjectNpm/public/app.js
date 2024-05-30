const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  document.title = "Sign Up";
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  document.title = "Sign in";
});

let sub = document.getElementById("submit");
sub.addEventListener('click', (e) => {
  let password = document.getElementById('password').value;
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let pwMessage = document.getElementById('pwmessage');

  if(!name || !email || !password)
  {
    pwMessage.innerText = 'All fields must be entered.';
    e.preventDefault();
  }
  else
  {
    if(password.length < 8)
    {
      pwMessage.innerText = 'Password must be at least 8 characters long.';
      e.preventDefault();
    }
    else
    {
      pwMessage.innerText = '';
    }
  }

  
})
