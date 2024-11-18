function highton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22103;
var increase = Math.round(passed*8.53125054782208e-13*population);
document.getElementById("highton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(highton_livepop, 500);
}
