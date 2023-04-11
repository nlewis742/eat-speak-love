const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  // const dateCreated = document.querySelector('#project-funding').value.trim();
  const contentInput = document.querySelector('#project-desc');
  const content = contentInput.value.trim().replace(/\n/g, '<br>');

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
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