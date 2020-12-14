const getCards = () => {
    const xhr = new XMLHttpRequest();
    const owner_id = document.cookie ? document.cookie : 1;

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log("Cards downloaded successfully");
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            const cards = data.cards;
            for(let i = 0; i < cards.length; i++) {
                putCardInChart(cards[i]);
            }
        }
    }
    xhr.open("GET", "http://18.191.121.52:8080/project0/users/" + owner_id, true);
    xhr.send();
}

const putCardInChart = function (card) {
    const tableData = document.getElementById('card-table-data');
    const tableRow = document.createElement('tr');

    tableRow.innerHTML = `<td>${card.name}</td>
                          <td>${card.type}</td>`

    tableData.appendChild(tableRow);
}

getCards();