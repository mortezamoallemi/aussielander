function cranbourne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20091;
var increase = Math.round(passed*4.81193414806278e-13*population);
document.getElementById("cranbourne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cranbourne_livepop, 500);
}
