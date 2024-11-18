function varsity_lakes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15182;
var increase = Math.round(passed*3.5081064918394e-13*population);
document.getElementById("varsity_lakes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(varsity_lakes_livepop, 500);
}
