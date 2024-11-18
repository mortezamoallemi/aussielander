function albury_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10302;
var increase = Math.round(passed*-1.35212531929559e-13*population);
document.getElementById("albury_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albury_south_livepop, 500);
}
