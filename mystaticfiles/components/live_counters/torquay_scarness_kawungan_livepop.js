function torquay_scarness_kawungan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15001;
var increase = Math.round(passed*2.08867757928463e-13*population);
document.getElementById("torquay_scarness_kawungan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(torquay_scarness_kawungan_livepop, 500);
}
