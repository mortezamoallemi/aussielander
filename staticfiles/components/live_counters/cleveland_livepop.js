function cleveland_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14798;
var increase = Math.round(passed*1.66743277531138e-13*population);
document.getElementById("cleveland_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cleveland_livepop, 500);
}
