function yarrawonga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7929;
var increase = Math.round(passed*7.39780603664204e-13*population);
document.getElementById("yarrawonga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yarrawonga_livepop, 500);
}
