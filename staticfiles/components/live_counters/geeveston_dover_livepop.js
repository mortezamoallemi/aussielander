function geeveston_dover_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3659;
var increase = Math.round(passed*2.96266159688699e-13*population);
document.getElementById("geeveston_dover_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(geeveston_dover_livepop, 500);
}
