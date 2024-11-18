function gordon_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5661;
var increase = Math.round(passed*2.82929755596229e-13*population);
document.getElementById("gordon_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gordon_vic_livepop, 500);
}
