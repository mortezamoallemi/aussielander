function tamworth_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15077;
var increase = Math.round(passed*6.94559986940844e-13*population);
document.getElementById("tamworth_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tamworth_north_livepop, 500);
}
