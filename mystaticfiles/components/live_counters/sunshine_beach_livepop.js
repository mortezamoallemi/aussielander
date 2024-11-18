function sunshine_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6530;
var increase = Math.round(passed*1.84266239450657e-13*population);
document.getElementById("sunshine_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sunshine_beach_livepop, 500);
}
