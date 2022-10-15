let LoginButton = document.querySelector(".btn-text");
let LoginPopup = document.querySelector(".background-popup");
let CloseBtn = document.querySelector(".close-icon");
console.log("It's works");

LoginButton.addEventListener("click", showPopup);
CloseBtn.addEventListener("click", modalClose);
LoginPopup.addEventListener("click", modalClose);

function showPopup(evt) {
    evt.preventDefault();
    LoginPopup.classList.remove("visuallyhidden");
}

function modalClose() {
    LoginPopup.classList.add("visuallyhidden");
    console.log('closed');
}



