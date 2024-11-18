function middle_swan_herne_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5412;
var increase = Math.round(passed*2.6807739633653e-13*population);
document.getElementById("middle_swan_herne_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(middle_swan_herne_hill_livepop, 500);
}
