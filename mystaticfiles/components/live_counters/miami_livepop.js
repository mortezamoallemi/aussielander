function miami_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6846;
var increase = Math.round(passed*4.64006696203313e-13*population);
document.getElementById("miami_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(miami_livepop, 500);
}
