function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'abc@gmail.com' && password === '12345678') {
      alert('Login successful!');
    }  else {
      alert('Login unsuccessful!');
    }
  }

function sign(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var password2 = document.getElementById('password2').value;
  if(email==='abc@gmail.com' && password==='12345678' && password2==='12345678'){
    alert('Registered successful!');
  }else {
    alert('Registered unsuccessful!');
  }
}

const wrapper = document.querySelector('.wrapper');
const  signUpLink = document.querySelector('.signup-link');
const signInLink = document.querySelector('.signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('signin');
    wrapper.classList.remove('signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('signup');
    wrapper.classList.remove('signin');
});