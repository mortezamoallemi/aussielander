function durack_marlow_lagoon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4289;
var increase = Math.round(passed*9.97116122502084e-13*population);
document.getElementById("durack_marlow_lagoon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(durack_marlow_lagoon_livepop, 500);
}
