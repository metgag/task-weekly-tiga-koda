const main = document.querySelector("main.bg-gray");
const paymBtn = document.querySelector(".personal-info form button");
const paymModal = document.querySelector("body>.paym-info");
const payLater = paymModal.querySelector("#pay-later");

// shown up modal pop up
paymBtn.addEventListener("click", function (e) {
    main.style.cssText = "filter: brightness(.46); background: linear-gradient(rgb(0,0,0,0.6));"
    paymModal.style.display = "flex";

    // hide modal
    payLater.addEventListener("click", function () {
        paymModal.style.display = "none";
        main.style.cssText = "filter: none; background: #A0A3BD33;"
    });

    e.preventDefault();
});
