function west_launceston_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4136;
var increase = Math.round(passed*1.64654751696705e-13*population);
document.getElementById("west_launceston_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_launceston_livepop, 500);
}
