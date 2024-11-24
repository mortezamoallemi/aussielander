function marangaroo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10587;
var increase = Math.round(passed*4.02627222962897e-14*population);
document.getElementById("marangaroo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(marangaroo_livepop, 500);
}
