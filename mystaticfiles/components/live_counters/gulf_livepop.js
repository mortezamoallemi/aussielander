function gulf_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4150;
var increase = Math.round(passed*1.64092041377359e-13*population);
document.getElementById("gulf_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gulf_livepop, 500);
}
