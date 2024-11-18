function caulfield_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17452;
var increase = Math.round(passed*3.81163722427493e-13*population);
document.getElementById("caulfield_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(caulfield_south_livepop, 500);
}
