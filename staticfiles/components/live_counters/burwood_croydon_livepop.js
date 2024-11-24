function burwood_croydon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24653;
var increase = Math.round(passed*1.01317417000132e-12*population);
document.getElementById("burwood_croydon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burwood_croydon_livepop, 500);
}
