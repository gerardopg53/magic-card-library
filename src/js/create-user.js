const onClick = function (event) {
    event.preventDefault();

    const userName = document.getElementById("user-name");
    const password = document.getElementById("user-password");
    const email    = document.getElementById("user-email");

    if (userName.value && password.value && email.value) {

        const userObj = {
            userName: userName.value,
            password: password.value,
            email: email.value,
            role_id: 2
        }
        console.log(userObj);

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log("New account created.");
                alert("New account created.")
            } else if (this.readyState === 4) {
                console.log("there was an issue creating new account");
            }
        }

        xhr.open("POST" , "http://18.191.121.52:8080/project0/users/add");
        xhr.send(JSON.stringify(userObj));
    } else {
        alert("All fields required.");
    }
}

const submit = document.getElementById("submit-new-user");
submit.addEventListener('click' , onClick);