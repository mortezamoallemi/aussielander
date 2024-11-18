function st_peters_marden_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12953;
var increase = Math.round(passed*-5.16877834230797e-14*population);
document.getElementById("st_peters_marden_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_peters_marden_livepop, 500);
}
