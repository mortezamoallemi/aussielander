function munruben_park_ridge_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4613;
var increase = Math.round(passed*3.16995212026239e-14*population);
document.getElementById("munruben_park_ridge_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(munruben_park_ridge_south_livepop, 500);
}
