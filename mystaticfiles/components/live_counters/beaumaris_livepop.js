function beaumaris_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13474;
var increase = Math.round(passed*3.09613466605209e-13*population);
document.getElementById("beaumaris_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(beaumaris_livepop, 500);
}
