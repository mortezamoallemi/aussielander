function wavell_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9785;
var increase = Math.round(passed*2.30330031092155e-13*population);
document.getElementById("wavell_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wavell_heights_livepop, 500);
}
