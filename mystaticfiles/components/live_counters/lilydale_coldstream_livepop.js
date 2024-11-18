function lilydale_coldstream_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18721;
var increase = Math.round(passed*2.53304284104962e-13*population);
document.getElementById("lilydale_coldstream_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lilydale_coldstream_livepop, 500);
}
