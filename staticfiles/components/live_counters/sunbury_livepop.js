function sunbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12709;
var increase = Math.round(passed*3.60311080884676e-14*population);
document.getElementById("sunbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sunbury_livepop, 500);
}
