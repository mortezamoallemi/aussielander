function davoren_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17657;
var increase = Math.round(passed*8.02621318721962e-13*population);
document.getElementById("davoren_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(davoren_park_livepop, 500);
}
