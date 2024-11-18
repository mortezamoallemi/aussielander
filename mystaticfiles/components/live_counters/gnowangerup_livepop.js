function gnowangerup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2884;
var increase = Math.round(passed*1.19872575897745e-13*population);
document.getElementById("gnowangerup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gnowangerup_livepop, 500);
}
