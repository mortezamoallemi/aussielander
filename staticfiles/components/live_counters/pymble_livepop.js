function pymble_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16354;
var increase = Math.round(passed*2.44301335952737e-13*population);
document.getElementById("pymble_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pymble_livepop, 500);
}
