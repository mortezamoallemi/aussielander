function canberra_queanbeyan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 432371;
var increase = Math.round(passed*6.27430907111379e-13*population);
document.getElementById("canberra_queanbeyan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(canberra_queanbeyan_livepop, 500);
}
