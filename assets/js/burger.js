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
const authMd = document.querySelector("header nav .menu .profile");
const manageUsr = document.querySelector("header nav .manage-usr");
const usrPref = manageUsr.querySelector(".settings");
const ursLogOut = manageUsr.querySelector("#log-out");

if (lclUser) {
    authBtn.style.display = "none";
    avatar.style.display = "block";
    authMd.style.display = "none";

    avatar.addEventListener("click", function() {
        if (manageUsr.style.display === "none") {
            manageUsr.style.display = "block";
        } else {
            manageUsr.style.display = "none";
        }
    });

    usrPref.addEventListener("click", function() {
        window.location.href = "../../pages/profile/profile.html";
    })

    ursLogOut.addEventListener("click", function() {
        localStorage.clear();
        avatar.style.display = "none";
        manageUsr.style.display = "none";
        window.location.reload();
    });
} 