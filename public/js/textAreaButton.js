const submitCommentsFormHandler = async (event) => {
    event.preventDefault();
  
    const blogComments = document.querySelector('#w3review').value.trim();

    console.log("name:", blogComments);

  
    if (blogComments) {
        console.log('Blog comment: ', blogComments)
      const response = await fetch('/api/users/comments', {
        method: 'POST',
        body: JSON.stringify({ blogComments }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log('response: ', response);
      if (response.ok) {
        document.location.replace('/blog');
      } else {
        alert('Failed to sign up.');
      }
     }
  };
   
  document
    .querySelector('#textAreaBtn')
    .addEventListener('click', submitCommentsFormHandler);