function maryborough_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7922;
var increase = Math.round(passed*2.37346530265276e-13*population);
document.getElementById("maryborough_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maryborough_vic_livepop, 500);
}
