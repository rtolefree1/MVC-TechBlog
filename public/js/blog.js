let createBlogBtn = document.querySelector('#CreateBlog');
let blogform = document.createElement("FORM");
let blogLabel = document.createElement("LABEL");
let blogInput = document.createElement("INPUT");
let blogTextArea = document.createElement("textarea");
let linebreak = document.createElement("br");
let submitTextButton = document.createElement("Button");



createBlogBtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log('Creating blog for user!')

    let title = document.createElement("h2");
    title.textContent = "New Blog Title";
    document.body.appendChild(title);
    document.body.appendChild(linebreak);
    
    document.body.appendChild(linebreak); 
    document.body.appendChild(linebreak);

    blogform.setAttribute("id", "blogform");
    document.body.appendChild(blogform);
    
    let header = document.createElement("h2");
    header.textContent = "New Blog";
    document.body.appendChild(header);
    document.body.appendChild(linebreak);

    blogLabel.setAttribute("for", "title");
    blogLabel.setAttribute("id", "blogTitle");
    blogLabel.setAttribute("value", "Title of New Blog");
    document.getElementById("blogform").appendChild(blogLabel)

   
    blogInput.setAttribute("type", "text");

    // blogInput.setAttribute("value", "Title of New Blog");
    document.getElementById("blogform").appendChild(blogInput)


    blogTextArea.setAttribute("id", "textarea");
    blogTextArea.setAttribute("rows", "4");
    blogTextArea.setAttribute("cols", "75");
    document.body.appendChild(blogTextArea);
    
   
    document.body.appendChild(linebreak);

    //let submitTextButton = document.createElement("Button");
    submitTextButton.setAttribute("id", "textButton");
    submitTextButton.textContent="SubmitBlog";
    document.body.appendChild(submitTextButton);
    

    //---------------------------------------------------
    //------------- Submiting new blog ------------------

    submitTextButton.addEventListener("click", async function() {
    if (blogTextArea && blogInput) {

        console.log('blog TextArea: ', blogTextArea.value);
        console.log('blog Input: ', blogInput.value);

        // const password = document.querySelector('#password-login').value.trim();
        // body: JSON.stringify({ blogComments: bTAreaValue, nameOfBlog: bInputValue }),
        let bTAreaValue = blogTextArea.value.trim();
        let bInputValue = blogInput.value.trim();// document.querySelector('#blogTitle').value//blogLabel.value;

        const response = await fetch('/api/users/blog', {
          method: 'POST',
          body: JSON.stringify({ blogComments: bTAreaValue, nameOfBlog: bInputValue }),
          headers: { 'Content-Type': 'application/json' },
        });
        
        console.log('Response: ', response)

        if (response.ok) {
          document.location.replace('/blog');
        } else {
          alert('Failed to update Blog!');
        }
       }else{
        alert('Please provide both blog title and content!');
       }
    
    blogInput.type="text";
});
})
