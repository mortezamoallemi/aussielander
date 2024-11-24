function traralgon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26788;
var increase = Math.round(passed*2.62710073552683e-13*population);
document.getElementById("traralgon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(traralgon_livepop, 500);
}
