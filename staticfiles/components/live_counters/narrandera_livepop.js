function narrandera_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6034;
var increase = Math.round(passed*-9.28591562591833e-14*population);
document.getElementById("narrandera_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(narrandera_livepop, 500);
}
