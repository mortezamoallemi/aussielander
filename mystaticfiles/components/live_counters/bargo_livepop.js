function bargo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5740;
var increase = Math.round(passed*3.79025874756515e-13*population);
document.getElementById("bargo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bargo_livepop, 500);
}
