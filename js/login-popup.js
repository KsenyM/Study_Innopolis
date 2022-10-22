let LoginButton = document.querySelector(".btn-text");
let LoginPopup = document.querySelector(".login-popup");
let PopupBg = document.querySelector(".background-popup")
let CloseBtn = document.querySelector(".close-icon");

console.log("It's works");
LoginButton.addEventListener("click", showPopup);
LoginButton.addEventListener("click", showBg);
CloseBtn.addEventListener("click", modalClose);
CloseBtn.addEventListener("click", BgClose);
PopupBg.addEventListener("click", modalClose);
PopupBg.addEventListener("click", BgClose);

function showBg() {
    document.body.style.overflow = "hidden";
    PopupBg.classList.remove("visuallyhidden");
}

function BgClose() {
    document.body.style.overflow = "hidden";
    PopupBg.classList.add("visuallyhidden");
}

function showPopup(evt) {
    evt.preventDefault();
    document.body.style.overflow = "hidden";
    LoginPopup.classList.remove("visuallyhidden");
}

function modalClose() {
    LoginPopup.classList.add("visuallyhidden");
    document.body.style.overflow = "";
    console.log('closed');
}




