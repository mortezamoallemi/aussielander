function labrador_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18261;
var increase = Math.round(passed*6.81286971073853e-13*population);
document.getElementById("labrador_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(labrador_livepop, 500);
}
