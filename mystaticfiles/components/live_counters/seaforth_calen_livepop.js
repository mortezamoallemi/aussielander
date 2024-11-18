function seaforth_calen_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8126;
var increase = Math.round(passed*-2.23139730237849e-13*population);
document.getElementById("seaforth_calen_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seaforth_calen_livepop, 500);
}
