function barkly_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2539;
var increase = Math.round(passed*-2.95255074017417e-13*population);
document.getElementById("barkly_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(barkly_livepop, 500);
}
