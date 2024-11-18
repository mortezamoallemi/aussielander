function mullumbimby_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7994;
var increase = Math.round(passed*5.46487764079132e-13*population);
document.getElementById("mullumbimby_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mullumbimby_livepop, 500);
}
