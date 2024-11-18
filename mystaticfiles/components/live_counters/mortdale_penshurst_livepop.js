function mortdale_penshurst_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23907;
var increase = Math.round(passed*4.49840320994702e-13*population);
document.getElementById("mortdale_penshurst_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mortdale_penshurst_livepop, 500);
}
