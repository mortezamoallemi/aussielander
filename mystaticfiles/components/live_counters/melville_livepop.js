function melville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16278;
var increase = Math.round(passed*3.29443387832684e-13*population);
document.getElementById("melville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(melville_livepop, 500);
}
