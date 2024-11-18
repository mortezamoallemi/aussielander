function cranbourne_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15056;
var increase = Math.round(passed*3.44627620477414e-12*population);
document.getElementById("cranbourne_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cranbourne_west_livepop, 500);
}
