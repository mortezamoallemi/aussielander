function penguin_sulphur_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5020;
var increase = Math.round(passed*1.08303277639479e-13*population);
document.getElementById("penguin_sulphur_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(penguin_sulphur_creek_livepop, 500);
}
