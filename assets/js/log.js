const logForm = document.querySelector("form.log");
const logInput = logForm.querySelectorAll("input");

const lclUser = localStorage.getItem("email");

if (lclUser) {
    setTimeout(() => {
        window.location.href = "../../pages/movie/index.html";
    }, 2000);
}
