function chinchilla_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8132;
var increase = Math.round(passed*8.74988431288135e-13*population);
document.getElementById("chinchilla_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chinchilla_livepop, 500);
}
