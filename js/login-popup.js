let LoginButton = document.querySelector(".btn-text");
let LoginPopup = document.querySelector(".background-popup");
let CloseBtn = document.querySelector(".close-icon");
console.log("It's works");

LoginButton.addEventListener("click", showPopup);
CloseBtn.addEventListener("click", modalClose);
LoginPopup.addEventListener("click", modalClose);

function showPopup(evt) {
    evt.preventDefault();
    document.body.style.position = 'fixed';
    LoginPopup.classList.remove("visuallyhidden");
}

function modalClose() {
    document.body.style.position = 'fixed';
    LoginPopup.classList.add("visuallyhidden");
    console.log('closed');
}



