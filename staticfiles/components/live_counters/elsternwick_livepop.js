function elsternwick_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11353;
var increase = Math.round(passed*3.50841797939681e-13*population);
document.getElementById("elsternwick_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(elsternwick_livepop, 500);
}
