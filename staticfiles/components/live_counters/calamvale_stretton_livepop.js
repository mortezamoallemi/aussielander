function calamvale_stretton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21250;
var increase = Math.round(passed*8.89543661064507e-13*population);
document.getElementById("calamvale_stretton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(calamvale_stretton_livepop, 500);
}
