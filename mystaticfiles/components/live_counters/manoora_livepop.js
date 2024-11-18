function manoora_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6023;
var increase = Math.round(passed*3.62929867837673e-13*population);
document.getElementById("manoora_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(manoora_livepop, 500);
}
