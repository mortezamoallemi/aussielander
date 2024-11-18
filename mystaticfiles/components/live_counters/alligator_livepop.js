function alligator_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4564;
var increase = Math.round(passed*4.75978305981455e-13*population);
document.getElementById("alligator_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(alligator_livepop, 500);
}
