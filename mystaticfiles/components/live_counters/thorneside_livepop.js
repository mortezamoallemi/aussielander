function thorneside_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3764;
var increase = Math.round(passed*3.78374011105512e-13*population);
document.getElementById("thorneside_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(thorneside_livepop, 500);
}
