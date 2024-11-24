function lakes_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4876;
var increase = Math.round(passed*-2.33660728632509e-13*population);
document.getElementById("lakes_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lakes_creek_livepop, 500);
}
