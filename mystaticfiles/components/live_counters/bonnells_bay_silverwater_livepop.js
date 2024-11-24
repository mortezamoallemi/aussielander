function bonnells_bay_silverwater_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8719;
var increase = Math.round(passed*5.97546920771852e-13*population);
document.getElementById("bonnells_bay_silverwater_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bonnells_bay_silverwater_livepop, 500);
}
