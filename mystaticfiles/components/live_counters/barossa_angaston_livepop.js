function barossa_angaston_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6112;
var increase = Math.round(passed*1.91716380356324e-13*population);
document.getElementById("barossa_angaston_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(barossa_angaston_livepop, 500);
}
