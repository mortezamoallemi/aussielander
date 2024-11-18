function grafton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18673;
var increase = Math.round(passed*1.07206018801361e-13*population);
document.getElementById("grafton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(grafton_livepop, 500);
}
