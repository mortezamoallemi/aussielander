function central_highlands_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7289;
var increase = Math.round(passed*-2.23117712207366e-13*population);
document.getElementById("central_highlands_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(central_highlands_east_livepop, 500);
}
