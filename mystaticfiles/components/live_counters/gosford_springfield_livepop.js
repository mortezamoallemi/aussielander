function gosford_springfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18802;
var increase = Math.round(passed*2.51138178530295e-13*population);
document.getElementById("gosford_springfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gosford_springfield_livepop, 500);
}
