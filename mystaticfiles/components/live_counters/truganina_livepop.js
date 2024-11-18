function truganina_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23409;
var increase = Math.round(passed*4.69348057954539e-12*population);
document.getElementById("truganina_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(truganina_livepop, 500);
}
