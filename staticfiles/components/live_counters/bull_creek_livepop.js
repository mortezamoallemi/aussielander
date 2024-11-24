function bull_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7743;
var increase = Math.round(passed*1.65964158631993e-13*population);
document.getElementById("bull_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bull_creek_livepop, 500);
}
