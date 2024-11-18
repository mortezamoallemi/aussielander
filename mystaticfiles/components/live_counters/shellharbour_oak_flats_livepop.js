function shellharbour_oak_flats_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9951;
var increase = Math.round(passed*2.99490804537721e-13*population);
document.getElementById("shellharbour_oak_flats_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(shellharbour_oak_flats_livepop, 500);
}
