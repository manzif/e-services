document.getElementById('signup-form').addEventListener('submit', signup);

function signup(e) {
  e.preventDefault();

  let fullname = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let error_msg = document.getElementById('error-msg2');
  let success_msg = document.getElementById('success-msg2');

  fetch('https://e-services-manzi.herokuapp.com/api/users', {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      fullname: fullname,
      email: email
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.status !== 201) {
        error_msg.style.display = 'block';
        error_msg.innerHTML = data.message;
      } else {
        error_msg.style.display = 'none';
        success_msg.style.display = 'block';
        success_msg.innerHTML = data.message;
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
      }
    });
}