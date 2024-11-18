function wellington_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11581;
var increase = Math.round(passed*3.34500819899872e-13*population);
document.getElementById("wellington_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wellington_point_livepop, 500);
}
