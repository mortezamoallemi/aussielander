function nicholls_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6862;
var increase = Math.round(passed*-8.08137692823617e-14*population);
document.getElementById("nicholls_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nicholls_livepop, 500);
}
