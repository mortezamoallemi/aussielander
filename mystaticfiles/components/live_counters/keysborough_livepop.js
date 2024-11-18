function keysborough_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25984;
var increase = Math.round(passed*1.6466951569199e-12*population);
document.getElementById("keysborough_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(keysborough_livepop, 500);
}
