function berwick_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25800;
var increase = Math.round(passed*7.31875642326717e-13*population);
document.getElementById("berwick_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(berwick_south_livepop, 500);
}
