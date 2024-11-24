function greenfield_park_prairiewood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8336;
var increase = Math.round(passed*4.52457204872505e-13*population);
document.getElementById("greenfield_park_prairiewood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(greenfield_park_prairiewood_livepop, 500);
}
