function lawnton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6016;
var increase = Math.round(passed*3.1221938886237e-13*population);
document.getElementById("lawnton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lawnton_livepop, 500);
}
