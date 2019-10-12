var urlParams = new URLSearchParams(location.search);
var id = urlParams.get('id');
let service = document.getElementById('host');
fetch(`https://e-services-manzi.herokuapp.com/api/services/${id}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    service.innerHTML = `<li>
        <h3>${data.data.title}</h3>
        <img src="${data.data.image}" />
        <p>${data.data.description}</p>
      </li>`;
});
