function maryborough_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26930;
var increase = Math.round(passed*1.70656651439698e-13*population);
document.getElementById("maryborough_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maryborough_livepop, 500);
}
