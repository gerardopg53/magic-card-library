const onClick = function (event) {
    event.preventDefault();

    const userName = document.getElementById("login-username");
    const password = document.getElementById("login-password");

    if (userName.value && password.value) {

        const userObj = {
            userName: userName.value,
            password: password.value,
        }

        console.log(userObj)
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(userName.value + " logged in successfully!");
                console.log(owner(xhr));
                alert("You have logged in.")
                document.cookie = owner(xhr);
            } else if (this.readyState === 4) {
                console.log("Incorrect username/password,");
            }
        }
        xhr.open("POST", "http://18.191.121.52:8080/project0/login");
        xhr.send(JSON.stringify(userObj));
    } else {
        alert("All fields must me completed.");
    }
}

const owner = (xhr) => (xhr.responseText[xhr.responseText.length-2] 
                      + xhr.responseText[xhr.responseText.length-1]).trim();

const submit = document.getElementById("login-submit");
submit.addEventListener('click' , onClick);