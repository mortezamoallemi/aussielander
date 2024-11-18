function mallala_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3166;
var increase = Math.round(passed*1.25427188849873e-13*population);
document.getElementById("mallala_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mallala_livepop, 500);
}
