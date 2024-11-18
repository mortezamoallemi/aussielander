function south_hurstville_blakehurst_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24070;
var increase = Math.round(passed*3.98805244568297e-13*population);
document.getElementById("south_hurstville_blakehurst_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_hurstville_blakehurst_livepop, 500);
}
