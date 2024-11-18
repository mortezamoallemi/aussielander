function bonner_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6730;
var increase = Math.round(passed*9.54964247272694e-12*population);
document.getElementById("bonner_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bonner_livepop, 500);
}
