function upwey_tecoma_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9610;
var increase = Math.round(passed*-1.09910839512003e-13*population);
document.getElementById("upwey_tecoma_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(upwey_tecoma_livepop, 500);
}
