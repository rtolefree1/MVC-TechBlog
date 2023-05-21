
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log("name:", name);
    console.log("email:", email);
    console.log("password:", password);
  
    if (name && email && password) {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
     }
  };
   
  document
    .querySelector('.signup-form')
    .addEventListener('click', signupFormHandler);