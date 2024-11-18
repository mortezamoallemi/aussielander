function st_albans_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17219;
var increase = Math.round(passed*3.83350975228377e-13*population);
document.getElementById("st_albans_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_albans_south_livepop, 500);
}
