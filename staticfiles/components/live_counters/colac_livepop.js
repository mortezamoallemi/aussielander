function colac_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12250;
var increase = Math.round(passed*2.50268740513797e-13*population);
document.getElementById("colac_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(colac_livepop, 500);
}
