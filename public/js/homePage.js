homeButtonEl = document.querySelector('#home-tab2');

homeButtonEl.addEventListener('click', function(){
    console.log("############ In page.js, home ############")
    document.location.replace('/home');
});