function durack_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7952;
var increase = Math.round(passed*1.23395036323747e-12*population);
document.getElementById("durack_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(durack_livepop, 500);
}
