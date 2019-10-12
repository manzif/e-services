document.getElementById('signin-form').addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let email = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let error_msg = document.getElementById('error-msg3');

  fetch('https://e-services-manzi.herokuapp.com/api/users/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.status === 200) {
        window.location.replace('admin.html');
      } else {
        error_msg.style.display = 'block';
        error_msg.innerHTML = data.error;
      }
    });
}
