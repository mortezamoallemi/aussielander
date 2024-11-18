function ipswich_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4642;
var increase = Math.round(passed*4.86826930099574e-13*population);
document.getElementById("ipswich_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ipswich_north_livepop, 500);
}
