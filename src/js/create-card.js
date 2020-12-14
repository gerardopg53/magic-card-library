const onClick = function (event) {
    event.preventDefault();

    const cardName = document.getElementById("add-card-name");
    const cardType = document.getElementById("add-card-type");

    if (cardName.value && cardType.value) {

        const owner_id = document.cookie ? document.cookie : 1
        const cardObj = {
            name: cardName.value,
            type: cardType.value,
            owner: owner_id
        }
        console.log(cardObj);

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log("New card created.");
                alert("New card created.")
            } else if (this.readyState === 4) {
                console.log("Could not create new card.");
            }
        }

        xhr.open("POST" , "http://18.191.121.52:8080/project0/cards/add");
        xhr.send(JSON.stringify(cardObj));
    } else {
        alert("All fields required.");
    }
}

const submit = document.getElementById("submit-add-card");
submit.addEventListener('click' , onClick);