// Purpose: This file contains the logout function for the logout button on the homepage and the dashboard page. The logout function is called when the user clicks the logout button. The logout function sends a POST request to the logout route in the userRoutes.js file. The logout function then redirects the user to the homepage.
const logout = async () => {
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

document.querySelector('#logout').addEventListener('click', logout);
