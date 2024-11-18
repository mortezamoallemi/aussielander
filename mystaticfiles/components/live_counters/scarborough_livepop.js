function scarborough_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15423;
var increase = Math.round(passed*4.91440012010692e-13*population);
document.getElementById("scarborough_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(scarborough_livepop, 500);
}
