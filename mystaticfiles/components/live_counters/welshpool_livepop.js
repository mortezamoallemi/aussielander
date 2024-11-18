function welshpool_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25;
var increase = Math.round(passed*2.44585540849813e-12*population);
document.getElementById("welshpool_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(welshpool_livepop, 500);
}
