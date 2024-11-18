function collingwood_park_redbank_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8519;
var increase = Math.round(passed*5.99988075186757e-13*population);
document.getElementById("collingwood_park_redbank_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(collingwood_park_redbank_livepop, 500);
}
