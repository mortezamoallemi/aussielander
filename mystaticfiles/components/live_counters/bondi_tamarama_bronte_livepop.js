function bondi_tamarama_bronte_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18401;
var increase = Math.round(passed*1.79672875146681e-13*population);
document.getElementById("bondi_tamarama_bronte_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bondi_tamarama_bronte_livepop, 500);
}
