function nailsworth_broadview_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6082;
var increase = Math.round(passed*1.23189584635296e-13*population);
document.getElementById("nailsworth_broadview_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nailsworth_broadview_livepop, 500);
}
