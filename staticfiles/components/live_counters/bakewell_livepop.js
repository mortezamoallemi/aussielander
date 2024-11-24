function bakewell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3073;
var increase = Math.round(passed*-2.36977636024896e-13*population);
document.getElementById("bakewell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bakewell_livepop, 500);
}
