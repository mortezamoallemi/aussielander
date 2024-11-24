function mitchell_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15150;
var increase = Math.round(passed*3.95083785041713e-13*population);
document.getElementById("mitchell_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mitchell_park_livepop, 500);
}
