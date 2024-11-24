function ingle_farm_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14834;
var increase = Math.round(passed*6.44557184156426e-14*population);
document.getElementById("ingle_farm_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ingle_farm_livepop, 500);
}
