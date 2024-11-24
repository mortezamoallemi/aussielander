function ballarat_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23083;
var increase = Math.round(passed*2.97265614656956e-13*population);
document.getElementById("ballarat_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ballarat_north_livepop, 500);
}
