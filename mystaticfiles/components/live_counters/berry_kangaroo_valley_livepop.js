function berry_kangaroo_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8788;
var increase = Math.round(passed*3.73798221992881e-13*population);
document.getElementById("berry_kangaroo_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(berry_kangaroo_valley_livepop, 500);
}
