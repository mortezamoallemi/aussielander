function mandurah_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5816;
var increase = Math.round(passed*1.0687751530456e-12*population);
document.getElementById("mandurah_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mandurah_east_livepop, 500);
}
