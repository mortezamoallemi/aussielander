function batemans_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16046;
var increase = Math.round(passed*1.25334492401707e-13*population);
document.getElementById("batemans_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(batemans_bay_livepop, 500);
}
