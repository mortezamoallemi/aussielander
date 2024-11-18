function loxton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5364;
var increase = Math.round(passed*1.58018463118559e-13*population);
document.getElementById("loxton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(loxton_livepop, 500);
}
