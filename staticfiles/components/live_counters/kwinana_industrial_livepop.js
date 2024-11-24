function kwinana_industrial_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26;
var increase = Math.round(passed*5.4553606368792e-12*population);
document.getElementById("kwinana_industrial_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kwinana_industrial_livepop, 500);
}
