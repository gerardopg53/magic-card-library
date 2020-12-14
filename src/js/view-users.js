const owner_id = document.cookie ? document.cookie : 1;
const loginWarning = document.getElementById('login-warning');

const getUsers = () => {
    const xhr = new XMLHttpRequest();
    

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log("Users downloaded successfully!");
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            for(let i = 0; i < data.length; i++) {
                putUserInChart(data[i]);
            }
        }
    }
    xhr.open("GET", "http://18.191.121.52:8080/project0/users", true, "role", "1");
    xhr.withCredentials = true;
    xhr.send();
}

const putUserInChart = function (user) {
    const tableData = document.getElementById('user-table-data');
    const tableRow = document.createElement('tr');

    tableRow.innerHTML = `<td>${user.userName}</td>
                          <td>${user.email}</td>`

    tableData.appendChild(tableRow);
}

if(owner_id == 1) {
    loginWarning.hidden = true;
    getUsers();
} else {
    loginWarning.hidden = false;
}
