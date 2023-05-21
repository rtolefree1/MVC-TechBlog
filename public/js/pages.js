profileButtonEl = document.querySelector("#profile-tab2");
homeButtonEl = document.querySelector('#home-tab2');
loginButtonEl = document.querySelector('#login-tab2');
logoutButtonEl = document.querySelector('#logout-tab2')
registerButtonEl = document.querySelector('#register-tab2');

//dashBoardButtonEl = document.querySelector('#logout-tab2')

// const loginFormHandler = async (event) => ({
//     document.location.replace('/home');
// })
//document.location.replace('/home');
profileButtonEl.addEventListener('click', function(){
    console.log("############ In page.js, dashboard ############")
    document.location.replace('/Dashboard');
});

homeButtonEl.addEventListener('click', function(){
    console.log("############ In page.js, home ############")
    document.location.replace('/home');
});

loginButtonEl.addEventListener('click', function(){
    console.log("############ In page.js, login ############")
    document.location.replace('/login');
})

registerButtonEl.addEventListener('click', function(){
    console.log("############ In page.js, register ############")
    document.location.replace('/register');
})

// logoutButtonEl.addEventListener('click', function(){
//     console.log("############ In page.js, logout ############")
//     document.location.replace('/api/users/logout');
// })

const logout = async () => {
    console.log("############ In pages.js, logout ############")
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout-tab2').addEventListener('click', logout);