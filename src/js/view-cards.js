const getCards = () => {
    const xhr = new XMLHttpRequest();
    const owner_id = document.cookie ? document.cookie : 1;

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log("Cards downloaded successfully");
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            for(let i = 0; i < data.length; i++) {
                putCardInChart(data[i]);
            }
        }
    }
    xhr.open("GET", "http://18.191.121.52:8080/project0/cards", true);
    xhr.send();
}

const putCardInChart = function (card) {
    const tableData = document.getElementById('card-table-data');
    const tableRow = document.createElement('tr');

    tableRow.innerHTML = `<td>${card.name}</td>
                          <td>${card.type}</td>
                          <td>${card.owner}</td>`

    tableData.appendChild(tableRow);
}

getCards();