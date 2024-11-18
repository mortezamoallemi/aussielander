function west_arnhem_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4776;
var increase = Math.round(passed*9.49873354449396e-14*population);
document.getElementById("west_arnhem_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_arnhem_livepop, 500);
}
