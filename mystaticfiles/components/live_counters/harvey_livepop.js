function harvey_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8956;
var increase = Math.round(passed*4.11755921079514e-13*population);
document.getElementById("harvey_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(harvey_livepop, 500);
}
