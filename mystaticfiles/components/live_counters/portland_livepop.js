function portland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10799;
var increase = Math.round(passed*4.95237717217292e-14*population);
document.getElementById("portland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(portland_livepop, 500);
}
