function granville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3208;
var increase = Math.round(passed*8.75865049395016e-14*population);
document.getElementById("granville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(granville_livepop, 500);
}
