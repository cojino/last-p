const togglebtns = document.querySelectorAll('.fa-heart');
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

togglebtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('toggle-pressed');
    })
});

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});