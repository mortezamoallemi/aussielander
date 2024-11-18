function dorrigo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3245;
var increase = Math.round(passed*-8.92701661919685e-14*population);
document.getElementById("dorrigo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dorrigo_livepop, 500);
}
