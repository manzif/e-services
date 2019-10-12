document.getElementById('post1').addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let title = document.getElementById('title').value;
  let company = document.getElementById('company').value;
  let email = document.getElementById('email').value;
  let description = document.getElementById('description').value;
  let image = document.forms['posts']['image'].files[0];
  let error_msg = document.getElementById('error-msg');
  let success_msg = document.getElementById('success-msg');

  const formData = new FormData();
  formData.append('title', title);
  formData.append('company', company);
  formData.append('email', email);
  formData.append('description', description);
  formData.append('image', image);

  fetch('https://e-services-manzi.herokuapp.com/api/services', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*'
    },
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      if (data.status !== 201) {
        error_msg.style.display = 'block';
        error_msg.innerHTML = data.message;
      }
      else {
        success_msg.style.display = 'block';
        success_msg.innerHTML = data.message;
      }
      console.log(data);
    });
}
