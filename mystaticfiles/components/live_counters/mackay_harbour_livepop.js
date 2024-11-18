function mackay_harbour_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 518;
var increase = Math.round(passed*-1.09242175811005e-13*population);
document.getElementById("mackay_harbour_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mackay_harbour_livepop, 500);
}
