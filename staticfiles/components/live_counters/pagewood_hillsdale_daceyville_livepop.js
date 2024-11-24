function pagewood_hillsdale_daceyville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11374;
var increase = Math.round(passed*4.5294196645924e-13*population);
document.getElementById("pagewood_hillsdale_daceyville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pagewood_hillsdale_daceyville_livepop, 500);
}
