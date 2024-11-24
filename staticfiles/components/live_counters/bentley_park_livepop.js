function bentley_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8015;
var increase = Math.round(passed*4.89191583474298e-13*population);
document.getElementById("bentley_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bentley_park_livepop, 500);
}