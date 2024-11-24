function risdon_vale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3097;
var increase = Math.round(passed*4.05888576149108e-13*population);
document.getElementById("risdon_vale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(risdon_vale_livepop, 500);
}
