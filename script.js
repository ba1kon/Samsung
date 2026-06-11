
let name = "Bakdaulet";
let age = 15;

console.log(name);
console.log(age);
let findphn = document.querySelector("#findphn");
let bestphn = document.querySelector("#bestphn");
bestphn.addEventListener('click', function() {
    findphn.textContent = "Sumsung Galaxy S25 Ultra.";
    findphn.style.color = "#001d6ba8";
    findphn.style.fontWeight = "700";
});
