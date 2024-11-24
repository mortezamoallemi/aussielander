function fairfield_dutton_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4790;
var increase = Math.round(passed*1.10196019917062e-12*population);
document.getElementById("fairfield_dutton_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fairfield_dutton_park_livepop, 500);
}
