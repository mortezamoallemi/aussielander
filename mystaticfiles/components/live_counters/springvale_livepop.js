function springvale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21775;
var increase = Math.round(passed*6.11971887962035e-13*population);
document.getElementById("springvale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(springvale_livepop, 500);
}
