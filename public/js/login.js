// const loginEl = document.querySelector('.login-form');

const loginFormHandler = async (event) => {

    event.preventDefault();
    // Getting login data from login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log('email:', email);
    console.log('password:', password);
   // const name = 'abc'

    if(email && password){
        console.log('************Checking email and password************');
        // console.log('password:', password);
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: {'Content-Type':'application/json'},
        });

        if(response.ok){
            document.location.replace('/home');
           // document.location.replace('/profile');
        }else{
            alert(response.statusText);
        }
     }
};

// loginEl.addEventListener('submit', loginFormHandler);
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);