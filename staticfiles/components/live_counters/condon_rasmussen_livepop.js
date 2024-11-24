function condon_rasmussen_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10476;
var increase = Math.round(passed*8.0417841044579e-14*population);
document.getElementById("condon_rasmussen_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(condon_rasmussen_livepop, 500);
}
