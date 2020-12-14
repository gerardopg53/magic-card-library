const toggleHidden = () => {
    const owner_id = document.cookie ? document.cookie : 1;

    if(owner_id == 1) {
        document.getElementById("navbar-options").children[2].style.display = "inline";
    } else {
        document.getElementById("navbar-options").children[2].style.display = "none";
    }
}

toggleHidden();