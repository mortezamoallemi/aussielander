function whitfield_edge_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8191;
var increase = Math.round(passed*1.10908995572477e-13*population);
document.getElementById("whitfield_edge_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(whitfield_edge_hill_livepop, 500);
}