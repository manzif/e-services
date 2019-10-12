fetch('https://e-services-manzi.herokuapp.com/api/users', {
    method: 'GET',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
    }
}).then((res) => res.json())
.then((data) => {
      if(data.status == 404) {
          console.log(data.error);
      } else {
            data.forEach(function(user){
            var table = document.getElementById('accounts-table');
            var row = table.insertRow(table.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);

            cell1.innerHTML = table.rows.length - 2;
            cell2.innerHTML = user.fullname;
            cell3.innerHTML = user.email;
            cell4.innerHTML = new Date(user.createdAt).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
            cell5.innerHTML = new Date(user.updatedAt).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
            cell6.innerHTML = '<a id="delete_button' + user.id + '" href="#" class="button_3">Delete</a>';
            
            document.getElementById('delete_button' + user.id).addEventListener('click', function(){

                var confirmation = confirm('Are you sure you want to delete this user?')

                if(confirmation == true) {
                    fetch('https://e-services-manzi.herokuapp.com/api/users/' + user.id, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-type': 'application/json',
                        }
                    }).then((res) => res.json())
                    .then((data) => {
                        let success_msg = document.getElementById('success-msg3');
                        let error_msg = document.getElementById('error-msg3');

                        if(data.status == 400 || data.status == 404){
                            error_msg.style.display = 'block';
                            error_msg.innerHTML = '<strong>Error: </strong> ' + data.error;
                        } else {
                            success_msg.style.display = 'block';
                            success_msg.innerHTML = '<strong>Success: </strong> ' + data.message;
                            location.reload();
                        }
                    }).catch(function(error){
                        console.log(error);
                    });
                }
                });

        });
      }
}).catch(function(error){
    console.log(error);
});
