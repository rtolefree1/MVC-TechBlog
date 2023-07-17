// const loginFormHandler = async (event) => {

//     event.preventDefault();
//     // Getting login data from login form
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();

//     console.log('email:', email);
//     console.log('password:', password);
//    // const name = 'abc'

//     if(email && password){
//         console.log('************Checking email and password************');
//         // console.log('password:', password);
//         const response = await fetch('/api/users/login', {
//             method: 'POST',
//             body: JSON.stringify({ email, password}),
//             headers: {'Content-Type':'application/json'},
//         });

//         if(response.ok){
//             document.location.replace('/home');
//            // document.location.replace('/profile');
//         }else{
//             alert(response.statusText);
//         }
//      }
// };

// // loginEl.addEventListener('submit', loginFormHandler);
// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

// const signupFormHandler = async (event) => {
//     event.preventDefault();
  
//     const name = document.querySelector('#name-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     console.log("name:", name);
//     console.log("email:", email);
//     console.log("password:", password);
  
//     if (name && email && password) {
//       const response = await fetch('/api/users/register', {
//         method: 'POST',
//         body: JSON.stringify({ name, email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to sign up.');
//       }
//      }
//   };
   
//   document
//     .querySelector('.signup-form')
//     .addEventListener('click', signupFormHandler);

loginButtonEl = document.querySelector('#login-tab2');
registerButtonEl = document.querySelector('#register-tab2');

loginButtonEl.addEventListener('click', function(){
    console.log("############ In page.js, login ############")
    document.location.replace('/login');
})

registerButtonEl.addEventListener('click', function(){
    console.log("############ In page.js, register ############")
    document.location.replace('/register');
})