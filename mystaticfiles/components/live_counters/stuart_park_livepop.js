function stuart_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4151;
var increase = Math.round(passed*6.47684580763102e-13*population);
document.getElementById("stuart_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(stuart_park_livepop, 500);
}
