function willagee_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4872;
var increase = Math.round(passed*1.39505021125352e-13*population);
document.getElementById("willagee_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(willagee_livepop, 500);
}
