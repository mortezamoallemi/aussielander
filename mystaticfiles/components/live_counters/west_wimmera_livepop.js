function west_wimmera_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2764;
var increase = Math.round(passed*-2.65129323134874e-13*population);
document.getElementById("west_wimmera_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_wimmera_livepop, 500);
}
