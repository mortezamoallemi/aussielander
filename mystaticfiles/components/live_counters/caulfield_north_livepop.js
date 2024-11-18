function caulfield_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20980;
var increase = Math.round(passed*3.76416700757279e-13*population);
document.getElementById("caulfield_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(caulfield_north_livepop, 500);
}
