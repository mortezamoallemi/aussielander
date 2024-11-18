function waikerie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6608;
var increase = Math.round(passed*2.75588825811325e-13*population);
document.getElementById("waikerie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(waikerie_livepop, 500);
}
