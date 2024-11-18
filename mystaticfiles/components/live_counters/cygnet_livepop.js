function cygnet_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4233;
var increase = Math.round(passed*5.40799782272327e-13*population);
document.getElementById("cygnet_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cygnet_livepop, 500);
}
