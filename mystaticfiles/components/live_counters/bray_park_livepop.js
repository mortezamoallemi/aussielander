function bray_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10246;
var increase = Math.round(passed*1.522218259384e-13*population);
document.getElementById("bray_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bray_park_livepop, 500);
}
