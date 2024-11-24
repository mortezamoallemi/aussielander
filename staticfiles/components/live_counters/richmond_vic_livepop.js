function richmond_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 30502;
var increase = Math.round(passed*9.83580357849833e-13*population);
document.getElementById("richmond_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(richmond_vic_livepop, 500);
}
