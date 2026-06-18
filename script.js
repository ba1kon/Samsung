
let name = "Bakdaulet";
let age = 15;

console.log(name);
console.log(age);
let findphn = document.querySelector("#findphn");
let bestphn = document.querySelector("#bestphn");
bestphn.addEventListener('click', function () {
    findphn.textContent = "Sumsung Galaxy S25 Ultra.";
    findphn.style.color = "#b6bbffa8";
    findphn.style.fontWeight = "700";
});
let form = document.querySelector("#contactsForm");
let formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault()

    formMessage.textContent = "Спасибо! Сообщение отправлено.";
    formMessage.style.color = "green";
});
const bestProducts = document.querySelector("#bestProducts");
const scrollTopBtn = document.querySelector("#scrollTopBtn");
if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
setTimeout(() => {
    document.body.style.pointerEvents = "auto";
}, 800);

