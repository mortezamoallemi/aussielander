function charleville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4309;
var increase = Math.round(passed*-4.37844272521251e-13*population);
document.getElementById("charleville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(charleville_livepop, 500);
}
