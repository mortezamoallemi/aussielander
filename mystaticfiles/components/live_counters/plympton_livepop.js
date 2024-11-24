function plympton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24241;
var increase = Math.round(passed*4.0008081502931e-13*population);
document.getElementById("plympton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(plympton_livepop, 500);
}
