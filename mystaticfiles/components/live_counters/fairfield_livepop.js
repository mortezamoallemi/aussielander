function fairfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17704;
var increase = Math.round(passed*3.1429887973826e-13*population);
document.getElementById("fairfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fairfield_livepop, 500);
}
