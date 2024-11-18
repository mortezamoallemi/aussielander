function hervey_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 52075;
var increase = Math.round(passed*4.27814589713679e-13*population);
document.getElementById("hervey_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hervey_bay_livepop, 500);
}
