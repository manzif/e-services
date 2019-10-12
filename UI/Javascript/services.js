let service = document.getElementById('host');
fetch('https://e-services-manzi.herokuapp.com/api/services', {
  method: 'GET',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(element => {
      
      service.innerHTML += `<li>
                              <h3><a href="./teach.html?id=${
                                element.id
                              }">${element.title}</a></h3>
                              <p>${element.description.substring(0,187) + '...'}</p>
                          </li>`;
    });
});
