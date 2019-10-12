let services = document.getElementById('services');
fetch('https://e-services-manzi.herokuapp.com/api/services', {
  method: 'GET',
  mode: 'cors',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => {
    for (var i = data.length - 1; i >= 0; i--) {
      var description1 = data[i].description.substring(0,97) + '...';
      services.innerHTML += `<div class="service1">
                              <img src="${data[i].image}" />
                              <h3><a href="./pages/teach.html?id=${data[i].id}">${
                                data[i].title
                              }</a></h3>
                              <p>${data[i].description.length>100?description1:data[i].description.substring(0,100)}</p>
                              </div>`;
      if (i === data.length - 3) break;
    }
});