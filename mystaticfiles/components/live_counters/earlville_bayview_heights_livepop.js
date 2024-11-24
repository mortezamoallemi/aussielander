function earlville_bayview_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8268;
var increase = Math.round(passed*2.12939469391199e-13*population);
document.getElementById("earlville_bayview_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(earlville_bayview_heights_livepop, 500);
}
