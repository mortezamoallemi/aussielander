function moranbah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8735;
var increase = Math.round(passed*-1.65535909102156e-13*population);
document.getElementById("moranbah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moranbah_livepop, 500);
}
