function roxby_downs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3891;
var increase = Math.round(passed*-1.22087018201235e-12*population);
document.getElementById("roxby_downs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(roxby_downs_livepop, 500);
}
