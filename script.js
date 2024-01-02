let btn = document.querySelector("#Add");
let istatus = document.querySelector("h2");

let checker = 0;

btn.addEventListener('click', function () {
    if (checker == 0) {
        istatus.innerHTML = "Friend"
        istatus.style.color = "Green"
        btn.innerHTML = "Remove Friend"
        checker = 1
    }
    else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "Red"
        btn.innerHTML = "Add Friend"
        checker = 0
    }
})