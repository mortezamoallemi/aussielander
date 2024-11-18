function aldinga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15381;
var increase = Math.round(passed*5.27691309728383e-13*population);
document.getElementById("aldinga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(aldinga_livepop, 500);
}
