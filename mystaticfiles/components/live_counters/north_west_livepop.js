function north_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4036;
var increase = Math.round(passed*-3.14191653528176e-15*population);
document.getElementById("north_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_west_livepop, 500);
}
