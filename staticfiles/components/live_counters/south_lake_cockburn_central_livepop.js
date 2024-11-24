function south_lake_cockburn_central_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11466;
var increase = Math.round(passed*2.38964679251256e-13*population);
document.getElementById("south_lake_cockburn_central_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_lake_cockburn_central_livepop, 500);
}
