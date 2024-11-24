function fraser_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2027;
var increase = Math.round(passed*-2.87486099141822e-13*population);
document.getElementById("fraser_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fraser_livepop, 500);
}
