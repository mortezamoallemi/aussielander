function bonnyrigg_heights_bonnyrigg_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15980;
var increase = Math.round(passed*3.22376318928036e-13*population);
document.getElementById("bonnyrigg_heights_bonnyrigg_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bonnyrigg_heights_bonnyrigg_livepop, 500);
}
