function melton_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17550;
var increase = Math.round(passed*1.35582041418474e-12*population);
document.getElementById("melton_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(melton_west_livepop, 500);
}
