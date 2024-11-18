function nundah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12231;
var increase = Math.round(passed*1.03639452219401e-12*population);
document.getElementById("nundah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nundah_livepop, 500);
}
