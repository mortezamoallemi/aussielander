function runcorn_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14482;
var increase = Math.round(passed*5.06678766189607e-13*population);
document.getElementById("runcorn_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(runcorn_livepop, 500);
}
