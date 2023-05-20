profileButtonEl = document.querySelector("#profile-tab2");
homeButtonEl = document.querySelector('#home-tab2');
loginButtonEl = document.querySelector('#login-tab2');
logoutButtonEl = document.querySelector('#logout-tab2')


//dashBoardButtonEl = document.querySelector('#logout-tab2')

// const loginFormHandler = async (event) => ({
//     document.location.replace('/home');
// })
//document.location.replace('/home');
profileButtonEl.addEventListener('click', function(){
    document.location.replace('/Dashboard');
});

homeButtonEl.addEventListener('click', function(){
    document.location.replace('/home');
});

loginButtonEl.addEventListener('click', function(){
    document.location.replace('/login');
})

logoutButtonEl.addEventListener('click', function(){
    document.location.replace('/api/users/logout');
})

