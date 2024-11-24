function winthrop_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5908;
var increase = Math.round(passed*-3.09016243796595e-13*population);
document.getElementById("winthrop_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(winthrop_livepop, 500);
}
