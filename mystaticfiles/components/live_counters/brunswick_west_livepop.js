function brunswick_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13731;
var increase = Math.round(passed*2.75154709142832e-13*population);
document.getElementById("brunswick_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brunswick_west_livepop, 500);
}
