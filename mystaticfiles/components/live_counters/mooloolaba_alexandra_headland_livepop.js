function mooloolaba_alexandra_headland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11692;
var increase = Math.round(passed*3.57010655681313e-13*population);
document.getElementById("mooloolaba_alexandra_headland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mooloolaba_alexandra_headland_livepop, 500);
}
