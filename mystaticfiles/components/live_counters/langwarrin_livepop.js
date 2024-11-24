function langwarrin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23832;
var increase = Math.round(passed*3.65032671440479e-13*population);
document.getElementById("langwarrin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(langwarrin_livepop, 500);
}
