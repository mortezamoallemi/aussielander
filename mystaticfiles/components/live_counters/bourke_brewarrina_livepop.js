function bourke_brewarrina_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4000;
var increase = Math.round(passed*-4.36492839484097e-13*population);
document.getElementById("bourke_brewarrina_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bourke_brewarrina_livepop, 500);
}
