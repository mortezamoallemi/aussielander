function bathurst_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 35013;
var increase = Math.round(passed*4.76248768422433e-13*population);
document.getElementById("bathurst_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bathurst_livepop, 500);
}
