function port_adelaide_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10785;
var increase = Math.round(passed*4.70602629645567e-15*population);
document.getElementById("port_adelaide_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_adelaide_livepop, 500);
}
