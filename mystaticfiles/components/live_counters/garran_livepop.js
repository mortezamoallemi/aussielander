function garran_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3499;
var increase = Math.round(passed*5.72452709968585e-13*population);
document.getElementById("garran_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(garran_livepop, 500);
}
