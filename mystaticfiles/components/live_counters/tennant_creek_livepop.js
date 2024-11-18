function tennant_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2997;
var increase = Math.round(passed*-1.34004766798258e-13*population);
document.getElementById("tennant_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tennant_creek_livepop, 500);
}
