function edwardstown_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13502;
var increase = Math.round(passed*4.55625752403117e-13*population);
document.getElementById("edwardstown_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(edwardstown_livepop, 500);
}
