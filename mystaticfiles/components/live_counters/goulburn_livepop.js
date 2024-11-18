function goulburn_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22890;
var increase = Math.round(passed*4.01732094986789e-13*population);
document.getElementById("goulburn_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(goulburn_livepop, 500);
}
