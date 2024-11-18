function castlemaine_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8468;
var increase = Math.round(passed*2.20221077624186e-13*population);
document.getElementById("castlemaine_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(castlemaine_region_livepop, 500);
}
