function riverside_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6419;
var increase = Math.round(passed*3.53494458278439e-13*population);
document.getElementById("riverside_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(riverside_livepop, 500);
}
