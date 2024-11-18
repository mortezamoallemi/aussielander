function muswellbrook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12072;
var increase = Math.round(passed*1.49367027340256e-13*population);
document.getElementById("muswellbrook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(muswellbrook_livepop, 500);
}
