function carrum_patterson_lakes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11547;
var increase = Math.round(passed*2.00303701357213e-13*population);
document.getElementById("carrum_patterson_lakes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carrum_patterson_lakes_livepop, 500);
}
