function kerang_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3890;
var increase = Math.round(passed*2.94139283106565e-14*population);
document.getElementById("kerang_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kerang_livepop, 500);
}
