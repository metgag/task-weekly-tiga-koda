const regForm = document.querySelector("form.reg");
const regInput = regForm.querySelectorAll("input");
const regLabel = regForm.querySelectorAll("label");
const lclUser = localStorage.getItem("email");

if (lclUser) {
    alert("Mengalihkan ke laman landing, harap tunggu")
    setTimeout(() => {
        window.location.href = "../../pages/movie/index.html";
    }, 1500);
}

regForm.addEventListener("submit", (e) => {
    e.preventDefault();

    for (let input of regInput) {
        if (input.id === "email") {
            const re = /^[\w-.]+@[a-z]{5,}.com$/;
            // field email tidak boleh kosong
            if (input.value === null || input.value === "") {
                showErr("Field email tidak boleh kosong", `#err${input.id}`);
                continue;
            }
            // validasi format email
            if (!re.test(input.value)) {
                showErr("Format email tidak sesuai", `#err${input.id}`);
                continue;
            }
            showErr("", `#err${input.id}`);
        }

        if (input.type === "password") {
            // const re = /[a-zA-Z][!@#$%^&*\><]*/;
            const re = /^(?=.*[a-z])(?=.+[A-Z])(?=.+[!@#$%^&*/><]).{8,}$/;

            // field password tidak boleh kosong
            if (input.value === null || input.value === "") {
                showErr("Field password tidak boleh kosong", `#err${input.id}`);
                return;
            }
            // validasi password minimal 8 karakter
            if (input.value.length < 8) {
                showErr("Password minimal 8 karakter", `#err${input.id}`);
                return;
            }
            // validasi format password
            if (!re.test(input.value)) {
                showErr("Password harus terdiri dari minimal 1 huruf besar dan kecil, dan 1 buah karakter spesial(!@#$%^&*/><)", `#err${input.id}`);
                return;
            }
            showErr("", `#err${input.id}`);
        }

        // print hasil input ke console
        if (input.type !== "checkbox") {
            console.log(input.value);
            localStorage.setItem(input.id, input.value);
        }
    }

    alert("Akun berhasil disimpan.");
    window.location.href = "../../pages/sign/login.html";
});

const vPwd = document.querySelector("form.reg .pwd i");
const pwdInput = document.querySelector("form.reg input#pwd");

vPwd.addEventListener("click", () => {
    if (vPwd.classList[1] === "nf-fa-eye") {
        pwdInput.type = "text";

        vPwd.classList.remove("nf-fa-eye");
        vPwd.classList.add("nf-fa-eye_slash");
    } else {
        pwdInput.type = "password";

        vPwd.classList.remove("nf-fa-eye_slash");
        vPwd.classList.add("nf-fa-eye");
    }
});

function showErr(msg, assignTo) {
    const err = document.querySelector(assignTo);

    err.textContent = msg;
    err.style.cssText = "font-size: .75rem; color: darkred; font-weight: 700;";
    return;
}
