function edgeworth_cameron_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14200;
var increase = Math.round(passed*1.3789829263505e-12*population);
document.getElementById("edgeworth_cameron_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(edgeworth_cameron_park_livepop, 500);
}
