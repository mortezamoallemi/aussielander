function balmain_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15686;
var increase = Math.round(passed*3.88902478786433e-13*population);
document.getElementById("balmain_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(balmain_livepop, 500);
}
