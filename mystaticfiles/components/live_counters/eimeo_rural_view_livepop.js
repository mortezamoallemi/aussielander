function eimeo_rural_view_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12327;
var increase = Math.round(passed*1.38539743114072e-12*population);
document.getElementById("eimeo_rural_view_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(eimeo_rural_view_livepop, 500);
}
