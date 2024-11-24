function bundamba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8921;
var increase = Math.round(passed*8.094861207346e-13*population);
document.getElementById("bundamba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bundamba_livepop, 500);
}
