function port_sorell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5624;
var increase = Math.round(passed*7.1926710715243e-13*population);
document.getElementById("port_sorell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_sorell_livepop, 500);
}
