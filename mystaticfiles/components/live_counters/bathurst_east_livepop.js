function bathurst_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11186;
var increase = Math.round(passed*1.03742862932817e-12*population);
document.getElementById("bathurst_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bathurst_east_livepop, 500);
}
