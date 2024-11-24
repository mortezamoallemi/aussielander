function ingleburn_denham_court_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19985;
var increase = Math.round(passed*1.18114007517218e-12*population);
document.getElementById("ingleburn_denham_court_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ingleburn_denham_court_livepop, 500);
}
