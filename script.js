const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");
const continuar = document.getElementById("Continuar");
const continuar2 = document.getElementById("Continuar2");
const continuar3 = document.getElementById("Continuar3");


const container = document.querySelector(".container");
const container100 = document.querySelector(".container100");
const containe2 = document.querySelector(".containe2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
const container5 = document.querySelector(".container5");




// Adiciona o evento de clique no botão SIM
btnSim.addEventListener("click", function () {
    container.style.display = "none";
    containe2.style.display = "flex";
});
btnNao.addEventListener("click", function () {
    container.style.display = "none";
    container100.style.display = "flex";
});

continuar.addEventListener("click", function () {
    container.style.display = "none";
    containe2.style.display = "none";
    container3.style.display = "Block";
});
continuar2.addEventListener("click", function () {
    container.style.display = "none";
    containe2.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "block";
});
continuar3.addEventListener("click", function () {
    container.style.display = "none";
    containe2.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "block";
});




