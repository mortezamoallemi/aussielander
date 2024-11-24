function dover_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10830;
var increase = Math.round(passed*2.42321291161563e-13*population);
document.getElementById("dover_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dover_heights_livepop, 500);
}
