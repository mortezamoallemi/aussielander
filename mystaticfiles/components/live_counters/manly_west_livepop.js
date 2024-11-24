function manly_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11431;
var increase = Math.round(passed*4.10225355898662e-13*population);
document.getElementById("manly_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(manly_west_livepop, 500);
}
