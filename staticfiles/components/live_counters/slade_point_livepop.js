function slade_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3348;
var increase = Math.round(passed*-9.0248624333784e-13*population);
document.getElementById("slade_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(slade_point_livepop, 500);
}
