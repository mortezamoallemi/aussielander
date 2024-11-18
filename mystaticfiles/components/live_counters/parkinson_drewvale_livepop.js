function parkinson_drewvale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15581;
var increase = Math.round(passed*4.96376302394486e-13*population);
document.getElementById("parkinson_drewvale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parkinson_drewvale_livepop, 500);
}
