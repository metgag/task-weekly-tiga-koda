const burgerBtn = document.querySelector("nav .burger i");
const burgerMenu = document.querySelector("nav .menu");

burgerBtn.addEventListener("click", () => {
    if (burgerBtn.classList[1] === "nf-md-menu") {
        burgerMenu.style.display = "flex";

        burgerBtn.classList.remove("nf-md-menu");
        burgerBtn.classList.add("nf-md-menu_up");
    } else {
        burgerMenu.style.display = "none";
        burgerBtn.classList.remove("nf-md-menu_up");
        burgerBtn.classList.add("nf-md-menu");
    }
});

const lclUser = localStorage.getItem("email");
const authBtn = document.querySelector(".account");
const avatar = document.querySelector("header nav #profile-pic");
const logOut = document.querySelector("header nav #log-out");
const authMd = document.querySelector("header nav .menu .profile");

if (lclUser) {
    authBtn.style.display = "none";
    avatar.style.display = "block";
    authMd.style.display = "none";

    avatar.addEventListener("click", function() {
        if (logOut.style.display === "none") {
            logOut.style.display = "block";
        } else {
            logOut.style.display = "none";
        }
    });

    logOut.addEventListener("click", function() {
        localStorage.clear();
        avatar.style.display = "none";
        logOut.style.display = "none";
        window.location.reload();
    });
} 