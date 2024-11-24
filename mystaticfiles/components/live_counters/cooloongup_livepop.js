function cooloongup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8589;
var increase = Math.round(passed*-3.09364437686e-14*population);
document.getElementById("cooloongup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cooloongup_livepop, 500);
}
