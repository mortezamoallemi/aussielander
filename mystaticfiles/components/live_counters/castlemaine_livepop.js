function castlemaine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10583;
var increase = Math.round(passed*5.30991670898218e-13*population);
document.getElementById("castlemaine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(castlemaine_livepop, 500);
}
