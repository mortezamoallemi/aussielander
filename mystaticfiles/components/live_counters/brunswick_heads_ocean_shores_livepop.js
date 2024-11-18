function brunswick_heads_ocean_shores_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8212;
var increase = Math.round(passed*3.80329185512314e-13*population);
document.getElementById("brunswick_heads_ocean_shores_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brunswick_heads_ocean_shores_livepop, 500);
}
