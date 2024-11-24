function kedron_gordon_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13715;
var increase = Math.round(passed*5.33730284589315e-13*population);
document.getElementById("kedron_gordon_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kedron_gordon_park_livepop, 500);
}
