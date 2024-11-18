function drouin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16210;
var increase = Math.round(passed*1.29310947059896e-12*population);
document.getElementById("drouin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(drouin_livepop, 500);
}
