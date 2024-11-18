function williamstown_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15455;
var increase = Math.round(passed*2.96962805759649e-13*population);
document.getElementById("williamstown_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(williamstown_livepop, 500);
}
