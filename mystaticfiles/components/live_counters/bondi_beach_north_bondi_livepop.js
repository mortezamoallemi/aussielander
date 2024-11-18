function bondi_beach_north_bondi_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20729;
var increase = Math.round(passed*4.44131177156541e-13*population);
document.getElementById("bondi_beach_north_bondi_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bondi_beach_north_bondi_livepop, 500);
}
