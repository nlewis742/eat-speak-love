const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  const contentInput = document.querySelector('#project-desc');
  const content = contentInput.value.trim().replace(/\n/g, '<br>');

  // if statement to check if the user has entered a name and content for the post before submitting the form to the server to be saved in the database and displayed on the profile page 
  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, content, }),
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
  console.log("title, content");
};


const contentInput = document.querySelector('#project-desc');
contentInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
   contentInput.value += '\n';
  }
});


// delete button handler 

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);


  const posts = document.querySelectorAll('.post-content');
posts.forEach((post) => {
  post.innerHTML = post.innerHTML.replace(/\n/g, '<br>');
});