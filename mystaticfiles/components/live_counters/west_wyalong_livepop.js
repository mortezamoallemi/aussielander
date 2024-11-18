function west_wyalong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5929;
var increase = Math.round(passed*8.50704178175129e-14*population);
document.getElementById("west_wyalong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_wyalong_livepop, 500);
}
