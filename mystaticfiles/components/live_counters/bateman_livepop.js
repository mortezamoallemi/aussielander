function bateman_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3717;
var increase = Math.round(passed*-3.91217663072389e-14*population);
document.getElementById("bateman_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bateman_livepop, 500);
}
